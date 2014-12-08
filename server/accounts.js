
// make an admin if there isn't one
// Indiana Jones, a worthy administrator
// of things intellectual 

Meteor.startup(function() {
  //console.log(Meteor.users.find({username: "Dr. Jones"}).fetch())
  if ( Meteor.users.find({username: "Dr. Jones"}).fetch().length === 0) {
    Accounts.createUser({
      'username': 'Dr. Jones', 
      'email': 'indy@o.e',
      'password': 'pwd',
      'test': true, 
      'profile': {
        'role':'admin'
      }
    })
  }
});

Accounts.onCreateUser( function(options, user){
  //hardcode Dr. Jones as admin
  if (!options.profile) {
    randomStatus = Math.ceil(Math.random()*10);
    if(randomStatus >= 5) { randomStatus = randomStatus - 5 };
    colors = ["red", "blue", "yellow", "green", "purple"];

    options.profile = {};
    options.profile.role = "pupil";
    options.profile.status = colors[randomStatus];
    user.profile = options.profile
    user.admin = {}
    user.admin = false
  } else {//right now this assumes only admin hits this 
    user.profile = options.profile
    user.admin = true
  }

  return user
});

