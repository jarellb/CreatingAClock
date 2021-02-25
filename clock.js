$(document).ready( function() {

	function displayTime() {

		var currentTime = new Date();

		var day = currentTime.getDay();

		var hours = currentTime.getHours();

		var minutes = currentTime.getMinutes();

		var seconds = currentTime.getSeconds();

		var meridiem = "AM";

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		if (hours < 10) {
			hours = "0" + hours;
		}

		// Assigns the body element in html/css to the variable "bodyElement"
		var bodyElement = document.getElementsByTagName("BODY")[0];

		// When the clock hits 9:45 AM on a Tuesday or Thursday, the background color turns red until 11:10 AM, which is when period 4 is
		if ((day == 2 && minutes > 45 && hours == 9 && meridiem == "AM") || (day == 4 && minutes > 45 && hours == 9 && meridiem == "AM")
			|| (day == 2 && hours == 10 && meridiem == "AM") || (day == 4 && hours == 10 && meridiem == "AM")
			|| (day == 2 && minutes < 10 && hours == 11 && meridiem == "AM") || (day == 4 && minutes < 10 && hours == 11 && meridiem == "AM")) {
			bodyElement.style.backgroundColor = "red";
		} else {
			bodyElement.style.backgroundColor = "#80d4ea";
		}

		// Since currentTime.getDay() retrieves a number rather than a day, this switch converts those numbers to their corresponding days
		switch (day) {
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";
				break;
			case 3:
				day = "Wednesday";
				break;
			case 4:
				day = "Thursday";
				break;
			case 5:
				day = "Friday";
				break;
			case 6:
				day = "Saturday";
				break;
			case 7:
				day = "Sunday";
				break;
		}

		var clockDiv = document.getElementById('clock');

		clockDiv.innerText = day + ", " + hours + ":" + minutes + ":" + seconds + " " + meridiem;

	}

	displayTime();

	setInterval(displayTime, 1000);

});