const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const fetch = require('node-fetch')
const app = express()

const preURL = 'https://vnexpress.net/rss' //URL to add route
//middlewares
//cors
app.use(
    cors({
        origin: ['https://vnexpress.net', 'http://localhost:3000'], //localhost:3000 is featured by create-react-app
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-type'],
    })
)

//connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '24062003',
    database: 'rss_news',
})
db.connect(() => {
    console.log('Connected to database')
})

//routes
app.get('/', (req, res) => {
    res.send('This is Homepage 🔥')
})

app.get('/rss/:type', async (req, res) => {
    //change "-" in url to "_" for table database's name
    const table = req.params.type.replace(/-/g, '_')

    db.query(`DROP TABLE ${table};`)
    db.query(`CREATE TABLE ${table} (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255),
        link VARCHAR(255),
        quickContent TEXT,
        pubTime TIMESTAMP
    );`)

    //fetch xml from url
    const result = await fetch(`${preURL}/${req.params.type}.rss`)
    const data = await result.text()

    //use regex to get values of each item, from xml tags
    const titles = await data.match(
        /(?<=<title>).+(?=<\/title>\s*<description><!\[CDATA\[<)/g
    )
    const links = await data.match(/(?<=<a\s+href=").+(?=">)/g)
    const quickContents = await data.match(/(?<=<\/br>).+(?=.])/g)
    const pubTimes = await data.match(
        /(?<=<\/br.*\n\s\s\s\s\s\s<pubDate>).+(?=\/pubDate)/g
    )

    //make a new array of objects, each object has 4 properties
    const arrayData = await pubTimes.map((pubTime, index) => {
        return {
            title: titles[index],
            link: links[index],
            quickContent: quickContents[index],
            pubTime: pubTime,
        }
    })

    //each object, create a new data row
    arrayData.forEach((obj) => {
        const dbQuery = `INSERT INTO ${table} (title, link, quickContent, pubTime) VALUES (?, ?, ?, ?);`
        obj.pubTime = new Date(obj.pubTime) //change date String to Date type
        db.query(dbQuery, [obj.title, obj.link, obj.quickContent, obj.pubTime])
    })

    db.query(`SELECT * FROM ${table};`, (err, result) => {
        return res.json(result)
    })
})

app.listen('8000', () => console.log('Server ON'))
