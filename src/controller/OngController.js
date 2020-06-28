const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const ongs = await connection('ongs').select('*').limit(5).offset((page - 1) * 5)
        return response.json(ongs);
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