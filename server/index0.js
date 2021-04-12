const app = require('express')()
const path = require('path')

app.use((req, res) => {
    res.status(200)
    res.type('text/html')
    let page1 = path.join(__dirname, 'html/home.html')
    res.sendFile(page1)
})

app.listen(3000, () =>
    console.log('Server Start....')
)