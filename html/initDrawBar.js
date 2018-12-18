function initDraw(dataset = [], rawData = [], width = 800, height = 400, svgID = "drawPanel")
{
    //在 body 里添加一个 SVG 画布
    let svg = d3.select("svg#"+svgID)
        .attr("width", width)
        .attr("height", height)
        .html("");

    //画布周边的空白
    const padding = {left:30, right:30, top:20, bottom:20};

    //x轴的比例尺
    let xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, width - padding.left - padding.right]);

    //y轴的比例尺
    var yScale = d3.scale.linear()
        .domain([-0.4,d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);

    //定义x轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    //定义y轴

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    //矩形之间的空白
    const rectPadding = 2;

    //添加矩形元素
    var rects = svg.selectAll(".MyRect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i) + rectPadding/2;
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("width", xScale.rangeBand() - rectPadding )
        .attr("height", function(d){
            return height - padding.top - padding.bottom - yScale(d);
        });

    //添加文字元素
    let texts = svg.selectAll(".MyText")
        .data(rawData)
        .enter()
        .append("text")
        .attr("class","MyText")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i) + rectPadding/2 - 10;
        } )
        .attr("y",function(d){
            return yScale(Math.log10(d) + 0.1);
        })
        .attr("dx",function(){
            return (xScale.rangeBand() - rectPadding)/2;
        })
        .attr("dy",function(d){
            return 20;
        })
        .text(function(d){
            return d;
        });

    //添加x轴
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis);

    //添加y轴
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);
}