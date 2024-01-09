const http= require("node:http")
const datos= require("./js/data.js")
const server = http.createServer((req,res)=>{
    res.end(`<h1>${datos.pagina.title}</h1><h2>${datos.pagina.subTitle}</h2><p>${datos.pagina.descripcion}</p>`)
});


server.listen(0,()=>{
    console.log(`server listen on port http://localhost:${server.address().port}`);
});