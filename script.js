var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var XHRbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var jQuerybtn = $("#jquery");
var axiosbtn = document.querySelector("#axios");
var quoteText = document.querySelector("#quote");

XHRbtn.addEventListener("click", function() {
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4 && XHR.status == 200) {
			var quote = JSON.parse(XHR.responseText)[0];
			quoteText.innerText = quote;
		}
	};

	XHR.open("GET", url);
	XHR.send();
});

fetchbtn.addEventListener("click", function() {
	fetch(url)
		.then(function(data) {
			return data.json();
		})
		.then(function(data) {
			var quote = data[0];
			quoteText.innerText = quote;
		});
});

jQuerybtn.click(function() {
	$.get(url).done(function(data) {
		var quote = data[0];
		quoteText.innerText = quote;
	});
});

axiosbtn.addEventListener("click", function() {
	axios.get(url).then(function(data) {
		var quote = data.data[0];
		quoteText.innerText = quote;
	});
});
