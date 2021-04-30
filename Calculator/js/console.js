var switchrate;
function getRate(rate1,rate2){
fetch(`https://api.exchangerate-api.com/v4/latest/${rate1}`).then(res=>res.json()).then(data=>
{
	const rate=data.rates[rate2];
	switchrate=rate;
	console.log(switchrate);
	document.getElementById("money2").value=switchrate*document.getElementById("money1").value;
	
});return rate;
}