"use client";
import React from "react";

const Block = ({ block }) => {
  const { index, timestamp, data, previousHash, hash } = block;

  return (
    <div className="block" style={{ border: "1px solid red" }}>
      <h3>Block #{index}</h3>
      <p>Timestamp: {timestamp}</p>
      <p>Data: {data}</p>
      <p>Previous Hash: {previousHash}</p>
      <p>Hash: {hash}</p>
    </div>
  );
};

export default Block;
