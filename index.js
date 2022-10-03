const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to my forma')
    res.end();
})

app.post('/api/forma', (req, res)=>{

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail', port:465, 
        auth:{
            user:'sharma20arvind@gmail.com',
            pass: 'Arv@ind2@'
        }
    });

    let mailOptions={
        from:data.email, 
        to:'sharma20arvind@gmail.com',
        subject:`Message from ${data.name}`,
        html:`
        <h3>Informations</h3>
        <ul>
            <li>name: ${data.name}</li>
            <li>email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error,response)=>{
        if(error){
            res.send(eror)
        }else{
            res.send('Success')
        }
    })

    smtpTransport.close();

})

const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
})


