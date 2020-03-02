const db = require('./db')

exports.createEvent = function(model, callback){
    const query = `INSERT INTO events(title, date, time, text) VALUES(?, ?, ?, ?)`
    const values = [model.title, model.date, model.time, model.text]

    db.query(query, values, function(error){
        if (error){
            callback(['database error'])
        }   else
            callback(null)
    })
}

exports.getAllEvents = function(callback){
    const query = `SELECT * FROM event ORDER BY date`
    const values = []

    db.query(query, values, function(error, events){
		if(error){
			callback(['databaseError'])
		}else{
			callback([], events)
		}
	})
}

exports.getOneEvent = function(id, callback){
    
}