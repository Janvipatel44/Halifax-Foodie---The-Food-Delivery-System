const express = require("express");
const app = express();
const cors = require('cors')
//const path = require("path")
const port = process.env.PORT || 5000;

const ReviewRoute = require('./api/routes/reviewRoute')

app.use(cors())
app.use(express.urlencoded({ limit: '5mb', extended: true }))
app.use(express.json())
app.use("/reviewRoute", ReviewRoute)


app.listen(port, () => {
    console.log("Server is running on " + port);
})