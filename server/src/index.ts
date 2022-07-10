import * as ex from 'express'

const PORT = process.env.PORT || 3000
const app = ex()
const cwd = process.cwd()

app.use('/static', ex.static(`${cwd}/client/static`))

app.set('view engine', 'hbs')
app.set('views', `${cwd}/client/pages`)

app.get('/', (_req: ex.Request, res: ex.Response) => {
    res.render('index')
})

app.listen(PORT, function() {
    console.log('App running on PORT:' + PORT)
})