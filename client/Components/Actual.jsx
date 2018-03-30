import React from 'react';
import {apiPrefix} from "../../server/etc/config";
import axios from "axios/index";
import DataGrid from './DataGrid.jsx';


var createReactClass = require('create-react-class');

const Actual = createReactClass({
    getInitialState: function () {
        return {data: ''}
    },

    componentWillMount() {
        axios.get(`${apiPrefix}/actual`)
            .then( response => {
                this.setState({data: response.data[0]})
            })
    },

    render(){
        return(
            <div>
                <DataGrid data={this.state.data} />
            </div>
        );
    }
});

export default Actual;