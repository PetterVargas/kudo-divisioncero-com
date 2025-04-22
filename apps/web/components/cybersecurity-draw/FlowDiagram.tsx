"use client";

import { useCallback, useState, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  Panel,
  type BackgroundVariant,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ZoomIn, ZoomOut, Maximize, Lock, Unlock } from "lucide-react";
import CustomNode from "./CustomNode";

// Define node types
const nodeTypes = {
  custom: CustomNode,
};

// Initial nodes with different layers
const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Default Node" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 400, y: 125 },
  },
];

// Initial edges
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e4-3", source: "4", target: "3" },
];

// Create a wrapper component that includes the ReactFlowProvider
export default function FlowDiagramWrapper() {
  return (
    <div className="w-full h-screen">
      <ReactFlowProvider>
        <FlowDiagram />
      </ReactFlowProvider>
    </div>
  );
}

function FlowDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activeLayer, setActiveLayer] = useState<string>("all");
  const [isLocked, setIsLocked] = useState(false);

  // Get the ReactFlow instance
  const reactFlowInstance = useReactFlow();

  // Handle connections between nodes
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  // Add a new node
  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: {
        x: Math.random() * 300 + 50,
        y: Math.random() * 300 + 50,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes]);

  // Zoom controls - now using the ReactFlow instance methods
  const zoomIn = () => {
    reactFlowInstance.zoomIn();
  };

  const zoomOut = () => {
    reactFlowInstance.zoomOut();
  };

  const fitView = () => {
    reactFlowInstance.fitView({ padding: 0.2 });
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  // Filter nodes by layer
  const filteredNodes =
    activeLayer === "all"
      ? nodes
      : nodes.filter(
          (node) =>
            node.type === activeLayer ||
            (activeLayer === "default" && !node.type),
        );

  // Use fitViewOnInit to ensure the diagram fits the viewport on initial render
  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={filteredNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        panOnScroll={!isLocked}
        zoomOnScroll={!isLocked}
        nodesDraggable={!isLocked}
        nodesConnectable={!isLocked}
        elementsSelectable={!isLocked}
        onInit={fitView} // This ensures fitView is called when the component is initialized
      >
        <MiniMap />
        <Background variant={"dots" as BackgroundVariant} gap={12} size={1} />

        {/* Layer selector and Add Node button in top-left */}
        <Panel position="top-left">
          <div className="flex gap-2 bg-background p-2 rounded-md shadow-sm">
            <Select value={activeLayer} onValueChange={setActiveLayer}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Layer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Layers</SelectItem>
                <SelectItem value="default">Default Nodes</SelectItem>
                <SelectItem value="input">Input Nodes</SelectItem>
                <SelectItem value="output">Output Nodes</SelectItem>
                <SelectItem value="custom">Custom Nodes</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addNode}>Add Node</Button>
          </div>
        </Panel>

        {/* Custom controls in top-right - now vertical */}
        <Panel position="top-right">
          <div className="flex flex-col gap-2 bg-background p-2 rounded-md shadow-sm">
            <Button
              variant="outline"
              size="icon"
              onClick={zoomIn}
              title="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={zoomOut}
              title="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={fitView}
              title="Fit View"
            >
              <Maximize className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLock}
              title={isLocked ? "Unlock" : "Lock"}
            >
              {isLocked ? (
                <Lock className="h-4 w-4" />
              ) : (
                <Unlock className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
