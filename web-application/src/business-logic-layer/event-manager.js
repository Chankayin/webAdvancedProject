const eventRepository = require('../data-access-layer/event-repository')
const eventValidator = require('./event-validator')

exports.createEvent = function(model, callback){
    const errors = eventValidator.getErrorsNewEvent(model)
    
    if (0 < errors.length){
        callback(errors)
        return
    }

    eventRepository.createEvent(model, function()    {
        callback(null)
    })
}

exports.getAllEvents = function(callback){
	eventRepository.getAllEvents(callback)
}

exports.getOneEvent = function(id, callback){
    eventRepository.getOneEvent(id, callback)
}