var colors = ["red", "green", "blue", "pink", "cyan"];
var num = 0;
function changeColor()
{
	var prop = document.body.style;
	var index = Math.floor(Math.random() * 5);
	prop.backgroundColor = colors[index];
}
function showNumber()
{
	num++;
	document.getElementById("num").innerHTML = num;
}