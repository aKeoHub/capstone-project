import React, { Component } from 'react';

class Type extends Component {
    render() {
        return (
            <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#D6DBDF"}}>
                <h1 className=" text-secondary text-success mb-3">{this.props.rule.heading}</h1>
                <p className="h6 mb-3">{this.props.rule.desc}</p>
                <ul style={{listStyle: "square"}}>{this.props.rule.docList.map(listItem => <li className="mb-3"><a href={this.props.onClick(listItem)}>{listItem}</a></li>)}</ul>
            </div>
        );
    }
}

export default Type;