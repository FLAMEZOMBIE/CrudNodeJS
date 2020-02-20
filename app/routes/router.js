const router = require('express').Router();
const User = require('../models/model')

// Memanggil User
router.get("/get", async(req, res) => {
    let query = await User.find();

    return res.json({
        code: 200,
        message: "Sukses Get Data",
        success: true,
        data: query
    })
})

// Menambah User
router.post("/post", async(req, res) => {
    let model = {
        nama: req.body.nama,
        email: req.body.email,
        nomor: req.body.nomor
    }

    let query = await User.create(model);

    return res.json({
        code: 201,
        message: "Sukses Insert Data",
        success: true,
        data: query
    })
})

//Mengedit Data
router.get("/edit/:id", async(req, res) => {
    User.findById({ _id: req.params.id })
        .then(data => res.send(data))
})


router.put("/edit", (req, res) => {
    User.update({ _id: req.query.id }, {
            $set: {
                nama: req.body.nama,
                email: req.body.email,
                nomor: req.body.nomor
            }
        })
        .then(data => {
            res.send('Sukses update CUYYY')
        })
})


// Menghapus User
router.delete("/edit/", async(req, res) => {
    const id = req.query.id
    User.findByIdAndRemove(id)
        .then(data => res.send("Sukses Delete CUYYYY"))
})
module.exports = router;