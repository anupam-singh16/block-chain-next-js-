"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Block from "./Blocks";

const Blockchain = () => {
  const [data, setData] = useState("");

  const [blocks, setBlocks] = useState([
    {
      index: 0,
      timestamp: new Date().toLocaleString(),
      data: data,
      previousHash: "0",
      hash: "0000",
    },
  ]);

  const calculateHash = (index, timestamp, data, previousHash) => {
    return `${index}${timestamp}${data}${previousHash}`.toString();
  };

  const addBlock = () => {
    const previousBlock = blocks[blocks.length - 1];
    const newIndex = previousBlock.index + 1;
    const newTimestamp = new Date().toLocaleString();
    const newHash = calculateHash(
      newIndex,
      newTimestamp,
      data,
      previousBlock.hash
    );

    const newBlock = {
      index: newIndex,
      timestamp: newTimestamp,
      data,
      previousHash: previousBlock.hash,
      hash: newHash,
    };

    setBlocks([...blocks, newBlock]);
    setData("");
  };

  return (
    <div className="blockchain">
      <h1>Blockchain</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={addBlock}>Add Block</button>
      <div
        className="blocks"
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
        }}
      >
        {blocks.map((block, index) => (
          <Block key={uuidv4()} block={block} />
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
