import express from 'express'
import { route_homepage } from './routes/route_homepage'
import path from 'path'
import { route_cadastro } from './routes/route-cadastro'
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

app.use(route_homepage)
app.use(route_cadastro)
export {app}