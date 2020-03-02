const express = require('express')
const eventManager = require('../../business-logic-layer/event-manager')


const router = express.Router()

router.post('/createEvent',function(request, response){
    const errors = []
    const title = request.body.eventTitle
    const dateControl = request.body.selectedTime
    const date = dateControl.slice(0,10)
    const time = dateControl.slice(12,17)
    const text = request.body.eventText
    
    const model = {
        title,
        date,
        time,
        text
    }
    eventManager.createEvent(model, function(error){
        if (error){
            errors.push(error)
            console.log(error)
            response.render("event.hbs", {model, errors})
        }   else
            response.redirect("/")
    })
})

router.get('/getAllEvents', function(request, response){
    eventManager.getAllEvents(function(errors, events){
        model = {
            errors : errors,
            events : events
        }
        response.render("/home", model)
    })
})

router.get('/getOneEvent', function(request, response){
    const id = null
    eventManager.getOneEvent(id, function(errors,event){
        model = {
            errors : errors,
            event : event
        }
        response.render("/home", model)
    })
})

module.exports = router