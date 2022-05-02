const morgan = require('morgan')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Heroes")

const heroes = new mongoose.Schema({
    slug: String,
    name: String,
    power: [String],
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String
})

const HeroModel = mongoose.model('Hero', heroes)

const hero1 = new HeroModel({
    slug: "iron-man",
    name: "Iron Man",
    power: ["money"],
    color: "red",
    isAlive: true,
    age: 46,
    image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
})

const hero2 = new HeroModel({
    slug: "thor",
    name: "Thor",
    power: ["electricty", "worthy"],
    color: "blue",
    isAlive: true,
    age: 300,
    image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
})

const hero3 = new HeroModel({
    slug: "dardevil",
    name: "Daredevil",
    power: ["blind"],
    color: "red",
    isAlive: false,
    age: 30,
    image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
})

hero1.save()

hero2.save()

hero3.save()

