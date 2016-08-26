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

if (bio.skills && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var skills = $("#skills");
	bio.skills.forEach(function(skill) {
		skills.append(HTMLskills.replace("%data%", skill));
	})
}

$("#workExperience").append(HTMLworkStart);
var workEntryLast = $(".work-entry:last");
for (job in work.jobs) {
	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	workEntryLast.append(employer + title);
}
