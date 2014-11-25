Template.userItem.helpers({

  circle: function() {
    var svg = d3.select("body").append("svg")
    var circle = svg.selectAll("circle")
                    .data([0])
                    .enter()
                    .append("circle");
    circle.attr("r", 10)
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("fill", this.profile.status)
  }

})
