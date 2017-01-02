const h = 400;
const w = 400;
let ds;
let total = 0;
let salesAvg = 0;
let metrics = [];

function buildLine() {
  var lineFun = d3.svg.line()
    .x(function (d) { return ((d.month-20130001)/3.25); })
    .y(function (d) { return h-d.sales; })
    .interpolate("linear");

  var svg = d3.select("body").append("svg").attr({ width:w, height: h});

  var viz = svg.append("path")
    .attr({
      d: lineFun(ds),
      "stroke": "purple",
      "stroke-width": 2,
      "fill": "none"
  });

}

function showTotals() {
  var table = d3.select('body').append('table');

  ds.forEach(function(row) {
    total+=(++row.sales);
  })

  salesAvg = total / ds.length;

  metrics.push(`Sales total: ${total}`);
  metrics.push(`Sales average: ${salesAvg.toFixed()}`)

  var tableRow =table.selectAll('tr')
                   .data(metrics)
                   .enter()
                   .append('tr')
                   .append('td')
                   .text(function(d) { return d});
}

d3.json('MonthlySalesbyCategory.json', function(error, data) {
  if (error) {
    console.error("Oh no! Something went wrong!");
  } else {
    ds = data;
    console.log(data);
  }

  buildLine();
  showTotals();
});
