import React from "react";
import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
    </div>
  );
}

export default CollectionPreview;
