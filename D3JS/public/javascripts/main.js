var list = function draw(err, data) {
	d3.select("body")
		.append("ul")
		.selectAll("li")
		.data(data)
		.enter()
		.append('li')
		.text(function(d) {
			return "year : " + d.year + ", " + "sale: " + d.sale;
		});
};
var barChart = function barChart(err, data) {
	d3.select("body")
		.append("div").attr("class", "barChart")
		.selectAll(".bar")
		.data(data)
		.enter()
		.append("div").attr("class", "bar")
		.style("width", function(d) {
			return d.sale + "px"
		})
		.style("outline", "1px solid black")
		.text(function(d) {
			return d.sale
		});
};
var pointAndLine = function point(err, data) {

	var width = 1000,
		height = 500,
		margin = 50;
	d3.select('body')
		.append('svg')
		.attr('class', 'chartArea')
		.attr('width', width)
		.attr('height', height)
		.selectAll('circle')
		.attr('class', 'point')
		.attr('fill', 'red')
		.data(data)
		.enter()
		.append('circle')
		.attr('class', 'point')
		.attr('fill', 'red');

	var xScaleLimit = d3.extent(data, function(d) { // returns [min,max]
		return d.year;
	});

	var yScaleLimit = d3.extent(data, function(d) { // returns [min,max]
		return d.sale;
	});

	var xScale = d3.scale.linear()
		.range([margin, width - margin])
		.domain([2000, 2010]);

	var yScale = d3.scale.linear()
		.range([height - margin, margin])
		.domain([0, 100]);

	var xAxis = d3.svg.axis().scale(xScale);
	var yAxis = d3.svg.axis().scale(yScale)
		.orient('left');

	d3.select('svg.chartArea')
		.append('g')
		.attr('class', 'x axis')
		.attr('transform', "translate(0," + (height - margin) + ")")
		.call(xAxis);

	d3.select('svg.chartArea')
		.append('g')
		.attr('class', 'y axis')
		.attr('transform', "translate(" + margin + ",0)")
		.call(yAxis);

	d3.select('.x.axis')
		.append('text')
		.text('Year')
		.attr('class', 'heading')
		.attr('x', (width / 2))
		.attr('y', margin);

	d3.select('.y.axis')
		.append('text')
		.text('Sale in %')
		.attr('class', 'heading')
		.attr("transform", "rotate (-90, -30, 0) translate(-300)");

	d3.selectAll('circle.point')
		.attr('cx', function(d) {
			return xScale(d.year);
		})
		.attr('cy', function(d) {
			return yScale(d.sale);
		})
		.attr('r', 5);

	var lineGen = d3.svg.line()
		.x(function(d) {
			return xScale(d.year)
		})
		.y(function(d) {
			return yScale(d.sale)
		})
		.interpolate('basis');
	var drawLineChart = function(data) {
		d3.select('svg.chartArea')
		.append('path')
		.attr('fill','none')
		.attr('stroke','blue')
		.attr('stroke-width','2')
		.attr('d', lineGen(data));
	};
	drawLineChart(data);
};



//d3.json("/data", list);
// d3.json("/data", barChart);
d3.json("/data", pointAndLine);