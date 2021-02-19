var express = require('express');
var router = express.Router();
var DonorModel = require('../models/donor');

const donorMock = [
    {
        id: 1,
        lastName: "Snow",
        firstName: "Jon",
        age: 35,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 2,
        lastName: "Lannister",
        firstName: "Cersei",
        age: 42,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 3,
        lastName: "Lannister",
        firstName: "Jaime",
        age: 45,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 4,
        lastName: "Stark",
        firstName: "Arya",
        age: 16,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 5,
        lastName: "Targaryen",
        firstName: "Daenerys",
        age: null,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 6,
        lastName: "Melisandre",
        firstName: null,
        age: 150,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 7,
        lastName: "Clifford",
        firstName: "Ferrara",
        age: 44,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 8,
        lastName: "Frances",
        firstName: "Rossini",
        age: 36,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
    {
        id: 9,
        lastName: "Roxie",
        firstName: "Harvey",
        age: 65,
        cpf: "50743290003",
        email: "abc@gmail.com",
    },
];

router.get('/', function (req, res, next) {
    console.log('Finding Donors...');
    DonorModel.find(function (err, donorList) {
        if (err) return console.error(err);
        console.log('Result', donorList);
        res.send(donorMock);
    });
});

module.exports = router;