import React, { useState } from "react";
import { uid } from "../utils/uid";

const initialBlock = { id: uid(), html: "guymgyu", tag: "p" };

const EditablePage = (props) => {
  const [blocks, setBlocks] = useState([initialBlock]);

  return (
    <div className="Page">
      {blocks.map((block, key) => {
        return (
          <div key={key} id={block.id}>
            Tag: {block.tag}, Content: {block.html}
          </div>
        );
      })}
    </div>
  );
};

export default EditablePage;
