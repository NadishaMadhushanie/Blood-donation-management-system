const mongodb = require('mongodb');


// function signinDB(id,mail,password,address,mobile,name,group,age,sex) {
//     const MongoClient = mongodb.MongoClient;//initialize the connection

//     const connectionURL = 'mongodb://127.0.0.1:27017';
//     const databaseName = 'Blood-Bank';//Database name

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
//     if(error){
//         return console.log('Unable to connect to database FROM signinDB');
//     } 
//     console.log('Connected Successfully! from signinDB');
//     const db = client.db(databaseName);//connect to specific database

//         db.collection('donor').insertOne({
//             donor_id : id,
//             donor_mail : mail,
//             password : password,
//             donor_add : address,
//             donor_mobile : mobile,
//             donor_name : name,
//             donor_bloodgroup : group,
//             donor_age : age,
//             donor_sex : sex
//         }, (error, result) => {
//             if(error) {
//                 return error;
//             } 
//                 return result;
//         });
    

//  });
// }




function signinDB(id,mail,password,address,mobile,name,group,age,sex) {
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';//Database name

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if(error){
        res.status(500).send();
    } 
    
    const db = client.db(databaseName);//connect to specific database

    //CHeck an id in use in database
    db.collection('donor').findOne({donor_id : id}, (error, result) => {
        if(error) {
            res.status(500).send();
        }
        if(result != null){res.send('ID is in use!...Use another one!');}//When ID is in use!
        if(result == null){
            //Check an mail is in use
            db.collection('donor').findOne({donor_mail : mail}, (error, result) => {
                if(error) res.status(500).send();
                if(result != null) {
                    res.send('E-Mail is in Use!..Use another one');//When Email is in use!
                }
                    if(result == null) {
                        //check an mobile phone is in use
                        db.collection('donor').findOne({donor_mobile : mobile}, (error, result) => {
                            if(error) {
                                res.status(500).send();
                            } 
                            if(result != null) {res.send('Phone number is in use!');}//When phone number is in use!
                                if(result == null) {
                                    //Passing data into database after validation
                                    db.collection('donor').insertOne({
                                        donor_id : id,
                                        donor_mail : mail,
                                        password : password,
                                        donor_add : address,
                                        donor_mobile : mobile,
                                        donor_name : name,
                                        donor_bloodgroup : group,
                                        donor_age : age,
                                        donor_sex : sex
                                    }, (error, result) => {
                                        if(error) {
                                            res.status(500).send();
                                        } 
                                        if(result) {
                                            res.status(201).send();
                                        }
                                    });
                                }
                        });
                    } 
                    
            });
        }
    });

                                                                    });
                                                                            }

 module.exports = {signinDB}
