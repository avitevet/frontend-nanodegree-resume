/* eslint-env browser, jquery */
/* global HTMLskills, HTMLskillsStart, HTMLworkStart, HTMLworkEmployer, HTMLworkTitle
HTMLworkDates, HTMLworkDescription, HTMLworkLocation, internationalizeButton,
HTMLheaderRole, HTMLheaderName, HTMLmobile, HTMLemail, HTMLlocation, HTMLgithub,
HTMLtwitter */

/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	"name": "Avi Tevet",
	"role": "Software Developer",
	"welcomeMessage": "Senior Developer looking to be amazing with other amazing people",
	"biopic": "images/fry.jpg",
	"contacts": {
		"mobile": "503-490-2458",
		"location": "Portland, OR",
		"email": "linkedin@avitevet.com",
		"github": "avitevet",
		"twitter": null
	},
	"skills": [
		"C++", "javascript", "being amazing", "cool stuff"
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Intel Corp",
			"title" : "Software Developer",
			"location" : "Hillsboro, OR",
			"dates" : "Aug 2001 - Apr 2016",
			"description" : "Be a cool guy"
		},
		{
			"employer" : "Portland Parks and Recreation",
			"title" : "Swim Instructor",
			"location" : "Portland, OR",
			"dates" : "Summer 1993 - Summer 1997",
			"description" : "Teach kids and adults to swim"
		},
		{
			"employer" : "Manpower",
			"title" : "Assembly line worker",
			"location" : "Beaverton, OR",
			"dates" : "Summer 1998",
			"description" : "Inflate airsoles at Nike, Inc."
		}
	]
};

var projects = {
	"projects" : [
			{
				"title" : "POSIDIVS",
				"dates" : "Recently",
				"description" : "Massively parallel application for testing division and square root routines in new Xeon Phi processors",
				"images" : ["images/fry.jpg"]
			},
			{
				"title" : "Fmunch",
				"dates" : "Feb 2016 - Mar 2016",
				"description" : "Develop script to produce test routines for exposing manufacturing defects during post-manufacturing testing",
				"images" : ["images/fry.jpg"]
			},
			{
				"title" : "arisim",
				"dates" : "Apr 2009 - Apr 2016",
				"description" : "Provide simulation for new arithmetic instructions, and new implementations of existing instructions, to support pre-silicon     validation of new processor designs",
				"images" : ["images/fry.jpg"]
			}

	]
};

var education = {
	"schools" : [
		{
			"name" : "CWRU",
			"location" : "Cleveland, OH",
      "degree" : "Bachelor of Science",
			"degree dates" : "1997 - 2001",
			"url" : "case.edu",
			"majors" : [
				"Computer Engineering"
			]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Senior Web Developer Nanodegree",
			"school" : "udacity.com",
			"dates" : "July 2016 - current",
			"url" : "udacity.com"
		},
		{
			"title" : "Data structures and algorithms",
			"school" : "Coursera",
			"dates" : "July 2016 - current",
			"url" : "coursera.com"
		}
	]
};

function template(templateStr, data) {
  return templateStr.replace("%data%", data);
}

bio.display = function() {
  var header = $("#header");
  header.prepend(template(HTMLbioPic, bio.biopic));
  header.prepend(template(HTMLheaderRole, bio.role));
  header.prepend(template(HTMLheaderName, bio.name));

  var topContacts = $("#topContacts");
  topContacts.append(template(HTMLmobile, bio.contacts.mobile));
  topContacts.append(template(HTMLemail, bio.contacts.email));
  topContacts.append(template(HTMLlocation, bio.contacts.location));
  topContacts.append(template(HTMLgithub, bio.contacts.github));
  if (bio.contacts.twitter) {
    topContacts.append(template(HTMLtwitter, bio.contacts.twitter));
  }

  header.append(template(HTMLwelcomeMsg, bio.welcomeMessage));
  if (bio.skills && bio.skills.length > 0) {
  	header.append(HTMLskillsStart);
  	var skills = $("#skills");
  	bio.skills.forEach(function(skill) {
  		skills.append(HTMLskills.replace("%data%", skill));
  	})
  }
}

work.display = function() {
  $("#workExperience").append(HTMLworkStart);
  var workEntryLast = $(".work-entry:last");
  for (var j in work.jobs) {
    var job = work.jobs[j];
    var employer = HTMLworkEmployer.replace("%data%", job.employer);
    var title = HTMLworkTitle.replace("%data%", job.title);
    var loc = HTMLworkLocation.replace("%data%", job.location);
    var dates = HTMLworkDates.replace("%data%", job.dates);
    var description = HTMLworkDescription.replace("%data%", job.description);
    workEntryLast.append(employer + title + loc + dates + description);
  }
}

projects.display = function() {
  var projsroot = $("#projects");
  for (var pIndex in projects.projects) {
    var p = projects.projects[pIndex];
    var projroot = projsroot.append(HTMLprojectStart).children().last();
    projroot.append(template(HTMLprojectTitle, p.title));
    projroot.append(template(HTMLprojectDates, p.dates));
    projroot.append(template(HTMLprojectDescription, p.description));
    p.images.forEach(function(img) {
      projroot.append(template(HTMLprojectImage, img));
    });
  }
}

education.display = function() {
  var eduSection = $("#education");
  education.schools.forEach(function(school) {
    var schoolSection = eduSection.append(HTMLschoolStart).children().last();
    schoolSection.append(HTMLschoolName.replace("%data%", school.name) +
      HTMLschoolDegree.replace("%data%", school.degree));
    schoolSection.append(template(HTMLschoolDates, school["degree dates"]));
    schoolSection.append(template(HTMLschoolLocation, school.location));
    school.majors.forEach(function(major) {
      schoolSection.append(template(HTMLschoolMajor, major));
    });
  });

  eduSection.append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course) {
    // title, school, dates, url
    var courseSection = eduSection.append(HTMLschoolStart).children().last();
    courseSection.append(HTMLonlineTitle.replace("%data%", course.title) +
      HTMLonlineSchool.replace("%data%", course.school));
    courseSection.append(template(HTMLonlineDates, course.dates));
    courseSection.append(template(HTMLonlineURL, course.url));
  });
}

bio.display();
work.display();
projects.display();
education.display();

var main = $("#main");
//main.append(internationalizeButton);
$("#mapDiv").append(googleMap);


function inName(fullname) {
  var parts = fullname.split(/\s+/);
  parts[0] = parts[0][0].toUpperCase() + parts[0].slice(1);
  parts[1] = parts[1].toUpperCase();
  return parts.join(" ");
}
