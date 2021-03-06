import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {otherItemProps}  />
        ))}
    </div>
  );
}

export default CollectionPreview;
