import { Router } from "express";
import { client } from "../connection/factory";


let route_cadastro = Router()
//select  ST_AsText(geometria) from ponto_de_interesse
route_cadastro.post('/cadastro/',async (req, res)=>{
    let {nome, desc, lat, long} = req.body
    console.log(nome)
    console.log(desc)
    console.log(lat)
    console.log(long)
    try {
       await client.connect()
        client.query(`insert into ponto_de_interesse (nome, descricao, geometria) values (${nome}, ${desc}, ST_GeomFromText('POINT(${lat}, ${long})'))`).then(result => {
            const ts = result.rows
            console.log(ts)
            res.json({Resultado: "Usuário cadastrado"})
        })

      } catch (error) {
        res.json({Resultado: "Houve um problema"})
      }
})
export {route_cadastro}