const connection = require('../database/connection')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let space = 'og:image" content="';
let space2 = '<title>';
let space3 = 'biography":"';
let valim = '" />';
let vatit = '(@';
let vades = '","bloc';

var splitString = function(stringToSplit, separator, vain) {
    var arrayOfStrings = stringToSplit.split(separator);
    var test = arrayOfStrings[1].split(vain)
    if(test[0].length>300) { console.log('Muito Grande')}
        else  
        console.log(test[0])
        return test[0]
              
     } 

module.exports = {

    async index(request, response) {        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select([
                'incidents.value',
                'ongs.id'                
            ])         
     
        let xhr = new XMLHttpRequest();
        let arr = incidents
        
       
        async function atualiin(mmm, inst) { 
            await connection('incidents').where('ong_id', mmm ).update({
                instagram: inst
            });
            
            console.log(arr.id)
            try{ return response.status(204).send()}
            catch(err){}
        }

        async function atualitit(mmm, inst) {           
            
            await connection('incidents').where('ong_id', mmm ).update({
                title: inst
            });
            
            console.log(arr.id)
            try{ return response.status(204).send()}
            catch(err){}
        }

        async function atualides(mmm, inst) { 
            await connection('incidents').where('ong_id', mmm ).update({
                description: inst
            });            
            console.log(arr.id)
            try{ return response.status(204).send()}
            catch(err){}
        }
        
        var i = 1;
        function test() {
         console.log(i)

         if (i==arr.length) {     
  
            return console.log('Filé') 
         }
         else

        xhr.open('GET', arr[i].value, false);   
        try {
            xhr.send();
            if (xhr.status != 200) {
              console.log(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {                    
                    atualiin(arr[i].id, splitString(xhr.responseText, space, valim) )
                    atualitit(arr[i].id, splitString(xhr.responseText, space2, vatit) )
                    atualides(arr[i].id, splitString(xhr.responseText,space3, vades) )
                    
               }
           }
           catch(err) { 
            console.log(err)
          }     
          
          i++;
          setTimeout(test, 100 );           
        }
        test()        
    },
    
}