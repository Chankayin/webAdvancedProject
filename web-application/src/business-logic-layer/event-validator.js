
exports.getErrorsNewEvent = function(model){
    const errors = []
    const currentDate = new Date();
    if (model.title == ''){
        errors.push("no title")
    } else if (model.date < currentDate){
        errors.push("cant go back to the past")
    } else if (model.text == ''){
        errors.push("no text")
    }
    
    return errors;
}