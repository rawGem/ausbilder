// have access to object from each iteration gets passed [this]
//
Template.lessonItem.events({
  'click': function() {
    return console.log(this._id)
  }
})
