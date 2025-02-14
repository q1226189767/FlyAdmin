import { ProcessNode, ProcessEdge, EdgeStatus } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function generatePossibleEdges(nodes: ProcessNode[]): ProcessEdge[] {
  const possibleEdges: ProcessEdge[] = [];

  nodes.forEach((sourceNode) => {
    nodes.forEach((targetNode) => {
      if (sourceNode.id !== targetNode.id) {
        possibleEdges.push({
          id: `e${sourceNode.id}-${targetNode.id}`,
          source: sourceNode.id,
          target: targetNode.id,
          type: 'animation',
          animated: true,
          data: {
            status: EdgeStatus.IDLE,
            error: undefined,
          },
        });
      }
    });
  });

  return possibleEdges;
}

export function useShuffle() {
  return (nodes: ProcessNode[]) => {
    const possibleEdges = generatePossibleEdges(nodes);
    const shuffledEdges = shuffleArray(possibleEdges);

    const usedNodes = new Set<string>();
    const newEdges: ProcessEdge[] = [];

    shuffledEdges.forEach((edge) => {
      if (
        !usedNodes.has(edge.target) &&
        (usedNodes.size === 0 || usedNodes.has(edge.source))
      ) {
        newEdges.push(edge);
        usedNodes.add(edge.source);
        usedNodes.add(edge.target);
      }
    });

    return newEdges;
  };
}
