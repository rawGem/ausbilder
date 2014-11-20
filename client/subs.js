// change second argument to "pupil" to get 
// a different cursor back from the db
Accounts.createUser({
  'username': 'Dr. Jones', 
  'email': 'indianajones@oxford.edu',
  'password': 'password',
  'profile': {
    'role':'admin'
  }
})

Meteor.loginWithPassword('Dr. Jones', 'password')

Meteor.subscribe("lessons", "admin") 
