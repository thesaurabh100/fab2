var express=require('express');
var app=express();

var productController=function(req,res)
{
	console.log("calling rest api");
	var products=[
	{name:'pepsi',quantity:50,brand:'colddrink'},
	{name:'coca-cola',quantity:60,brand:'colddrink'},
	{name:'lays',quantity:10,product:'chips',category:'chips'},
	{name:'mobiles',quantity:15,brand:'M I',category:'mobiles'},
	{name:'laptops',quantity:400,brand:'Asus',category:'Electronis'},
	{name:'sherlock holmes',quantity:150,product:'books',category:'books'},
	{name:'G-Shock',quantity:10,brand:'Titan',category:'watches'},
	{name:'Shirts',quantity:60,brand:'raymond'},
	];
	
	res.send(products);
};
app.get("/products",productController);

var server=app.listen(8089,function()
{
	var host=server.address().address
	var port=server.address().port
	
	console.log("running at local host 8089",server,port)
	
	
})