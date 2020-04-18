import React from "react";

import "./item-collection.style.scss";

const CollectonItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

export default CollectonItem;