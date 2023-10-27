import express from "express"
import db from "./app/config/dataBase.js"
import route from "./app/routes/route.js"

const app = express()
app.listen(8080,()=>console.log("Server running"))

try {
    await db.authenticate()
    console.log("Database Connected")
} catch (error) {
    console.log(error)
}
app.use(express.json())
app.use(route)