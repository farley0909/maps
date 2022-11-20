import express from 'express'
import { route_homepage } from './routes/route_homepage'
import path from 'path'
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

app.use(route_homepage)
export {app}