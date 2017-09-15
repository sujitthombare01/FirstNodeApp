var nodemailer = require('nodemailer');
/*
var transporter = nodemailer.createTransport({
    service: 'gmail',
  //  secure: true,
  //  port: 587,
    auth: {
            type: 'OAuth2',
            user: 'itss.softwares@gmail.com',
            clientId: '390578102235-79h9f88fao8rbs8rfbf52m2o04son28m.apps.googleusercontent.com',
            clientSecret: 'cUf2t9y46h3wFmX7J1WU6DfY',
            refreshToken: '1/ioctyZrlb6pzKMTArz2fRRva58b3rx7m1Rb8gPTfwzQPBUDyT4t5WmmtqOUrh_XE'
   
    }
});
*/


var transporter = nodemailer.createTransport({
    service: 'gmail',
       host: '',
       port: 552,
       auth: {         
                user: 'itss.softwares@gmail.com',
                pass: ''    
             }
});


var mailOptions = {
    from: 'newmailer@newcomp.com',
    to: 'sujitthombare01@gmail.com',
    subject: 'Nodemailer test 1',
    html: '<h1>Hello World!!!!</h1><br> <h3>This is first email</h3>'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log(err);
    } else {
        console.log('Email Sent');
    }});   