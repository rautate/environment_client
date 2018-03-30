import React from 'react';

var createReactClass = require('create-react-class');


const DataGrid = createReactClass({

    render() {
        return(
            <div className='row'>
                <div className='col-sm-3 panel-actual'>
                    <div>
                        <span className='t-letter'>T<span className='text-xxs'>emperature</span></span>
                        <span className='float-right h4'>&#x2103;</span>
                        <p className='temp-value'>{this.props.data.Temperature}</p>
                    </div>
                    <div className='humidity'>H<span className='text-xxs'>umidity</span> <span className='float-right'>40%</span></div>
                    <div className='pressure'>P<span className='text-xxs'>ressure</span> <span className='float-right'>{this.props.data.Formaldehyde}kPa</span></div>
                </div>
                <div className='col-sm-3 panel-actual'>
                    <div className='text-xl'>CO2 {this.props.data.CO2}</div>
                    <div className='text-xl'>CH2OH {this.props.data.CO2}</div>
                    <div className='text-xl'>VOC {this.props.data.CO2}</div>
                </div>
                <div className='col-sm-3 panel-actual'>
                    <div>PM 0-1: {this.props.data.PM0_1}</div>
                    <div>PM 2-5: {this.props.data.PM2_5}</div>
                    <div>PM 10: {this.props.data.PM10}</div>
                </div>
            </div>
        )
    }
});

export default DataGrid;