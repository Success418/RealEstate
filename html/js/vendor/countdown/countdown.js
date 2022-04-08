$(document).on('ready', function() {
		
		
		var counter = {

		// SET MONTH
		// ---------
		// SET MONTH : STRING[option]
		//
		// OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

		setMonth: 'October',



		// SET DAY
		// -------
		// SET DAY : INTEGER[ 1 - 31 ]

		setDay: 1,



		// SET YEAR
		// --------
		// SET YEAR : INTEGER

		setYear: 2020
	}

		
	var Month = counter.setMonth;
	var Day = counter.setDay;
	var Year = counter.setYear;
	var target_date = new Date(Month +','+ Day +','+ Year).getTime();
	 
	var days, hours, minutes, seconds;
	 
	var countdownDays = document.getElementById("days");
	var countdownHours = document.getElementById("hours");
	var countdownMinutes = document.getElementById("minutes");
	var countdownSeconds = document.getElementById("seconds");

	setInterval(function () {
	 
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;

		days = parseInt(seconds_left / 86400);
		seconds_left = seconds_left % 86400;

		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;

		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);


		days = (String(days).length >= 2) ? days : '0' + days;
		hours = (String(hours).length >= 2) ? hours : '0' + hours;
		minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
		seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

		countdownDays.innerHTML = days;
		countdownHours.innerHTML = hours;
		countdownMinutes.innerHTML = minutes;
		countdownSeconds.innerHTML = seconds;

	 
	}, 1000);
	
	});