import express, {Request, Response} from 'express'

const PORT = process.env.PORT || 3000
const app = express()
const cwd = process.cwd()

app.set('view engine', 'hbs')
app.set('views', `${cwd}/client/pages`)

app.get('/', (_req: Request, res: Response) => {
    res.render('index')
})

app.listen(PORT, function() {
    console.log('App running on PORT:' + PORT)
})