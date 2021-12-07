const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { validateToken } = require('../middlewares/AuthMiddleware')
const {sign} = require('jsonwebtoken')

router.post('/', async(req,res) => {
    const {username, password} = req.body // receiving username and password from frontend form
    bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            username: username,
            password: hash
        })
        res.json("Success")
    })
})

router.post('/login', async(req,res) => {
    const {username, password} = req.body

    const user = await Users.findOne({where: { username: username } })// find one user which login is the same as the input one

    if(!user) res.json({ error: "User doesn't exist" }) // if not a match return an error

    else{
        bcrypt.compare(password, user.password).then((match) =>{
            if(!match) res.json({error: "Wrong password or username"})
            
            else {
                    const accessToken = sign(
                        {username: user.username, id: user.id},
                        "importantsecret"
                        )
                    res.json({token: accessToken, username: user.username, id: user.id})
                }

        }) // compare input password by hashing it with already hashed one in db
}
    

})

router.get('/protector',validateToken, (req,res)=>{
    res.json(req.user)
})


module.exports = router