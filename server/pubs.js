
Meteor.publish("lessonsForStudents", function(){
  //console.log(this.userId)
  return Lessons.find({student_id: this.userId})
})

Meteor.publish("users_for_admin", function(user) {
  //var loggedInUser = Meteor.users.findOne({_id:this.userId});
  //if (loggedInUser && loggedInUser.profile.hasOwnProperty("role")) {
  //  var firstEmail = _.first(loggedInUser.emails)
  //  console.log(firstEmail.address)
  //  if (loggedInUser.profile.role === "admin") {
  //    var firstEmail = _.first(loggedInUser.emails)
  //    //var allUsers = Meteor.users.find({username: "Dr. Jones" })
  //    var allUsers = Meteor.users.find({"emails.address": {$ne: firstEmail.address} })
  //    console.log(allUsers.count())
  //    return allUsers
  //    //return Meteor.users.find();
  //  }
  //} else {
  //  return null
  //}
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.ready()
  }
  
});

Meteor.publish("lessonsForAdmin", function(){
  return Lessons.find()
})

Meteor.publish("thingsForAdmin", function(){
  var metrics = new Mongo.Collection('metrics');
  var pipeline = 
  [
    {
      "$match" : {
        "name" : {
          "$ne" : "NULL"
        }
      }
    },
    {
      "$group" : {
        "_id" : "$student_id",
        "lesson_ids" : {
          "$addToSet" : "$_id"
        }
      }
    }
  ]
  var result = metrics.aggregate(pipeline);
})
