import mongoose from "mongoose";
import '../models/Data';
import '../models/DailyData';

const Data = mongoose.model('actualMeasure');
const DailyData = mongoose.model('dailyMeasure');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/environmentDB';
var options = {
                useMongoClient: true,
                autoIndex: false,
                promiseLibrary: require('bluebird')};

export function setUpConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(url,options);
}

export function showActual(id){
    console.log('actualMeasure results');
    Data.find({},function(err,animals){});
    return Data.find();
}

export function showDaily(id){
    console.log('dailyMeasure results');
    var startDate = new Date();
    var endDate = new Date();
    startDate.setDate(endDate.getDate() - 1);
    var query = {"time":
        {$gte:startDate.toISOString(),
         $lte:endDate.toISOString()}
        };

    DailyData.find({query}, function(err,dailyData){});
    return DailyData.find();
}
