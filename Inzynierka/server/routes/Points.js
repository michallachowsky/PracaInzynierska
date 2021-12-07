const express = require("express");
const router = express.Router();
const { Score } = require("../models");
// const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/:UserId',async (req,res)=>{
    const UserId = req.params.UserId
    const score = await Score.findAll({where: {UserId: UserId}})
    res.json(score)
})

router.post("/", async (req, res) => {
  const score = req.body;
  await Score.create(score);
  res.json(score);
});

router.delete("/:scoreId",async(req,res) =>{
  const scoreId = req.params.scoreId
  await Score.destroy({
    where:{
      id:scoreId
    }
  })
  res.json("Deleted succesfully")
})

module.exports = router;