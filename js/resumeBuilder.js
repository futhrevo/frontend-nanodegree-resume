

var bio = {
	"name" : "Rakesh Kalyankar",
	"role" : "Development Engineer",
	"contacts" : {
		"location" : "Bangalore",
		"mobile" : "+91 9741732164",
		"email" : "k.rakeshlal@gmail.com",
		"github" : "futhrevo",
		"twitter" : "k_rakeshlal"
	},
	"picture" : "http://m.c.lnkd.licdn.com/mpr/pub/image-L4ursOkm2o2sVFhkJBJiUuZAhFjUjFXuKP5e8fxghzk21xGuL4uetqSmhwQC1SoRbN8q/rakesh-lal.jpg",
	"welcomeMessage" : "Amat Victoria Curam",
	"skills" : ["Awesomeness","saving the universe","3GPP LTE WCDMA IRAT", "C","perl","front-end web development"],
	"display" : function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",this.name));
		
		$("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%",this.picture));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",this.welcomeMessage));
		if (bio.skills.length != 0){
			$("#header").append(HTMLskillsStart);
			for(var skill in bio.skills)
				$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
		}
	}
};

var work ={
	"jobs" : [{
		"title" : "Engineer Staff I",
		"employer" : "Broadcom Communications",
		"datesWorked" : "2012 July-2014 August",
		"location" : "Bangalore",
		"description" : "UMTS to LTE IRAT and LTE FDD PHY"
	},{
		"title" : "Research Intern",
		"employer" : "GE Global Research",
		"datesWorked" : "2012 January - 2012 July",
		"location" : "Bangalore",
		"description" : "Modelling of defects in coaxial waveguides"
	}],
	"display" : function(){
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var employers = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var titles = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			$(".work-entry:last").append(employers+titles);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].datesWorked));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

		}
	}
}

var education ={
	"schools" : [{
		"name" : "BITS Pilani",
		"location" : "Pilani",
		"majors" : ["Communications"],
		"degree" : "Masters",
		"graduation" : 2012,
		"url" : "http://www.bits-pilani.ac.in/pilani/"

	},{
		"name" : "JNTU Anantapur",
		"location" : "Tirupati",
		"majors" : ["ECE"],
		"degree" : "Bachelors",
		"graduation" : 2010,
		"url" : "https://jntua.ac.in/"
	}],
	"onlineCourses" : [{
		"title" : "Javascript",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/c-ud804/"
	},{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud304"
	}],
	"display" : function(){
		for(var school in this.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",this.schools[school].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",this.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",this.schools[school].graduation));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",this.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",this.schools[school].majors));
			//$(".education-entry:last").append(HTMLschoolURL.replace("%data%",this.schools[school].url));
		}
		$("#education").append(HTMLonlineClasses);
		for(var course in this.onlineCourses){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",this.onlineCourses[course].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",this.onlineCourses[course].url));
			
		}
	}
}

var projects = {
	"project" : [{
		"title" : "Model Based Classification of defects in coaxial cables",
		"description" : "Simulations using Finite Difference Time Domain(FDTD) approach are done in MATLAB to generate the reflectometry trace for a cable. Experiments are done on the cable with known defects using Microwave frequencies generated using VNA (Vector Network Analyzer) and dipole antennas. Simulations and experiments have shown that many known defects on the cable can be broadly classified based on the change in line parameters of the transmission line at the defect. A table of defects mapped to their effect on the line parameters is presented.",
		"dates" : "January 2012 - July 2012"
	},{
		"title" : "IRAT feature verification",
		"description" : "WCDMA to LTE IRAT Handover, redirection and reselection",
		"dates" : "July 2012 - March 2014"
	},{
		"title" : "LTE FDD PHY verification",
		"description" : "DRX, SPS and TTI Bundling",
		"dates" : "March 2014 - July 2014"
	}],
	"display" : function(){
		for(var proj in this.project){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",this.project[proj].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",this.project[proj].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",this.project[proj].description));
		}
	}
}

function logClicks(x, y){
	console.log("x-cord = " + x+"  y-cord = " + y);
}

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);


function inName(_name){
	var name;
	if(_name){
		name = _name;
	}else{
		name = bio.name;
	}
	var names = name.split(" ");
	var lastName = names[1].toUpperCase();
	var firstName = names[0][0].toUpperCase() + names[0].slice(1);
	return (firstName +" "+lastName);
}

function displayFooter() {
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }
}

bio.display();
projects.display();
education.display();
work.display();
displayFooter();
$("#mapDiv").append(googleMap);
