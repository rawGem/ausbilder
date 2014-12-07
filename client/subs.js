
//lessonsSub = Meteor.subscribe("lessons") 
//
//if (lessonsSub.ready()) {
//  Blaze.render("lessonsList")
//}

Tracker.autorun(function(){
  Meteor.subscribe("lessons")
  Meteor.subscribe("users_for_admin")
})
