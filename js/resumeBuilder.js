var bio = {
	'name': 'Jimmy Schwarzenberger',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '316-209-4526',
		'email': 'jgs2017@gmail.com',
		'github': 'Yojim6o',
		'blog': '',
		'twitter': '',
		'location': 'Wichita, Kansas'
	},
	'welcomeMessage': 'Experienced entrepreneur and financial consultant with a background in commercial lending and real estate investing, with a capability to effectively communicate business solutions to clients and partners.',
	'skills': [
		'Entrepreneurship', 'Front-End Web Development', 'Financial Consulting', 'Organizational Tools', 'HTML', 'CSS', 'JavaScript', 'jQuery'
	],
	'bioPic': 'images/profilepic.jpg'
};

var data = '%data%';
var $header = $('#header');

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$header.prepend(formattedRole);
	$header.prepend(formattedName);
}

bio.display();

var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
var contactInfo = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

$('#topContacts').append(contactInfo);
$('#footerContacts').append(contactInfo);

var formattedBioPic = HTMLbioPic.replace(data, bio.bioPic);
$header.append(formattedBioPic);

var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
$header.append(formattedWelcome);

var education = {
	'schools': [
		{
			'name': 'Ad Astra Academy - HTML, CSS, JavaScript, jQuery, Git',
			'city': 'Wichita, KS',
			'degree': 'HTML, CSS, JavaScript, jQuery, Git',
			'major': 'CS Workshops',
			'dates': 2015,
			'url': 'https://adastraacademy.com'
		},
		{
			'name': 'Newman University - Bachelors',
			'city': 'Wichita, KS',
			'degree': 'BA',
			'major': ['English'],
			'dates': 2007,
			'url': 'https://newmanu.edu'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'http://www.udacity.com/ourse/front-end-web-developer-nanodegree--nd001'
		}
	]
};

var work = {
	'jobs': [
		{
			'employer': 'Credit Union of America',
			'title': 'Commercial Services Specialist',
			'dates': 'January 2007 - Present',
			'location': 'Wichita, KS',
			'description': "Assistant relationship lender for the company's commercial loan portfolio. Administrator and credit analyst of all commercial credit facilities."
		},
		{
			'employer': 'S Props LLC',
			'title': 'Managing Member',
			'dates': 'April 2009 - Present',
			'location': 'Wichita, KS',
			'description': 'I began investing in rental properties as soon as I finished college, and created a business that specializes in multi-unit residential rental properties in the Wichita, KS area.  I regularly engage in negotiations with fellow investors to create scenarios that benefit all parties involved. During my startup phase, I operated the rental units myself by interviewing prospective tenants and managing the day-to-day maintenance requests.  However, I’ve since grown the business to self-sustain by hiring out the management to trusted entities who I’ve personally developed a working relationship with.'
		}
	]
};

var projects = {
	'projects': [
		{
			'title': 'Portfolio site',
			'dates': '2015',
			'description': 'A website of my work.',
			'images': [
				'images/design-projects.jpg'
			]
		}
	]
};

if(bio.skills.length) {
	$header.append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
		$('#skills').append(formattedSkill);
	}
}

work.display = function() {
	for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

work.display();

projects.display = function() {
	for (var project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
	
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}		
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
		$('.education-entry:last').append(formattedSchoolName);
		var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].city);
		$('.education-entry:last').append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
		$('.education-entry:last').append(formattedMajor);
	}
}

education.displayOnlineClasses = function() {
	$('.education-entry:last').after(HTMLonlineClasses);
	for (var i = 0; i < education.onlineCourses.length; i++) {
		$('#education').append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
		$('.education-entry:last').append(formattedTitle);
		var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
		$('.education-entry:last').append(formattedURL);
	}
}

education.display();
education.displayOnlineClasses();

function inName(name) {
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + ' ' + name[1];
}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
