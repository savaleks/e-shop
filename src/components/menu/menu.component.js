import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./menu.style.scss";
import phone from "../../img/iphone.png";
import battery from "../../img/battery.jpg";
import audio from "../../img/audio.jpg";
import camera from "../../img/camera.jpg";
import laptop from "../../img/laptop.jpg";
import cable from "../../img/cable.jpg";

class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
            {
                title: 'Item 1',
                imageUrl: phone,
                id: 1,
                linkUrl: 'item1'
            },
            {
                title: 'Item 2',
                imageUrl: battery,
                id: 2,
                linkUrl: ''
            },
            {
                title: 'Item 3',
                imageUrl: audio,
                id: 3,
                linkUrl: ''
            },
            {
                title: 'Item 4',
                imageUrl: laptop,
                id: 4,
                linkUrl: ''
            },
            {
                title: 'Item 5',
                imageUrl: cable,
                id: 5,
                linkUrl: ''
            },
            {
                title: 'Item 6',
                imageUrl: camera,
                id: 6,
                linkUrl: ''
            },
        ]
        }
    }

    render(){
        return (
            <div className="menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div> 
        )
    }
}

export default Menu;