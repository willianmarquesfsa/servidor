const express = require('express');
const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionsController = require('./controller/SessionController');
const ImageController = require('./controller/ImageController');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');
const InsertUpdateController = require('./controller/InsertUpdateController');

routes.post('/sessions', SessionsController.create);

routes.get('/imagens', ImageController.index);
routes.post('/imagens', celebrate({
    [Segments.BODY]: Joi.object({
        linksimagens: Joi.string().required(),
       
    })
}), ImageController.create);

//atualização de Imagens
routes.get('/inup', InsertUpdateController.index);

//inserir e buscar empresa
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        grupo: Joi.string(),
        centrolojistico: Joi.string()
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
        
    
}), ProfileController.index);  

//buscar anuncio de impresa
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        grupo: Joi.string(),
        centrolojistico: Joi.string()
    })
}), IncidentsController.index);


//deleter anuncio de empresa
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }) 
}),
 IncidentsController.delete);


module.exports = routes