const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./WorkshopDevEspecial.db');

db.serialize(function(){
    //Criando a tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
    );
`)

//Inserção de dados na tabela
/*const query = `
INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
) VALUES (?,?,?,?,?);    
`*/

//Inserindo um dado na tabela
/*const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Programação",
    "Estudo",
    "Aprenda a desenvolver sites e programas usando as principais linguagens do mercado como Node.Js, React.Js, React Nateve, Java e dentre outras.",
    "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
]
db.run(query, values, function(err) {
    if(err) return console.log(err)

    console.log(this); 

    
});*/

//Exclusão de um dado
/*db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    if(err) return console.log(err)

    console.log("AÇÃO DE EXCLUSÃO EFETUADA COM SUCESSO", this)
})*/

//Consulta
/*db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)
    console.log(rows)
})*/
})

module.exports = db; 