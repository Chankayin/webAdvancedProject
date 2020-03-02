const express = require('express')

const router = express.Router()

router.get("/", function(request, response){
	response.render("home.hbs")
})

router.get("/about", function(request, response){
	response.render("about.hbs")
})

router.get("/contact", function(request, response){
	response.render("contact.hbs")
})

router.get("/event", function(request, response){
	response.render("event.hbs")
})

router.get("/forum", function(request, response){
	response.render("forum.hbs")
})

module.exports = router