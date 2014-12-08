
//lessonsSub = Meteor.subscribe("lessons") 
//
//if (lessonsSub.ready()) {
//  Blaze.render("lessonsList")
//}

Tracker.autorun(function(){
  if (Meteor.userId() && Meteor.user()) {

    var currentUser = Meteor.user()
    
    if (currentUser.profile.role === "pupil") {
      Meteor.subscribe("lessonsForStudents")

    } else if (currentUser.profile.role === "admin") {
      Meteor.subscribe("users_for_admin")
      //Meteor.subscribe("lessonsForStudents")
      Meteor.subscribe("lessonsForAdmin")
    } 
  }
})
