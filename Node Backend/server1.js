const express = require("express");
const app = express();
var router = express.Router();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mysql = require("mysql2");
const cors = require("cors");
var loan_offers;
const nodemailer=require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

const db = require("./models");
const logger = require('./Middleware/logger')


const bodyParser=require('body-parser');
 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())












// connection.query(`select * from loanSystem.lender_offerings`,(err,res)=>{
    
//   return console.log(res);
// })



dotenv.config();


//file uploads
global.__basedir = __dirname;

const allowedOrigins = [
     'http://localhost:4200',
    'http://localhost:4300'
  ];

  
  const whitelist = ['http://localhost:4200', 'http://localhost:3001', 'http://127.0.0.1:4200']
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error())
      }
    }
  }
  // var corsOptions = {
  //   origin: "http://localhost:4200"


// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
// const corsOptions = {
//     origin: (origin, callback) => {
//       if (allowedOrigins.includes(origin) || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Origin not allowed by CORS'));
//       }
//     }
//   }

app.use(cors(corsOptions));





app.get('/user-list', function(req, res, next) {
  var sql='SELECT * FROM loansystem.lender_offerings';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('user-list', { title: 'User List', userData: data});
});
});
module.exports = router;



//SignUpLogin
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}



  

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/common')(app);


// Enable preflight requests for all routes
// app.options('*', cors(corsOptions));

// app.get('/', cors(corsOptions), (req, res, next) => {
//   res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })


// app.use(cors(corsOptions));

const initRoutes = require("../Node Backend/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     next();
//   });




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

//start application server on port 3000
// app.listen(3000, () => {
//   console.log("The server started on port 3000");
// });

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});






const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "testprojectlti@gmail.com",
        pass: "LTI@2021"
      }
    });
  

  const mailOptions = {
    from: 'testprojectlti@gmail.com',
    to: 'testprojectlti@gmail.com',
    subject: "<Message subject>",
    html: "<h1>And here is the place for HTML</h1>"
  };
  
  transporter.sendMail(mailOptions, callback);

}



app.post('/api/forma',(req,res)=>{
    let data=req.body
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    auth: {
      user: 'testprojectlti@gmail.com',
      pass: 'LTI@2021'
    }
  });

 

  var mailOptions = {
    from: 'testprojectlti@gmail.com',
    to: data.email,
    subject: 'NEWS HUB SUBSCRIPTION',
    text: 'MONTLY PLAN'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  SMTPTransport.close();

 

})
  






app.post('/sendFormData', (req, res) => {
    console.log(req.body, 'data of form');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: 'true',
      port: '465',
      auth: {
        user: 'teamsolvathon@gmail.com', // must be Gmail
        pass: 'LTI@2021'
      }
    });
  
    var mailOptions = {
      from: 'teamsolvathon@gmail.com',
      to: '${req.body.email}', // must be Gmail
      cc:`${req.body.name} <${req.body.email}>`,
      subject: 'Sending Email using Node.js',
      html: `
              <table style="width: 100%; border: none">
                <thead>
                  <tr style="background-color: #000; color: #fff;">
                    <th style="padding: 10px 0">Name</th>
                    <th style="padding: 10px 0">E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style="text-align: center">${req.body.name}</th>
                    <td style="text-align: center">${req.body.email}</td>
                  </tr>
                </tbody>
              </table>
            `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({
          message: 'successfuly sent!'
        })
      }
    });
  
  });










const webpush=require('web-push');

//console.log(webpush.generateVAPIDKeys());

const publicKey   ='BPaNGXInKgCqrDg7uq2w9bgUChX6LXvZvhO7v-llxASwmgF2KLMTb24p1kRU_OoGrRnpT6-C1OW0vJGzTv3bEog';
const privateKey  ='0PDWSroeDg6eGYsU8WCSkD6uitxg9NQN3HvG0w87g_k';

const fakeDatabase = [];


// app.use(cors());
// app.options('*', cors(corsOptions));

webpush.setVapidDetails('mailto:teamsolvathon@gmail.com', publicKey, privateKey);

app.post('/subscription',(req, res) => {
  console.log('Inside Subscription');
  const subscription = req.body;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  fakeDatabase.push(subscription);
  console.log(fakeDatabase[0]);
});

// app.post('/api/sendNotification',

//   sendNotification=(req, res)=>
//   {
//   console.log('Inside Notification');
//   const notificationPayload = {
//     notification: {
//       title: 'New Notification',
//       body: 'This is the body of the notification',
//       icon: 'assets/icons/icon-512x512.png'
//     }
//   };

//   const promises = [];
//   fakeDatabase.forEach(subscription => {
//     promises.push(webpush.sendNotification(subscription, JSON.stringify(notificationPayload)));
//   });
//   Promise.all(promises).then(() => res.sendStatus(200));
// });


let port = 3001;
app.listen(port, () => {
  console.log(`Running at localhost:${port} with CORS`);
});



const notificationPayload = {
  notification: {
    title: 'New Notification',
    body: 'This is the body of the notification',
    icon: 'assets/icons/icon-512x512.png'
  }};
webpush.sendNotification(fakeDatabase[0],JSON.stringify(notificationPayload));



















