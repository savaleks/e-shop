import React from "react";
import "./preview-collection.style.scss";
import ItemCollection from "../item-collection/item-collection.component";

const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                   <ItemCollection key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;
