const connection = require('../database/connection')
const crypto = require('crypto');

const nodemailer = require('nodemailer');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const ongs = await connection('ongs').select('*').limit(5).offset((page - 1) * 5)
        return response.json(ongs);
    },




    async create(request, response) {

        const { name, email, whatsapp, city, uf, grupo, centrolojistico } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
       
        const ongs2 = await connection('ongs').select('ongs.email').where('ongs.email', '=', email)
         
        

        var resposta = String(email)

        const transporter =  nodemailer.createTransport({
            //host: "smtp.gmail.com",
            //port: 25,
            //secure: false, // true for 465, false for other ports
            service: 'gmail',
            auth: {
                user: "acheifsa@gmail.com",
                pass: "221369wil"
            },
            tls: { rejectUnauthorized: false }
          });


        if( ongs2.length == 0) {

        await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
                grupo,                
                centrolojistico
            })
            //console.log(data);
         
            const mailOptions = {
                from: `${email}`,
                to: `${email}`,
                subject: 'Seu endereço de acesso ao AcheiFsa é:',
                text: `${id}`
              };


              transporter.sendMail(mailOptions, function(error, info){

                //console.log('teste')
                
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email enviado: ' + info.response);
                }
              });



            
            

       

        return response.json({
            resposta
        })
    }
    if (ongs2.length!=0){
        
        resposta = String(`${ongs2[0].email} ja anteriormanete cadastrado` )
        
        return response.json({resposta}
            
        )
    }

    }
}