import React from 'react';
import {apiPrefix} from "../../server/etc/config";
import axios from "axios/index";
import DataGrid from './DataGrid.jsx';
import classNames from "classnames";


var createReactClass = require('create-react-class');

const Actual = createReactClass({
    getInitialState: function () {
        return{
            data: '',
            tempTextClass: ''
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
    computeTempClass: function(temp) {
        return classNames({
            "temp-value": true,
            "neutral": temp === "cold",
            "danger": temp === "hot",
            "yellow": temp === "normal"
        });
    },
    computeCOClass: function(co) {
        return classNames({
            "gas-values": true,
            "good": co === "normal",
            "neutral": co === "low warning",
            "danger": co === "danger",
            "yellow": co === "warning"
        });
    },
    computeFormalClass: function(formal) {
        return classNames({
            "gas-values": true,
            "good": formal === "normal",
            "danger": formal === "danger",
            "yellow": formal === "warning"
        });
    },
    computePMClass: function(pm) {
        return classNames({
            "good": pm === "normal",
            "danger": pm === "danger",
            "yellow": pm === "warning"
        });
    },
    updateData: function(){
        axios.get(`${apiPrefix}/actual`)
            .then( response => {
                this.setState({data: response.data[0]});
                let tempTextClass = {
                    "temperature": this.computeTempClass(this.state.data.Temperature_status),
                    "co": this.computeCOClass(this.state.data.CO2_status),
                    "formal": this.computeFormalClass(this.state.data.Formaldehyde_status),
                    "pm2": this.computePMClass(this.state.data.PM2_5_status),
                    "pm10": this.computePMClass(this.state.data.PM10_status)
                };
                this.setState({tempTextClass: tempTextClass});
            })
    },
    render(){
        return(
            <DataGrid data={this.state.data} textClasses={this.state.tempTextClass} />
        );
    }
});

export default Actual;