const app = require("express")();
const path = require("path");

//หน้าแรกของการเข้าเว็บ
app.get("/", (req, res) => {
    Connect(res, "FrontEnd/index.html");
});

//ตอนกดเข้าไปในข้อมูลประวัติ
app.get("/introduce", (req, res) => {
    Connect(res, "FrontEnd/introduce.html");
});
//สมัครสมาชิก
app.get("/sigin", (req, res) => {
    Connect(res, "FrontEnd/sigin.html");
});

//เชื่อมต่อไปยังหน้าที่ต้องการ
function Connect(response, file) {
    response.status(200);
    response.type("text/html");
    let page = path.join(__dirname, file);
    response.sendFile(page);
}

//กรณีไม่เข้า url ผิด
app.use((req, res) => {
    res.status(404);
    res.type("text/plain");
    res.sendFile("404 Not Found");
});

let host = "127.0.0.1";
let port = 5000;
app.listen(port, () => {
    console.log(`Server Start.....`);
    console.log(`URL..:{ http://${host}:${port}/ }`);
});