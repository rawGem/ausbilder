

Template.userItem.helpers({
  circle: function() {
    var svg = d3.select("body").append("svg")
    svg.attr("width", 100).attr("height", 100)
    var circle = svg.selectAll("circle")
                    .data([0])
                    .enter()
                    .append("circle");
    circle.attr("r", 10)
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("fill", this.profile.status)
    var circleText = svg.selectAll("text")
                        .data([0])
                        .enter()
                        .append("text")
    circleText.text(this.profile.status)
              .attr("x", 20)
              .attr("y", 20)
  }
})
