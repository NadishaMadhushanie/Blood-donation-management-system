var validator = require('validator');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

function loginDB(username,password) {
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(password, salt);//hash the password with salt  
    
    const usernameDB = '';//get the username from DataBase
    if(!validator.equals(usernameDB,username)){
        return res.status(400).send('Cannot find email!');
    } else {
        const passwordDB = '';//get password from database
        if(!validator.equals(passwordDB,password)){
            return console.log('Wong password!');
        } else {
            return console.log('Logined succefully!');
        }
    }
}