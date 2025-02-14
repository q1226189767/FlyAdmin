import { t } from '@/utils/i18n';
import ReactFlow, {
  Background,
  Panel,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useProcessStore } from './store';
import ProcessNode from './components/ProcessNode';
import AnimationEdge from './components/AnimationEdge';
import Icon from './components/Icon';
import { useLayoutFlow } from './hooks/useLayoutFlow';
import { useShuffle } from './hooks/useShuffle';
import { useRunProcess } from './hooks/useRunProcess';
import { useEffect, useCallback } from 'react';
import { debounce } from 'lodash-es';

const nodeTypes = {
  process: ProcessNode,
};

const edgeTypes = {
  animation: AnimationEdge,
};

// 类型定义
type ControlButtonProps = {
  icon: 'play' | 'stop' | 'horizontal' | 'vertical' | 'shuffle';
  onClick: () => void;
  disabled?: boolean;
  title?: string;
};

// 添加 Spinner 组件
const Spinner: React.FC = () => (
  <div className="w-5 h-5 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
);

const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  title,
}) => (
  <button
    className="flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-lg 
              hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {icon === 'stop' ? (
      <div className="group">
        {/* <div className="hidden group-hover:block">
          {' '}
          <Icon name={icon} />{' '}
        </div> */}
        <div className="block group-hover:hidden">
          {' '}
          <Spinner />
        </div>
      </div>
    ) : (
      <Icon name={icon} />
    )}
  </button>
);

const Flow = () => {
  const { fitView } = useReactFlow();
  const { nodes, edges, setNodes, setEdges } = useProcessStore();
  const { layout, previousDirection } = useLayoutFlow();
  const shuffle = useShuffle();
  const { run, stop, reset, isRunning } = useRunProcess();

  const delayedFitView = () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        fitView({
          padding: 0.2,
          duration: 200,
        });
      }, 50);
    });
  };

  // 随机重排
  const handleShuffle = async () => {
    await stop();
    reset(nodes, edges);
    const newEdges = shuffle(nodes);
    setEdges(newEdges);
  };

  useEffect(() => {
    if (edges.length > 0) {
      layoutGraph(previousDirection);
    }
  }, [edges]);

  // 布局
  const layoutGraph = (direction: 'LR' | 'TB') => {
    const newNodes = layout(nodes, edges, direction);
    setNodes(newNodes);
    delayedFitView();
    run(newNodes, edges);
  };

  const debouncedFitView = useCallback(
    debounce(() => {
      delayedFitView();
    }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedFitView);
    return () => {
      window.removeEventListener('resize', debouncedFitView);
      // 清理防抖函数的定时器
      debouncedFitView.cancel();
    };
  }, [debouncedFitView]);

  return (
    <div style={{ width: '100%', height: '85vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onInit={() => layoutGraph('LR')}
      >
        <Background />
        <Panel
          position="top-left"
          className="flex gap-2 p-2 bg-gray-800 rounded-lg"
        >
          <ControlButton
            icon={isRunning ? 'stop' : 'play'}
            onClick={isRunning ? () => {} : () => run(nodes, edges)}
            title={
              isRunning ? t('BkVpkOIA' /* 停止 */) : t('okHBWgOX' /* 运行 */)
            }
          />
          <ControlButton
            icon="horizontal"
            onClick={() => layoutGraph('LR')}
            disabled={isRunning}
            title={t('dfxNlKVZ' /* 水平布局 */)}
          />
          <ControlButton
            icon="vertical"
            onClick={() => layoutGraph('TB')}
            disabled={isRunning}
            title={t('RumZvaQc' /* 垂直布局 */)}
          />
          <ControlButton
            icon="shuffle"
            onClick={handleShuffle}
            disabled={isRunning}
            title={t('LQuElcZv' /* 随机重排 */)}
          />
        </Panel>
      </ReactFlow>
    </div>
  );
};

const ReactFlowLayout = () => {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
};

export default ReactFlowLayout;
