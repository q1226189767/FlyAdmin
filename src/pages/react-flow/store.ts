import { create } from 'zustand';
import { ProcessStore, ProcessOptions } from './types';
import { initialEdges, initialNodes } from './initialElements';

const DEFAULT_OPTIONS: ProcessOptions = {
  cancelOnError: true,
  animationDuration: 2000,
  autoLayout: true,
};

export const useProcessStore = create<ProcessStore>((set) => ({
  nodes: initialNodes,
  edges: initialEdges,
  isRunning: false,
  cancelOnError: true,
  options: DEFAULT_OPTIONS,

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  updateNodeData: (nodeId, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      ),
    })),

  setIsRunning: (isRunning) => set({ isRunning }),
  setCancelOnError: (cancelOnError) => set({ cancelOnError }),
  setOptions: (options) =>
    set((state) => ({
      options: { ...state.options, ...options },
    })),

  updateEdgeData: (edgeId: string, data: any) =>
    set((state) => ({
      edges: state.edges.map((edge) =>
        edge.id === edgeId ? { ...edge, data: { ...edge.data, ...data } } : edge
      ),
    })),
}));
