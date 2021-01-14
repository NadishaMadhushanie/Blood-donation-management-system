const mongodb = require('mongodb');//mongodb package

const findidfrmDB = (id) => {//function for validate ID from Database
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
        if(error){
            return console.log('Error');
        } 
        
        const db = client.db(databaseName);//connect to specific database
        
        db.collection('donor').findOne({donor_id : id},(error,client) => {
            if(error){
                res.status(500).send();
            } if(client == null){
                cd('not exist');
            } if(client != null){
                cd('exist');
            };
        });
    });
}


const findmailfrmDB = (mail) => {//function for validate Mail from database
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';

    MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
        if(error){
            return console.log('Unable to connect to database');
        } 
        
        const db = client.db(databaseName);//connect to specific database
        
         db.collection('donor').findOne({donor_mail : mail}, (error, result) => {
            if(error) {
                return console.log('Unable to insert data');
            } 
                if(result) {
                    return false;//When Email is in use
                } else {
                    return true;//When Email is not in use
                }
        });
     });
    
};
const findphonefrmDB = (phone) => {//function for validate phone from Database
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';

    MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
        if(error){
            return console.log('Unable to connect to database');
        } 
      
        const db = client.db(databaseName);//connect to specific database
        
         db.collection('donor').findOne({donor_mobile : phone}, (error, result) => {
            if(error) {
                return console.log('Unable to insert data');
            } 
                if(result) {
                    return false;//When phone number is in use
                }else {
                    return true;//When phone number is not in use
                }
        });
     });
    
}

const x = findidfrmDB('963002157v');
console.log(x);
