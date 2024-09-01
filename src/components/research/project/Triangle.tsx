// Triangle.tsx
import React from "react";

interface TriangleProps {
  color: string;
}

const Triangle: React.FC<TriangleProps> = ({ color }) => {
  return (
    <div
      style={{
        content: '""',
        position: "absolute",
        top: "100%", // Position the triangle above the menu
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: `10px solid ${color}`, // Triangle color
      }}
    />
  );
};

export default Triangle;
