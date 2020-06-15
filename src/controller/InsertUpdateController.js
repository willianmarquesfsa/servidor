const connection = require('../database/connection')
const crypto = require('crypto');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;	
let space = 'og:image" content="';
let space2 = 'og:title" content="';
let space3 = 'biography":"';

let valim = '" />';
let vatit = '(@';
let vades = '","bloc';

/*function inser(ong_id, title, description, value){
    
    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    })
    //return response.json({ id })

}

*/
function splitString(stringToSplit, separator, vain) {
    var arrayOfStrings = stringToSplit.split(separator);
    var test = arrayOfStrings[1].split(vain)
    if(test[0].length>500) { console.log('Muito Grande')}
    else  console.log(test[0])
     } 


module.exports = {

    async index(request, response) {

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select([
                'incidents.value',
                'ongs.id'                
            ])
            //console.log(incidents)

        let xhr = new XMLHttpRequest();
        let arr = incidents
        console.log(arr.length)
        console.log(incidents)
        
        for (var i = 30; i < 39; i++) {
         console.log(i)
                
        xhr.open('GET', arr[i].value, false);   
        try {
            xhr.send();
            if (xhr.status != 200) {
              console.log(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                    splitString(xhr.responseText, space, valim);
                    splitString(xhr.responseText, space2, vatit);
                    splitString(xhr.responseText,space3, vades);
                    if (i===(arr.length-2)) {return response.send('Pronto')}
               }
           }
           catch(err) { // instead of onerror
            console.log('erro')
          }

        }
    },




    async create(request, response) {

        const { name, email, whatsapp, city, uf, grupo, centrolojistico } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
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

        return response.json({
            id
        })

    }
}