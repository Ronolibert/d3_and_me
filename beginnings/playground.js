var svg = d3.select('body').append('svg')
            .attr('width', '500')
            .attr('height', '500')
            .style('border-width', '1')
            .style('border-color', 'lightgray')
            .style('border-style', 'solid');

// var line = d3.select('svg')
//               .append('line')
//               .attr('x1', 20)
//               .attr('y1', 20)
//               .attr('x2', 400)
//               .attr('y2', 400)
//               .style('stroke', 'black')
//               .style('stroke-width', '2px');

// var text = d3.select('svg')
//               .append('text')
//               .attr('x', 20)
//               .attr('y', 20)
//               .text('HELLO');


// var circle = d3.select('svg')
//                 .append('circle')
//                 .attr('r', 20)
//                 .attr('cx', 20)
//                 .attr('cy', 20)
//                 .style('fill', 'red');

// var blueCircle = d3.select('svg')
//                     .append('circle')
//                     .attr('r', 100)
//                     .attr('cx', 400)
//                     .attr('cy', 400)
//                     .style('fill', 'lightblue');


// var otherText = d3.select('svg')
//                   .append('text')
//                   .attr('x', 400)
//                   .attr('y', 400)
//                   .text('WORLD');


var circle = d3.select('svg')
                .append('circle')
                .attr('r', 20)
                .attr('cx', 20)
                .attr('cy', 20)
                .style('fill', 'red');


var texrt = d3.select('svg')
              .append('text')
              .attr('id', 'a')
              .attr('x', 20)
              .attr('y', 20)
              .style('opacity', 0)
              .text('hello world');


var blueCircle = d3.select('svg')
                    .append('circle')
                    .attr('r', 100)
                    .attr('cx', 400)
                    .attr('cy', 400)
                    .style('fill', 'lightblue');


var otherText = d3.select('svg')
                  .append('text')
                  .attr('id', 'b')
                  .attr('x', 400)
                  .attr('y', 400)
                  .style('opacity', 0)
                  .text('uh hi');

d3.select('#a').transition().delay(1000).style('opacity', 1);

d3.select('#b').transition().delay(5000).style('opacity', .75);

d3.selectAll('circle').transition().duration(2000).attr('cy', 200);


































