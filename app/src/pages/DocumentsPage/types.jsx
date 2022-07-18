import React, { Component } from 'react';
import Type from './type';

class MainType extends Component {
    state = { 
        types: 
        [
            {heading: "Legislation", desc: "There are three main pieces of legislation that provide legal direction and guidance for managing Alberta's park system:", docList: ["Provincial Parks Act", "Wilderness Areas, Ecological Reserves, Natural Areas and Heritage Rangelands Act", "Willmore Wilderness Park Act"]},
            {heading: "Regulations", desc: "The Provincial Parks Act has a number of regulations that provide guidance around specific activities and restrictions in provincial parks, wildland provincial parks and provincial recreation areas:", docList: ["Provincial Parks (General) Regulation", "Provincial Parks (Dispositions) Regulation", "Provincial Parks (Section 7 Declaration) Regulation"]},
            {heading: "General Rules", desc: "The tenants must adhere to all the following rules and breach of any of the rule can lead to heavy fine:", docList: ["Access", "Fire", "Garbage and Recycling", "Noise", "Painting and Alteration", "Parking", "Pets"]}
        ]
    };

    handleLink = link => {
        return link === "Provincial Parks Act" ? "https://www.qp.alberta.ca/1266.cfm?page=P35.cfm&leg_type=Acts&isbncln=9780779753840&display=html%29" : link === "Wilderness Areas, Ecological Reserves, Natural Areas and Heritage Rangelands Act" ? "https://www.qp.alberta.ca/1266.cfm?page=W09.cfm&leg_type=Acts&isbncln=9780779745012&display=html" : link === "Willmore Wilderness Park Act" ? "https://www.qp.alberta.ca/1266.cfm?page=W11.cfm&leg_type=Acts&isbncln=0779704061&display=html" : link === "Provincial Parks (General) Regulation" ? "https://www.qp.alberta.ca/1266.cfm?page=1985_102.cfm&leg_type=Regs&isbncln=9780779732586" : link === "Provincial Parks (Dispositions) Regulation" ? "https://www.qp.alberta.ca/1266.cfm?page=1977_241.cfm&leg_type=Regs&isbncln=9780779722228" : link === "Provincial Parks (Section 7 Declaration) Regulation" ? "https://www.qp.alberta.ca/1266.cfm?page=2011_166.cfm&leg_type=Regs&isbncln=9780779759477": link === "Access" ? "./documents/Access.txt" : null;
    };

    render() { 
        return (
            <div>
                {this.state.types.map(c => <Type rule={c} onClick={this.handleLink} />)}; 
            </div>
        );
    }
}

export default MainType;