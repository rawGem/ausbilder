if (Lessons.find().count() === 0) {
  Lessons.insert({name: "Math"});
  Lessons.insert({name: "Science"});
  Lessons.insert({name: "Literature"});
  Lessons.insert({name: "History"});
  Lessons.insert({name: "Social Studies"});
}
