const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const image = await connection('imagens').select('*');
        return response.json(image);
    },




    async create(request, response) {

        const { linksimagens, } = request.body;
        
        await connection('imagens').insert({
                
                linksimagens,
            })
            //console.log(data);

            return response.json({ linksimagens })

    }
}