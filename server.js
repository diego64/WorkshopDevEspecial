const express = require("express");
const server = express();

const db = require("./db");

//Configuração dos arquivos estáticos (CSS, imagem e Scripts)
server.use(express.static("public"));

//Habilitação do uso do req.boby
server.use(express.urlencoded({ extended: true }));

//Configuração do Nunjucks 
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", function(req, res) {

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        const reversedIdeas = [...rows].reverse();
 
        let lastIdeas = []
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        } 
        return res.render("index.html", { ideas: lastIdeas });
    })
});

server.get("/ideias", function(req, res) {

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        const reversedIdeas = [...rows].reverse();

        return res.render("ideias.html", { ideas: reversedIdeas });
    })
});

server.post("/", function(req, res) {
//Inserindo dados na tabela
const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
)   VALUES (?,?,?,?,?);    
`

//Inserindo um dado na tabela
const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
]

db.run(query, values, function(err) {
    if(err) {
        console.log(err)
        return res.send("Erro no Bando de Dados!")
    }
    console.log(this); 
});
return res.redirect("/ideias"); 
})
server.listen(3000); 