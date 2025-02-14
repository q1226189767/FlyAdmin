import { useProcessStore } from '../store';
import { ProcessNode, ProcessEdge } from '../types';

export function useRunProcess() {
  const { updateNodeData, setIsRunning, isRunning, updateEdgeData } =
    useProcessStore();

  // 重置状态
  const reset = (nodes: ProcessNode[], edges: ProcessEdge[]) => {
    setIsRunning(false);
    nodes.forEach((node) => {
      updateNodeData(node.id, {
        isRunning: false,
        isFinished: false,
        hasError: false,
        isSkipped: false,
        isCancelled: false,
      });
    });
    edges.forEach((edge) => {
      updateEdgeData(edge.id, {
        hasError: false,
        isSkipped: false,
        isCancelled: false,
        isFinished: false,
      });
    });
  };

  const STATUS_PROBABILITY = {
    hasError: 0.15, // 15%
    isSkipped: 0.25, // 10%
    isCancelled: 0.35, // 10%
    isFinished: 1, // 65%
  } as const;

  // 更新边的状态
  const updateEdgeStatus = (
    edges: ProcessEdge[],
    sourceId: string,
    status: string
  ) => {
    edges.forEach((edge) => {
      if (edge.source === sourceId) {
        // 更新边的状态数据
        updateEdgeData(edge.id, {
          hasError: status === 'hasError',
          isSkipped: status === 'isSkipped',
          isCancelled: false,
          isFinished: status === 'isFinished',
        });
      }
    });
  };

  const runNode = async (
    nodeId: string,
    nodeMap: Map<string, string[]>,
    edges: ProcessEdge[],
    parentStatus?: string
  ): Promise<void> => {
    // 设置节点为运行状态
    updateNodeData(nodeId, { isRunning: true });

    // 模拟处理时间
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let status: string;
    if (
      parentStatus &&
      ['hasError', 'isSkipped', 'isCancelled'].includes(parentStatus)
    ) {
      status = parentStatus;
    } else {
      const random = Math.random();
      status =
        Object.entries(STATUS_PROBABILITY).find(
          ([, threshold]) => random < threshold
        )?.[0] || 'isFinished';
    }

    // 更新节点状态
    updateNodeData(nodeId, {
      [status]: true,
      isRunning: false,
    });

    // 更新相关边的状态
    updateEdgeStatus(edges, nodeId, status);

    // 处理子节点
    const children = nodeMap.get(nodeId) || [];
    await Promise.all(
      children.map((childId) => runNode(childId, nodeMap, edges, status))
    );
  };

  const run = async (nodes: ProcessNode[], edges: ProcessEdge[]) => {
    if (isRunning) return;

    reset(nodes, edges);
    setIsRunning(true);

    // 重置所有边的状态
    edges.forEach((edge) => {
      edge.data = {
        hasError: false,
        isSkipped: false,
        isCancelled: false,
        isFinished: false,
      };
    });

    // 构建节点关系图
    const nodeMap = new Map<string, string[]>();
    edges.forEach((edge) => {
      if (!nodeMap.has(edge.source)) {
        nodeMap.set(edge.source, []);
      }
      nodeMap.get(edge.source)?.push(edge.target);
    });

    // 找到根节点（入度为0的节点）
    const rootNodes = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id)
    );

    // 执行所有根节点的处理
    await Promise.all(
      rootNodes.map((node) => runNode(node.id, nodeMap, edges))
    );

    // 所有节点处理完成后
    setIsRunning(false);
  };

  const stop = async () => {
    // 最后更新全局运行状态
    setIsRunning(false);
  };

  return {
    run,
    stop,
    reset,
    isRunning,
  };
}
