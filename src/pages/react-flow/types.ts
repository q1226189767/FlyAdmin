import { Edge, Node } from 'reactflow';

// 节点状态枚举
export enum ProcessNodeStatus {
  IDLE = 'idle',
  RUNNING = 'running',
  FINISHED = 'finished',
  ERROR = 'error',
  SKIPPED = 'skipped',
  CANCELLED = 'cancelled',
}

// 边的状态枚举
export enum EdgeStatus {
  IDLE = 'idle',
  ANIMATING = 'animating',
  FINISHED = 'finished',
  ERROR = 'error',
  CANCELLED = 'cancelled',
  SKIPPED = 'skipped',
}

export interface ProcessNodeData {
  isRunning?: boolean;
  isFinished?: boolean;
  hasError?: boolean;
  isSkipped?: boolean;
  isCancelled?: boolean;
  status?: ProcessNodeStatus;
  error?: string;
}

export type ProcessNode = Node<ProcessNodeData>;

export interface EdgeData {
  isAnimating?: boolean;
  isFinished?: boolean;
  hasError?: boolean;
  isCancelled?: boolean;
  isSkipped?: boolean;
  status?: EdgeStatus;
  error?: string;
  onAnimationComplete?: (edgeId: string) => void;
}

export type ProcessEdge = Edge<EdgeData>;

// 流程控制选项
export interface ProcessOptions {
  cancelOnError: boolean;
  animationDuration: number;
  autoLayout: boolean;
}

export interface ProcessStore {
  nodes: ProcessNode[];
  edges: ProcessEdge[];
  isRunning: boolean;
  cancelOnError: boolean;
  options: ProcessOptions;
  setNodes: (nodes: ProcessNode[]) => void;
  setEdges: (edges: ProcessEdge[]) => void;
  updateNodeData: (nodeId: string, data: Partial<ProcessNodeData>) => void;
  updateEdgeData: (edgeId: string, data: Partial<EdgeData>) => void;
  setIsRunning: (isRunning: boolean) => void;
  setCancelOnError: (cancel: boolean) => void;
  setOptions: (options: Partial<ProcessOptions>) => void;
}
