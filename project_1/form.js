function verifyPassword()
{
	var entered = document.getElementById("pwd").value;
	var to_verify = document.getElementById("verifypwd").value;
	if(entered == to_verify)
		document.getElementById("btn").style.color = rgb(0, 255, 0);
	else
		document.getElementById("btn").style.color = rgb(255, 0, 0);
}