import React from 'react';
import {apiPrefix} from "../../server/etc/config";
import axios from "axios/index";
import DataGrid from './DataGrid.jsx';
import classNames from "classnames";


var createReactClass = require('create-react-class');

const Actual = createReactClass({
    getInitialState: function () {
        return{
            data: ''
        }
    },
    componentWillMount() {
        var intervalID = setInterval(this.updateData, 60000);
        this.updateData();
        this.setState({intervalID: intervalID});
    },
    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    },
    computeClass: function(val) {
        return classNames({
            'temp-value': true,
            'neutral': val <= 5,
            'danger': val >= 35,
            'yellow': val > 5 && val < 35
        });
    },
    updateData: function(){
        axios.get(`${apiPrefix}/actual`)
            .then( response => {
                this.setState({data: response.data[0]});
                var tempTextClass = this.computeClass(this.state.data.Temperature);
                this.setState({tempTextClass: tempTextClass});
            })
    },
    render(){
        return(
            <DataGrid data={this.state.data} tempClass={this.state.tempTextClass} />
        );
    }
});

export default Actual;