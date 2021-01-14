var validator = require('validator');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

//export files
var find



const signinDBValidate = (id,mail,mobile) => {
    const DBid = 'dfsdf';//validate NIC
        if(!validator.equals(DBid, id)) {
            console.log('Succeccfully added');
        } else {
            console.log('ID is use,use another one');
            //write data to database
        }

        const DBmail = 'fdsfds';//validate Mail
        if(!validator.equals(DBmail, mail)) {
            console.log('Email is use,use another one');
        } else {
            console.log('Succeccfully added');
            //write data to database
        }

        const DBmobile = 'fdsfds';//validate Mail
        if(!validator.equals(DBmobile, mobile)) {
            console.log('Mobile number is use,use another one');
        } else {
            console.log('Succeccfully added');
            //write data to database
        }
};

signinDBValidate('96300','qqqqqqqq','12342');