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
                        <p className={this.props.tempClass}>{this.props.data.Temperature}</p>
                    </div>
                    <div className='humidity'>H<span className='text-xxs'>umidity</span> <span className='float-right'>{this.props.data.Humidity}%</span></div>
                    <div className='pressure'>P<span className='text-xxs'>ressure</span> <span className='float-right'>{this.props.data.Pressure} kPa </span></div>
                </div>
                <div className='col-sm-3 panel-actual'>
                    <div className='text-xl'>
                        <p className='p-gas'>CO2</p>
                        <p className='gas-values'>{this.props.data.CO2/10000}%</p>
                        <p className='gas-values'>{this.props.data.CO2*1.8} <span className='text-xxs'>mg/m3</span></p>
                    </div>
                    <div className='text-xl'>
                        <p className='p-gas'>CH2OH</p>
                        <p className='gas-values'>{this.props.data.Formaldehyde/10000000}% </p>
                        <p className='gas-values'>{(this.props.data.Formaldehyde/1000*1.25)} <span className='text-xxs'>mg/m3</span></p>
                    </div>
                    <div className='text-xl'>
                        <p className='p-gas'>VOC</p>
                        <p className='gas-values'>{this.props.data.Gas} k&#8486;</p>
                    </div>
                </div>
                <div className='col-sm-3 panel-actual'>
                    <div className='text-xl'>PM 0-1: {this.props.data.PM0_1} ppm</div>
                    <div className='text-xl'>PM 2-5: {this.props.data.PM2_5} ppm</div>
                    <div className='text-xl'>PM 10: {this.props.data.PM10} ppm</div>
                </div>
            </div>
        );
    }
});

export default DataGrid;