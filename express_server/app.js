const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(express.static(__dirname + '/img'));

const obj = {
    "cards":[
        {
            "text": "Try our services at 45-65% discount",
            "imgSrc": "./img/open_gates_month_color.png",
            "anchor": "#discount",
            "cardClass": "card-1"
        },
        {
            "text": "Register process made easy",
            "imgSrc": "./img/open_gates_month_color.png",
            "anchor": "#register",
            "cardClass": "card-2"
        },
        {
            "text": "Become a full-time member",
            "imgSrc": "./img/open_gates_month_color.png",
            "anchor": "#member",
            "cardClass": "card-3"
        }    
    ],
    "details": [
        {
            "title": "Try our services at 45-65% discount",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, libero ipsa, nihil ullam beatae quidem quaerat nulla voluptatum dolorum maiores similique ut veritatis. At atque necessitatibus quod nihil aliquid repellat.",
            "anchor": "discount",
            "detailClass": "detail-left",
            "floatClass": "float-left",
            "imgSrc": "./img/doctor.jpg",
            "id": "1"
        },
        {
            "title": "Register process made easy",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, libero ipsa, nihil ullam beatae quidem quaerat nulla voluptatum dolorum maiores similique ut veritatis. At atque necessitatibus quod nihil aliquid repellat.",
            "anchor": "register",
            "detailClass": "detail-right",
            "floatClass": "float-right",
            "imgSrc": "./img/registration.jpg",
            "id": "2"
        },
        {
            "title": "Become a full-time member",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, libero ipsa, nihil ullam beatae quidem quaerat nulla voluptatum dolorum maiores similique ut veritatis. At atque necessitatibus quod nihil aliquid repellat.",
            "anchor": "member",
            "detailClass": "detail-left",
            "floatClass": "float-left",
            "imgSrc": "./img/papers.jpg",
            "id": "3"
        }
    ]
}


app.use(
    cors({
        exposedHeaders: ['x-auth-token'],
        origin: 'http://localhost:8080'
    })
);

app.get('/', function(req, res, next){
    res.json({...obj});
});


app.listen(4000, function () {
    console.log(`app on port ${PORT}`);
    
});

// start: nodemon app.js