const con = require('../connect/banco').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo = req.body.tipo;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto = req.body.statusQuarto;
    let cliente_id = req.body.cliente_id;

    let query = 'INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id ) VALUES'
    query += `('${numero}','${andar}','${tipo}', '${valor_diaria}', '${statusQuarto}', ${cliente_id})`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM quartos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo = req.body.tipo;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto = req.body.statusQuarto;
    let cliente_id = req.body.cliente_id;

    let query = `UPDATE quartos SET numero = '${numero}', andar = '${andar}',tipo ='${tipo}', valor_diaria = '${valor_diaria}', statusQuarto = '${statusQuarto}', cliente_id = '${cliente_id}' `
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}


const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM quartos WHERE quarto_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar,
    update
}