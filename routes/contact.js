const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const ContactModel = require("../Db/contact.js"); 

const sendMail = "shubrat.parth@gmail.com";
const sendPassword = "qvqjufvghdqefozh";

router.post("/contactMe", async (req, res) => {
  let email = req.body.email;
  let fullName = req.body.fullName;
  let message = req.body.message;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      tls: { 
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: sendMail,
        pass: sendPassword,
      },
    });

    const mailOptions = {
      from: sendMail,
      to: email,
      subject: "Thanks for Reaching out to me!",
      html: `${fullName}, Please wait for my response. I will get back to you as soon as possible, till then stay safe and take care.`,
    };

    transporter.sendMail(mailOptions).then(async(response) => {
        let contact = new ContactModel({
            senderFullName: fullName, 
            senderEmail: email, 
            senderMessage: message
        });

        try{
            await contact.save();
            res.send("Email Send Successfully!");
        }
        catch(err){
            console.log(err);
        }
    })
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
