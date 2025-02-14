import dagre from 'dagre';
import { Position } from 'reactflow';
import { ProcessNode, ProcessEdge } from '../types';
import { useRef } from 'react';

export const useLayoutFlow = () => {
  const previousDirection = useRef<'LR' | 'TB'>('LR');
  const graph = useRef(new dagre.graphlib.Graph());

  const layout = (
    nodes: ProcessNode[],
    edges: ProcessEdge[],
    direction: 'LR' | 'TB'
  ) => {
    const dagreGraph = new dagre.graphlib.Graph();
    graph.current = dagreGraph;

    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({
      rankdir: direction,
      ranksep: 80,
      nodesep: 80,
      edgesep: 80,
    });

    previousDirection.current = direction;

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, {
        width: 44,
        height: 44,
      });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    return nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);

      return {
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        position: {
          x: nodeWithPosition.x - 22,
          y: nodeWithPosition.y - 22,
        },
      };
    });
  };

  return {
    layout,
    graph: graph.current,
    previousDirection: previousDirection.current,
  };
};
