"use client";

import { Handle, Position, type NodeProps } from "reactflow";

export default function CustomNode({ data }: NodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-purple-500">
      <div className="flex items-center">
        <div className="rounded-full w-3 h-3 bg-purple-500 mr-2" />
        <div className="font-bold">{data.label}</div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-purple-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-purple-500"
      />
    </div>
  );
}
