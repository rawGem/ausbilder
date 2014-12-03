


//Template.userItem.helpers({
//  circle: function() {
//    var selector = "#" + this._id
//    var svg = d3.select(selector).append("svg")
//    svg.attr("width", 100).attr("height", 100)
//    var circle = svg.selectAll("circle")
//                    .data([0])
//                    .enter()
//                    .append("circle");
//    circle.attr("r", 10)
//          .attr("cx", 20)
//          .attr("cy", 20)
//          .attr("fill", this.profile.status)
//    var circleText = svg.selectAll("text")
//                        .data([0])
//                        .enter()
//                        .append("text")
//    circleText.text(_.first(this.emails).address)
//              .attr("x", 20)
//              .attr("y", 20)
//  }
//})

Template.usersList.events({
  'click': function() {
    return console.log(this._id)
  }
})

Template.userItem.helpers({
  email: function() {
    return _.first(this.emails).address
  }
})


Template.userItem.rendered = function() {
  var id = this.data._id
  var status = this.data.profile.status 
  var address = _.first(this.data.emails).address

  Tracker.autorun(function() {
    var selector = "#" + id 
    var svg = d3.select(selector).append("svg")
    svg.attr("width", 50).attr("height", 50)
    var circle = svg.selectAll("circle")
                    .data([0])
                    .enter()
                    .append("circle");
    circle.attr("r", 10)
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("fill", status)
    var circleText = svg.selectAll("text")
                        .data([0])
                        .enter()
                        .append("text")
    circleText.text(address)
              .attr("x", 20)
              .attr("y", 20)
  })

  $(function() {
    $( document ).tooltip();
  });
}

//Template.userItem.rendered = function() {
//  $(function() {
//    $( document ).tooltip();
//  });
//}
