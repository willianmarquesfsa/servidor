const connection = require('../database/connection');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let space = 'og:image" content="';
let space2 = 'og:title" content="';
let space3 = 'biography":"';

let valim = '" />';
let vatit = '(@';
let vades = '","bloc';

var splitString = function(stringToSplit, separator, vain) {
    var arrayOfStrings = stringToSplit.split(separator);
    var test = arrayOfStrings[1].split(vain)
    if(test[0].length>500) { console.log('Muito Grande')}
        else  
        console.log(test[0])
        return test[0]
              
     }

module.exports = {
    async index(request, response) {

        

        const { page = 1 } = request.query;
        const {grupo = 1} = request.query;


 
        //var grupos = [grupo1, grupo2, grupo3];

        /*flutas.push(grupo);
        console.log(frutas);*/

        const {centrolojistico = 1} = request.query;
        //const subgrupo = request.query;
        const [count] = await connection('incidents').count();
        //console.log(count)

        

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.grupo',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.centrolojistico',
                'ongs.uf'
            ])
            .where('ongs.grupo', '=', grupo, )
            .where('ongs.centrolojistico', '=', centrolojistico );


            const incidents2 = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                
                'ongs.grupo',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.centrolojistico',
                'ongs.uf'
            ])
            //.where('ongs.grupo', '=', grupo, )
            .where('ongs.centrolojistico', '=', centrolojistico );    

            const incidents3 = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.destaque',
                'ongs.grupo',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.centrolojistico',
                'ongs.uf'
            ])
            .where('incidents.destaque', '=', 2, )
            //.where('ongs.centrolojistico', '=', centrolojistico );




        response.header('X-Total-Count', count['count(*)']);
        

        if(grupo == 'Todos'){
            return response.json(incidents2)
    };
        if(grupo == 'Todoss'){
        return response.json(incidents3)
    };

        if(grupo != 'Todos'){
            return response.json(incidents);
        }
    },




    async create(request, response) {

        const { value, destaque, google } = request.body
        const ong_id = request.headers.authorization;

        /*const instagram = '';
        const description = '';
        const title = '';
        */
        console.log(value)
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', value, false);   
        try {
            xhr.send();
            if (xhr.status != 200) {
              console.log(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                    
                    instagram =  splitString(xhr.responseText, space, valim);
                    title =  splitString(xhr.responseText, space2, vatit);
                    description = splitString(xhr.responseText,space3, vades); 
                    
               }
           }
           catch(err) { // instead of onerror
            console.log('erro')
          }

               
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
            instagram,
            destaque,
            google

        })
        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ erro: 'Operacion not permitted.' });
        }

        console.log(incident.ong_id);
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();

    }
}