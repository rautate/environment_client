import React from 'react';

var createReactClass = require('create-react-class');

const RagBar = createReactClass({
    getRagValue: function () {
        alert(this.props.data);
    },
    render(){
        const ragStyle = {
            left: this.props.data + '%'
        };
        return (
            <div className='rag-container'>
                <div className='rag-bar'>
                    <span className='rag-bar-handler' style={ragStyle}></span>
                </div>
            </div>
        )
    }
});

export default RagBar;