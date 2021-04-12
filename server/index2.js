const app = require("express")()
const bp = require("body-parser")
const ejs = require("ejs")

/*ถ้าจะอ้างอิงไฟล์ ค่าปกติคือ views
{ */
app.set("views", "./FrontEnd/")
    // }

app.set("view engine", "ejs")
app.use(bp.urlencoded({ extended: true }))

//เข้าหน้าแรก
app.get("/", (req, res) => {
    //ถ้ายังไม่ได้กรอกข้อมูลให้ไปกรอก
    if (req.query.id != undefined) {
        res.redirect("/sigin")
    } else {
        res.render("index")
    }
});

//หน้าทำการสมัครสมาชิก
app.get("/sigin", (req, res) => {
    res.render("sigin")
});

//หน้าตรวจดูประวัติที่กรอก
app.post("/introduce", (req, res) => {
    let data = {}
    let Name = req.body.name
    let Surname = req.body.surname
    let Age = req.body.age
    data = { N: Name, Sur: Surname, A: Age }
    res.render("introduce", data)
});

let port = 3000
app.listen(port, () =>
    console.log("Server Start.....")
);
console.log(`http://127.0.0.1:${port}/`)