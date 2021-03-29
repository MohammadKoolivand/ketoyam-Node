const express = require('express')
const AdminRouter = express.Router()

AdminRouter.get('/', (req,res)=>{
    res.send('admin')
})

module.exports = AdminRouter