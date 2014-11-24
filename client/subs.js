// change second argument to "pupil" to get 
// a different cursor back from the db

//Meteor.loginWithPassword('Dr. Jones', 'password')

//lessonsSub = Meteor.subscribe("lessons") 
//
//if (lessonsSub.ready()) {
//  Blaze.render("lessonsList")
//}

Tracker.autorun(function(){
  Meteor.subscribe("lessons")
  Meteor.subscribe("users")
})
