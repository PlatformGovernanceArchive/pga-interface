import d3 from 'd3';

var node = document.createElement('div');
node.className='d3-graph'

console.log('Im here in D3 land')
console.log('Node: ', node)

var width = 960,
    height = 500;

var svg = d3.select(node).append("svg")
    .attr("width", width)
    .attr("height", height);

console.log('svg: ', svg)
console.log('Node: ', node)

var defs = svg.append("defs");

 defs.append("clipPath")
    .attr("id", "circle1")
  .append("circle")
    .attr("cx", 350)
    .attr("cy", 200)
    .attr("r", 180);

defs.append("clipPath")
    .attr("id", "circle2")
  .append("circle")
    .attr("cx", 550)
    .attr("cy", 200)
    .attr("r", 180);

console.log('Node: ', node)

module.export(node)
