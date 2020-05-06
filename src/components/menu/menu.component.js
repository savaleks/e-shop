import React from "react";
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import "./menu.style.scss";

const Menu = ({sections}) => (
    <div className="menu">
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div> 
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps) (Menu);