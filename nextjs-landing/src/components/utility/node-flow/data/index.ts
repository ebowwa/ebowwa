// data.ts
import { Node, Edge } from 'reactflow';

export interface NodeData {
  label: string;
  color?: string;
  size?: number;
  // Add any other properties you need for your nodes
}

export interface EdgeData {
  label?: string;
  color?: string;
  width?: number;
  // Add any other properties you need for your edges
}

export interface FlowProps {
  initialNodes: Node<any, string>[];
  initialEdges: any[];
}

export function getInitialNodesAndEdges(data: any): { initialNodes: Node<NodeData>[]; initialEdges: Edge<EdgeData>[] } {
  const initialNodes: Node<NodeData>[] = data.nodes.map((node: any) => ({
    id: node.id,
    position: { x: node.x ?? 0, y: node.y ?? 0 },
    data: {
      label: node.label ?? '',
      color: node.color,
      size: node.size,
    },
  }));

const initialEdges: Edge<EdgeData>[] = data.edges.map((edge: any) => ({
    id: `e${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    data: {
      label: edge.label,
      color: edge.color,
      width: edge.width,
    },
  }));

  return { initialNodes, initialEdges };
}