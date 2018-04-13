import React from 'react';

var createReactClass = require('create-react-class');


const DataGrid = createReactClass({
    render() {
        return(
            <div className='row b-top'>
                <div className='col-sm-7 b-right'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div>
                                <span className='t-letter'>T<span className='text-xxs'>emperature</span></span>
                                <span className='float-right h4'>&#x2103;</span>
                                <p className={this.props.textClasses.temperature}>{this.props.data.Temperature}</p>
                            </div>
                            <div className='humidity'>H<span className='text-xxs'>umidity</span> <span className='float-right'>{this.props.data.Humidity}%</span></div>
                            <div className='pressure'>P<span className='text-xxs'>ressure</span> <span className='float-right'>{this.props.data.Pressure} kPa </span></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='row b-top'>
                                <div className='col-sm-4'>
                                    <div className='text-xs'>
                                        PM 0-1 <br/>
                                        <span>{this.props.data.PM0_1}</span>
                                        <span className='text-xxs'>mkg/m3</span>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='text-xs'>
                                        PM 2-5 <br/>
                                        <span className={this.props.textClasses.pm2}>{this.props.data.PM2_5}
                                            <span className='text-xxs'> mkg/m3</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='text-xs'>
                                        PM 10 <br/>
                                        <span className={this.props.textClasses.pm10}>{this.props.data.PM10}
                                            <span className='text-xxs'> mkg/m3</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='text-xl'>
                                <p className='p-gas'>CO2</p>
                                <p className={this.props.textClasses.co}>{this.props.data.CO2_p}%</p>
                                <p className={this.props.textClasses.co}>{this.props.data.CO2_mg} <span className='text-xxs'>mg/m3</span></p>
                            </div>
                            <div className='text-xl'>
                                <p className='p-gas'>CH2OH</p>
                                <p className={this.props.textClasses.formal}>{parseFloat(this.props.data.Formaldehyde_p).toPrecision()}% </p>
                                <p className={this.props.textClasses.formal}>{parseFloat(this.props.data.Formaldehyde_mg).toPrecision()} <span className='text-xxs'>mg/m3</span></p>
                            </div>
                            <div className='text-xl'>
                                <p className='p-gas'>VOC</p>
                                <p className='gas-values'>{this.props.data.Gas} k&#8486;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default DataGrid;