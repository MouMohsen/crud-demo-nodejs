const User = require("../models/user.model");

exports.create = (req, res) => {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user
        .save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creating user" }))
}

exports.index = (req, res) => {
    User.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error getting user" }))
}

exports.update = (req, res) => {
    const id = req.params.id
    User.findByIdAndUpdate({ _id: id }, {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    },
    {
      new: true
    })
        .then(data => {
            if (!data)
                res.status(404).send({ message: `User ID ${id} is not found` })
            else res.send(data)
        })
        .catch(err => res.status(500).send({ message: err.message || "Error getting user" }))

}

exports.destroy = (req, res) => {
    const id = req.params.id
    User.findByIdAndRemove(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: `User ID ${id} is not found` })
            else res.send({message: `Deleted User ${id}`})
        })
        .catch(err => res.status(500).send({ message: err.message || "Error getting user" }))

}