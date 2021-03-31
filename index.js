const express = require('express');
const {response} = require('express');
const {v4:uuidv4} = require('uuid');

const app = express();

app.use(express.json());
const projects = [];
/**
 *  Query Params: Usado principalmente para filtros e paginação
 *  Route Params: identificar os recursos antes de deletar eles
 *  Request Params: 
 *  * */
app.get('/projects', (request, response) => {
   return response.json(projects);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
   
    const project = { id: uuidv4(), title, owner};
    projects.push(project);
    console.log(project.id);

    return response.json(project);
    //console.log(title);
    //console.log(owner);

//return response.json([
  //  'Projeto1',
   // 'Projeto2',
    //'Projeto3'
});

app.put('/projects/:id', (request, response) =>{
    const params =  request.params;

    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2'
    ]);
});

app.delete('/projects/:id', (request, response) =>{
    return response.json([
        'Projeto 50',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Servidor esta rodando! \n');
});
//console.log(app);