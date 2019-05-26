// JavaScript Document

function image_scroll_stop()
{
	document.getElementById('scroll_images').stop();
}

function image_scroll_start()
{
	document.getElementById('scroll_images').start();
}

function news_scroll_stop()
{
	document.getElementById('scroll_news').stop();
}

function news_scroll_start()
{
	document.getElementById('scroll_news').start();
}

function formvalidation()
{
	var x=document.getElementById("name").value;
	var pattern=/^[a-zA-Z ]{3,30}$/;
	if(!pattern.test(x))
	{
		alert("Enter a valid Name");
		return false;
	}
	
	var y=document.getElementById("phone").value;
	var pattern=/^[0-9]{10,10}$/;
	if(!pattern.test(y))
	{
		alert("Enter a valid mobile number");
	}
}