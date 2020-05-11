import phone from "../../img/iphone.png";
import battery from "../../img/battery.jpg";
import audio from "../../img/audio.jpg";
import camera from "../../img/camera.jpg";
import laptop from "../../img/laptop.jpg";
import cable from "../../img/cable.jpg";

const INITIAL_STATE = {
    sections: [
        {
            title: 'Item 1',
            imageUrl: phone,
            id: 1,
            linkUrl: 'shop/item1'
        },
        {
            title: 'Item 2',
            imageUrl: battery,
            id: 2,
            linkUrl: 'shop/item2'
        },
        {
            title: 'Item 3',
            imageUrl: audio,
            id: 3,
            linkUrl: 'shop/item3'
        },
        {
            title: 'Item 4',
            imageUrl: laptop,
            id: 4,
            linkUrl: 'shop/item4'
        },
        {
            title: 'Item 5',
            imageUrl: cable,
            id: 5,
            linkUrl: 'shop/item5'
        },
        {
            title: 'Item 6',
            imageUrl: camera,
            id: 6,
            linkUrl: 'shop/item6'
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;