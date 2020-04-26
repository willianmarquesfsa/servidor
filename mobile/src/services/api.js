import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.100:3333',
}); 


export default api;

/*Requisições do tipo GET
axios.get('https://reactjs.org/logo-og.png')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

 Requisições POST, note há um parâmetro extra indicando os parâmetros da requisição
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('salvo com sucesso')
  });  */