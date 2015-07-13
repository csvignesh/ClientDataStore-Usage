'use strict'
var $ = require('jquery');
var dataStore = require('localdatastore');
var studentsData = require('./data/student');
var utils = require('./utils/print');
$(function(){
    //creating and initializing datastore with data
    initDataStore().then(function(){
        //insert data
        return insertData(studentsData).then(getAllData).then(utils.printCurrentData);
    }).then(function(){
        //update a score of a filtered rollnumber(2)
        var rollnumber = 2;
        var data = studentsData[1];

        data['sub3'] = 90;
        data['total'] = 281;

        return updateData(rollnumber, data).then(getAllData).then(utils.printCurrentData);
    }).then(function(){
        //remove one particular record
        var rollnumber = 1;

        return removeData(rollnumber).then(getAllData).then(utils.printCurrentData);
    }).then(function(){
        //remove all records
        return removeAll().then(getAllData).then(utils.printCurrentData);
    }).then(function(){
        //deleting the DB
        return deleteDB();
    });
});

//steps to create DB, object store and set indexes for them
function initDataStore(){
    //defining dbname, objectStore and its indexes
    var dbName = 'students';
    var tableMeta = [
        {
            name: 'marksheet',
            indexes: [
                {
                    name: 'rollnumber',
                    unique: true
                }
            ]
        }
    ];
    return dataStore.init(dbName, tableMeta).then(function(){
        $('#console').append('<h3>DB init and Object store creation Successful</h3>');
    });
}

//steps to add/insert a new data
function insertData(data){
    //in which table/object store to insert
    var meta = {
        name: 'marksheet'
    };

    return dataStore.insert(meta, data).then(function(){
        $('#console').append('<h3>Data insertion Successful</h3>');
    });
}

//steps to fetch all data
function getAllData(){
    //in which table/object store to fetch from
    var meta = {
        name: 'marksheet'
    };

    return dataStore.select(meta);
}

//steps to update a particular data
function updateData(key, updatedData){
    var meta = {
        name: 'marksheet'
    };
    var filter = {
        index: 'rollnumber',
        data: [key]
    };
    return dataStore.update(meta, filter, updatedData).then(function(){
        $('#console').append('<h3>Updated rollnumber 2\'s sub3 mark to 90</h3>');
    });
}

//steps to remove a data based on filters
function removeData(key){
    var meta = {
        name: 'marksheet'
    };
    var filter = {
        index: 'rollnumber',
        data: [key]
    };
    return dataStore.remove(meta, filter).then(function(){
        $('#console').append('<h3>Removed rollnumber 1\'s record</h3>');
    });
}

//steps to remove all data
function removeAll(){
    var meta = {
        name: 'marksheet'
    };

    return dataStore.remove(meta).then(function(){
        $('#console').append('<h3>Removed all records</h3>');
    });
}

//steps to delete the db
function deleteDB(){
    return dataStore.destroy('students').then(function(){
        $('#console').append('<h3>DB deleted</h3>');
    });;
}