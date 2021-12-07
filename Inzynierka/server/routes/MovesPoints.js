const express = require("express");
const router = express.Router();
const { Moves } = require("../models");
// const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/:UserId',async (req,res)=>{
    const UserId = req.params.UserId
    const score = await Moves.findAll({where: {UserId: UserId}})
    res.json(score)
})

router.post("/", async (req, res) => {
  const score = req.body;
  await Moves.create(score);
  res.json(score);
});

module.exports = router;