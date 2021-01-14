//mongod.exe --dbpath c:/Users/Dilan_Silva/mongodb-data
const func = require('./utils/main');//import nodemailer
const nicConverter = require('./utils/nicConverter');//import nic converter
const signinDB = require('./db/signinDB');//import data base code
// const findDB = require('./db/findDB');

const bcrypt = require('bcrypt');//for hashin
const express = require('express');//express 
const mongodb = require('mongodb');//mongodb package
const distance = require('google-distance');//Google Distance matrix API

const { startSession } = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
 
 
const users = [];//to collect some username and password
const registerUser = []; //to collect some details of users
let mailDetails = [];//Details for send email verifications
let resetPhoneNumber = [];
let VerificationCode = '';
let VerificatioEmail = '';

let passwordResetMail = '';
let passwordResetCode = '';

app.get('/', (req, res) => {
  res.json(users);
})

app.post('/login', async (req, res) => { //for user login page
  try { 
    console.log('Login');
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with salt
    
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';
    

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
        if(error){
            res.status(500).send();
        } 
        const db = client.db(databaseName);//connect to specific database
        
        db.collection('donor').findOne({donor_mail : req.body.email},(error,client) => {
            if(error){
                res.status(500).send();
            } if(client == null){
                res.send({  Invalid:'InvalidEmail'});
            } if(client != null ){
              registerUser.push(client.password);
              bcrypt.compare(String(req.body.password) ,String(registerUser),function(err,result){
                if(err){//When error Prompt
                  res.send(err);
                }if(result){//When password is true!
                  res.send({Valid:'Loggedin'});
                }if(result == false){//When password is false!
                   res.send({Invalid : 'InvalidPassword'});
                }
              });
            }
        });
    });
  } catch{
    res.status(500).send();
    
  } 
});

app.post('/resetone', async (req,res) => {
      
  try{
    if(req.body.email){//if user wants code to his email
      passwordResetCode = Math.floor((Math.random() * 100000) + 1);//genarate a random number
      passwordResetMail = req.body.email;//get email
      
      func.main(passwordResetMail,passwordResetCode);//call function to send mail ex:- main(Email,Code)
      res.status(201).send('Successfully Sent an email!');//send status code
    }
    if(req.body.code){
      if(passwordResetCode == req.body.code){
        res.status(201).send('valid');
        
      } else{
        res.status(201).send('Invalid');
      }
    }
    if(req.body.message){//if user wants to send code agian
      passwordResetCode = Math.floor((Math.random() * 100000) + 1);//genarate a random number
      
      func.main(passwordResetMail,passwordResetCode);
      res.status(201).send('Successfully Sent an email Again!');
    }
  }catch{
    res.status(500).send();
  }
});

app.post('/resettwo', async (req,res) => {//password reset
  //have to send password and email
  try{
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with salt

    const MongoClient = mongodb.MongoClient;//initialize the connection

          const connectionURL = 'mongodb://127.0.0.1:27017';
            const databaseName = 'Blood-Bank';
              MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
                if(error){
                  return res.status(500).send();
                }
                const db = client.db(databaseName);//connect to specific database
                  const updatePromise = db.collection('donor').updateOne({
                    donor_mail : req.body.mail
                  }, {
                    $set: {
                      password : hashedPassword
                    }
                  })

                  updatePromise.then((result) => {
                    res.status(201).send('changed');
                    
                  }).catch((error) => {
                    res.status(500).send();
                    
                  })
              })
  }catch{
    res.status(500).send();
  }
});

app.post('/changephonenumber', async (req,res) => {//First step to change phone number
  //have to provide mail first and have to provide password second and change the phone number
  //1.req.body.password,req.body.email
  //2.req.body.phonenumber
  
  try{
    console.log('Hello World');
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with salt
    
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';
    
    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
        if(error){
            res.status(500).send();
        } 
        const db = client.db(databaseName);//connect to specific database
        
        
          db.collection('donor').findOne({donor_mail : req.body.email},(error,client) => {
            if(error){
                res.status(500).send();
                
            } if(client == null){
                res.send({  Invalid:'InvalidEmail'});
            } if(client != null ){
              resetPhoneNumber.push(client.password);
              bcrypt.compare(String(req.body.password) ,String(resetPhoneNumber),function(err,result){
                if(err){//When error Prompt
                  res.send(err);
                }if(result == true){//When password is true!
                  res.send({Valid : 'ValidPasswordEmail'});
                }if(result == false){//When password is false!
                  res.send({Invalid : 'InvalidPassword'});
                  console.log(result);
                }
              });
            }
        });
        
    });
    
  }catch{
    res.status(500).send();
  }
});

app.post('/changephonenumber/changephone', async (req,res) => {//second step to change phone number
  try{
    const MongoClient = mongodb.MongoClient;//initialize the connection

          const connectionURL = 'mongodb://127.0.0.1:27017';
            const databaseName = 'Blood-Bank';
              MongoClient.connect(connectionURL, {useNewUrlParser: true,useUnifiedTopology: true}, (error, client) => {
                if(error){
                  return res.status(500).send();
                }
                const db = client.db(databaseName);//connect to specific database
                  const updatePromise = db.collection('donor').updateOne({
                    donor_mail : req.body.email
                  }, {
                    $set: {
                      donor_mobile : req.body.telephone
                    }
                  })

                  updatePromise.then((result) => {
                    res.send({valid : 'ChangedPhoneNumber'});
                  }).catch((error) => {
                    res.status(500).send();
                  })
              })
  }catch{
    res.status(500).send();
  }
});

app.post('/changeaddress', async (req,res) => {
  try{
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with salt
    
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';
    

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
        if(error){
            res.status(500).send();
        } 
        const db = client.db(databaseName);//connect to specific database
        
        
          db.collection('donor').findOne({donor_mail : req.body.email},(error,client) => {
            if(error){
                res.status(500).send();
            } if(client == null){
              res.send({  Invalid:'InvalidEmail'});
            } if(client != null ){
              resetPhoneNumber.push(client.password);
              bcrypt.compare(String(req.body.password) ,String(resetPhoneNumber),function(err,result){
                if(err){//When error Prompt
                  res.send(err);
                }if(result == true){//When password is true!
                  res.send({Valid : 'ValidPasswordEmail'});
                }if(result == false){//When password is false!
                  res.send({Invalid : 'InvalidPassword'});
                }
              });
            }
        });
        
    });
  }catch{
    res.status(500).send();
  }
});

app.post('/changeaddress/change', async (req,res) => {
  try{
    const MongoClient = mongodb.MongoClient;//initialize the connection

          const connectionURL = 'mongodb://127.0.0.1:27017';
            const databaseName = 'Blood-Bank';
              MongoClient.connect(connectionURL, {useNewUrlParser: true,useUnifiedTopology: true}, (error, client) => {
                if(error){
                  return res.status(500).send();
                }
                const db = client.db(databaseName);//connect to specific database
                  const updatePromise = db.collection('donor').updateOne({
                    donor_mail : req.body.email
                  }, {
                    $set: {
                      donor_add : req.body.address
                    }
                  })

                  updatePromise.then((result) => {
                    res.send({valid : 'Changed'});
                    
                  }).catch((error) => {
                    res.status(500).send();
                    
                  })
              })
  }catch{
    res.status(500).send();
  }
});

app.post('/signin', async (req, res) => { //user sign-in
  try {
    
    const user = {
      name: req.body.name,//get the name
      address: req.body.address,//get the address
      telephone : req.body.telephone,//get telephone
      bloodgroup : req.body.bloodgroup,//get the blood group
      mail: req.body.email,
      nicNumber: req.body.nic
    };

    //salt and hashed the password
    const salt = await bcrypt.genSalt(10);//generate a 10 salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//hash the password with salt

      mailDetails.push(user);//get the mail details for node mailer
       //push data into registerUser array
          const birthdayID = nicConverter.nicConverter((req.body.nic).trim());//push to the database
          
          const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';//database server connection
    const databaseName = 'Blood-Bank';//Database name

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
    if(error){//if error occur
        res.status(500).send();
    } 
    
    const db = client.db(databaseName);//connect to specific database

    //CHeck an id in use in database
    db.collection('donor').findOne({donor_id : req.body.nic}, (error, result) => {
        if(error) {res.status(500).send}
       
        if(result != null){//If NIC is in use!
          res.send('ID is in use!...Use another one!');
          
        }
        if(result == null){//IF NIC is not in use!
          
            //Check an mail is in use
            db.collection('donor').findOne({donor_mail : req.body.email}, (error, result) => {//FInd data in database!
              
                if(error) res.status(500).send();//if error occur
                if(result != null) {//if Email is in use!
                    res.send('E-Mail is in Use!..Use another one');//When Email is in use!
                    
                }
                    if(result == null) {//if Email isn't use!
                    
                        //check an mobile phone is in use
                        db.collection('donor').findOne({donor_mobile : req.body.telephone}, (error, result) => {//Find data in database!
                            if(error) {//IF telephone is in use
                                res.status(500).send();
                            } 
                            if(result != null) {//If telephone is not in use!
                              res.send('Phone number is in use!');
                           
                            }
                                if(result == null) {
                                    //Passing data into database after validation
                                    db.collection('donor').insertOne({
                                        donor_id : user.nicNumber,
                                        donor_mail : user.mail,
                                        password : hashedPassword,
                                        donor_add : user.address,
                                        donor_mobile : user.telephone,
                                        donor_name : user.name,
                                        donor_bloodgroup : user.bloodgroup,
                                        donor_age : birthdayID.age,
                                        donor_sex : birthdayID.gender
                                    }, (error, result) => {
                                        if(error) {
                                            res.status(500).send();
                                        } 
                                        if(result) {
                                            res.status(201).send('Succesfully Added');
                                        }
                                    });
                                }
                        });
                    } 
                    
            });
        }
    });

                                                                    });

  } catch {
    res.status(500).send();
  }
});  

app.post('/verification', async (req,res) => {//email verification code
  try {
    
     if(req.body.email) {//if code sends
      const code = Math.floor((Math.random() * 100000) + 1);//genarate a random number
      const email = req.body.email;//get email
      VerificationCode = code;//assign code to globle VerificatioCode
      VerificatioEmail = email;
       
      func.main(email,code);//send an email
      res.status(201).send('Succefully Sent an email!');//Success Message
                        } 
    if(req.body.message) {//if send code again
      const code = Math.floor((Math.random() * 100000) + 1);//genarate a random number
      const email = req.body.email;//get email
      VerificationCode = code;//assign code to globle VerificatioCode
      
       
      func.main(VerificatioEmail,code);//send an email
      res.status(201).send('Succefully Sent an email Again!');//Success Message
                         }

    if(req.body.code) {//if semail sends
     
      if(VerificationCode == req.body.code){
        res.send('Verify Email!');
      } else {
        res.send('Wrong Code!');
      } 
    }
  } catch {
    res.status(500).send();
  }
});

app.post('/home', async (req,res) => {
  try{
    /*
        suitble code here    
    */
    const nextDayToDonateblood = '2021/02/13';
    res.status(201).send(nextDayToDonateblood);
  }catch {
    res.status(500).send();
  }
});



app.post('/profile', async (req,res) => {//Route for profile 

  try {
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
      if(error){res.status(500).send();} 
      
      const db = client.db(databaseName);//connect to specific database
      
      db.collection('donor').findOne({donor_mail : req.body.email},(error,result) => {
          if(error){//If error occur
              res.status(500).send();
          } 
          res.status(201).json({
            Name : result.donor_name,
            Email : result.donor_mail,
            Address : result.donor_add,
            NIC : result.donor_id,
            Mobile : result.donor_mobile,
            Bloodgroup : result.donor_bloodgroup,
            Age : result.donor_age,
            Gender : result.donor_sex
          })
         
      });
  
  });
  }
  catch{
    res.status(500).send();
  }
});
    
app.post('/map', async (req,res) => {//Route for Map Immplimentation
  try{
    /*
      Code to send data of Blood Donation Camps
    */
  }catch{
    res.status(500).send();
  }
});

app.post('/home', async (req,res) => {
  try{

  }catch {

  }
});

app.post('/appoinment', async(req,res) => {//Route for appoinment
  try{

  }catch{
    res.status(500).send();
  }
});

app.post('/qrcode', async(req,res) => {
  try{
    console.log('Hello World  ');
    const MongoClient = mongodb.MongoClient;//initialize the connection

    const connectionURL = 'mongodb://127.0.0.1:27017';
    const databaseName = 'Blood-Bank';
    

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error,client) => {
        if(error){
            res.status(500).send();
        } 
        const db = client.db(databaseName);//connect to specific database
        
        
          db.collection('donor').findOne({donor_mail : req.body.email},(error,client) => {
            if(error){
                res.status(500).send();
            }
            res.status(201).json({
              NIC : client.donor_id
            })
        });
        
    });
  }catch{
    res.status(500).send();
  }
});

app.listen(port);