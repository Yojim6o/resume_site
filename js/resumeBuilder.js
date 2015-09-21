var bio = {
	'name': 'Jimmy Schwarzenberger',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '316-209-4526',
		'email': 'jgs2017@gmail.com',
		'github': 'Yojim6o',
		'blog': 'yojimbo.space',
		'twitter': 'Yojim6o',
		'location': 'Wichita, Kansas'
	},
	'welcomeMessage': 'An experienced entrepreneur and financial advisor quickly building a software development skillset. Nine year background in finance and real estate investing and an established capability to communicate simple solutions to clients, co-workers, and business partners. Primarily interested in utilizing these skills in the tech industry and working with other creative engineers to build elegant solutions for formerly difficult processes.',
	'skills': [
		'JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Git', 'Github', 'ngrok', 'commercial and consumer banking', 'project management', 'leadership', 'business writing', 'process improvement', 'start-ups'
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
var contactInfo = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation;

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
			'url': 'http://adastraacademy.com'
		},
		{
			'name': 'Newman University - Bachelors',
			'city': 'Wichita, KS',
			'degree': 'BA',
			'major': ['Major: English'],
			'dates': 2007,
			'url': 'https://newmanu.edu'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]
};

var work = {
	'jobs': [
		{
			'employer': 'S Props LLC',
			'title': 'Managing Member',
			'dates': 'April 2009 - Present',
			'location': 'Wichita, KS',
			'description': '\u2022 Created a company that owns and operates 7 rental units in the Wichita KS area.<br>\u2022 Maintain rental operations through communication with local property management.<br>\u2022 Provide cost-effective options for Wichita residents while supplying high quality living conditions.<br>\u2022 Frame-working an application that would assist investors in real estate auctions.<br>\u2022 Working with local contractors on a system to streamline repair estimates on homes.'
		},
		{
			'employer': 'Credit Union of America',
			'title': 'Commercial Services Specialist',
			'dates': 'January 2007 - Present',
			'location': 'Wichita, KS',
			'description': "\u2022 Outlined the scope of work and wrote procedures for the commercial loan department.<br>\u2022 Assumed $10 million in loan assets from a merger credit union while assessing and monitoring each loan's risk level.<br>\u2022 Managed projects for improved business deposit account opening.<br>\u2022 Trained front-line staff on commercial banking products."
		}
	]
};

var projects = {
	'projects': [
		{
			'title': 'Web Optimization',
			'dates': '2015',
			'description': "For this project I was tasked with increasing website speed both in load time and overall function.  I used several new tools including browser developer tools, PageSpeed Insights, localhosting and ngrok.",
			'images': [
				'images/webop.png'
			]
		},
		{
			'title': 'Frogger',
			'dates': '2015',
			'description': "This was a little fun game I made using Udacity's course material. I made a few unique features. Enemies randomize their speed and which lane they appear in. I also implemented a leveling system by adding a new enemy every time the player reaches the water.",
			'images': [
				'images/froggershot.png'
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
		var schoolNameLink = '<a target="_blank" href="'+ education.schools[school].url + '">'+ education.schools[school].name + '</a>';
		var formattedSchoolName = HTMLschoolName.replace(data, schoolNameLink);
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
		var courseNameLink = '<a target="_blank" href="'+ education.onlineCourses[i].url + '">'+ education.onlineCourses[i].school + " - " + education.onlineCourses[i].title + '</a>';
		var formattedTitle = HTMLonlineTitle.replace(data, courseNameLink);
		$('.education-entry:last').append(formattedTitle);
		var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append("<br>");
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

//$('#main').append(internationalizeButton);

//$('#mapDiv').append(googleMap);
