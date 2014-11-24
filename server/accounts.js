
// make an admin if there isn't one
// Indiana Jones, a worthy administrator
// of things intellectual 
Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      'username': 'Dr. Jones', 
      'email': 'indianajones@oxford.edu',
      'password': 'password',
      'profile': {
        'role':'admin'
      }
    })
  }
});

Accounts.onCreateUser( function(options, user){
  if (!options.profile) {
    options.profile = {}
    options.profile.role = "pupil"
    user.profile = options.profile
  } else {
    user.profile = options.profile
  }

  return user
});

