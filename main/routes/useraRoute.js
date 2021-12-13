const express = require("express");
const router = express.Router();
const user = require("../Modal/userModal");
router.get("/UserDetailget", async (req, res) => {
  try {
    const raj = await user.find();
    res.json(raj);
  } catch (err) {
    res.send("error" + err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const edituser = await user.findById(req.params.id);
    edituser.name = req.body.name;
    const a1 = await edituser.save();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleteuser = await user.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteuser);
  } catch (err) {
    res.send("error");
  }
});
router.post("/post", (req, res) => {
  const name = req.body.name;
  const gmail = req.body.gmail;
  const mobile = req.body.mobile;
  const message = req.body.message;
  const newuser = new user({
    name,
    gmail,
    mobile,
    message,
  });
  newuser
    .save()
    .then(() => {
      res.json("created");
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = router;
