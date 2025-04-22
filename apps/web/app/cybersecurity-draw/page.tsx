"use client";

import FlowDiagramWrapper from "@/components/cybersecurity-draw/FlowDiagram";

export default function DrawCybesecuritySaaS() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Hace que el contenedor ocupe toda la altura de la pantalla
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlowDiagramWrapper />
    </div>
  );
}
