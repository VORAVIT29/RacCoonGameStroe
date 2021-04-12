const app = require('express')()
const ejs = require('ejs')
const bp = require('body-parser')
const session = require('express-session')

app.set('views', './FrontEnd')
app.set('view engine', 'ejs')
app.use(bp.urlencoded({ extended: true }))

app.use(session({
    secret: 'sigin-sigout',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {

    if (req.session.name) { //ตรวจสอบว่าเคยล็อคอินค้างไว้ไหม
        res.redirect('/introduce')

    } else if (!req.session.name) { //ตรวจสอบว่าไม่เคย ลอกอิน
        res.redirect('/sigin')
    }

})

app.all('/introduce', (req, res) => {

    if (req.session.name) { //ตรวจสอบว่าเคยล็อคอินค้างไว้ไหม
        let name = req.session.name
        let pas = req.session.pass
        let age = req.session.age
        res.render('introduce', { N: name, P: pas, A: age })
    }

})

app.all('/sigin', (req, res) => {
    let error = false

    if (req.body.sub) {
        if (req.body.name == 'root' && req.body.pass == '123') {

            req.session.name = req.body.name
            req.session.pass = req.body.pass
            req.session.age = req.body.age
                //res.redirect('/introduce')
            res.redirect('/introduce')

        } else {
            res.render('sigin', { error: error = true })
        }
    } else {
        res.render('sigin')
    }

})

app.get('/logout', (req, res) => { //ออกจากระบบ

    if (req.query.logout) {
        req.session.destroy((err) => {})
    }
    res.redirect('/sigin')
})

let port = 3000
app.listen(port, (req, res) => {
    console.log('Server Start.....')
    console.log(`http://127.0.0.1:${port}/`)
})