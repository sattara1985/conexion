const pg = require('pg');

//const Pool= pg.Pool;

const pool=new pg.Pool({
    host:'localhost',
    port:5432,
    database:'dvdrentals',
    user:'postgres',
    password:'root',
});


// pool.query('select * from actor',(error, results)=>{
//     if (error) {
//         console.error('Ocurrio un error');
//         console.error(error);
//         return;            
//     }
//     console.log(results.command)  //comando que se corrio
//     //console.log(results.fields) // campos de la base de datos
//     console.log(results.oid)// el oid de la consulta
//     console.log(results.rowCount); // numero de fila que nos trajo
//     //console.log(results.rows) // rows los resultados
 
// });


// pool.query("SELECT * from actor WHERE first_name='Penelope'", (error, results) => {
//     if(error) {
//         console.error('Ocurrió un error');
//         console.error(error);
//         return;
//     }
//     console.log(results.rows);
//     console.log(results.rowCount);
// });


const persona = {
    name: 'sTEVENS',
    apellido: 'BEVERRIL'
}

///SELECT * from actor WHERE lower(first_name) like '%mali%';
//SELECT * from actor WHERE lower(first_name) like lower('%stev%');

pool.query("INSERT INTO actor(first_name, last_name) VALUES ($1, $2)", [persona.name, persona.apellido], (error, results) => {
    if(error) {
        console.error('Ocurrió un error');
        console.error(error);
        return;
    }
    console.log(JSON.stringify(results));
    console.log((results));
});


