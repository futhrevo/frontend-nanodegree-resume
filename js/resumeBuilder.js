// var formattedName = HTMLheaderName.replace("%data%","Rakesh Kalyankar");
// var formattedRole = HTMLheaderRole.replace("%data%", "Development Engineer");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
	"name" : "Rakesh Kalyankar",
	"role" : "Development Engineer",
	"contacts" : {
		"location" : "Bangalore - 37",
		"mobile" : "+91 9741732164",
		"email" : "k.rakeshlal@gmail.com",
		"github" : "futhrevo",
		"twitter" : "k_rakeshlal"
	},
	"picture" : "http://m.c.lnkd.licdn.com/mpr/pub/image-L4ursOkm2o2sVFhkJBJiUuZAhFjUjFXuKP5e8fxghzk21xGuL4uetqSmhwQC1SoRbN8q/rakesh-lal.jpg",
	"welcomeMessage" : "Amat Victoria Curam",
	"skills" : ["3GPP LTE WCDMA IRAT", "C","perl","front-end web development"]
};

var work ={
	"jobs" : [{
		"title" : "Engineer Staff I",
		"employer" : "Broadcom Communications",
		"datesWorked" : "2012 July-2014 August",
		"city" : "Bangalore",
		"description" : "UMTS to LTE IRAT and LTE FDD PHY"
	},{
		"title" : "Research Intern",
		"employer" : "GE Global Research",
		"datesWorked" : "2012 January - 2012 July",
		"city" : "Bangalore",
		"description" : "Modelling of defects in coaxial waveguides"
	}]
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
		"location" : "Tirupathi",
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
	}]
}

var projects = {
	"project" : [{
		"title" : "Model Based Classification of defects in coaxial cables",
		"description" : "Simulations using Finite Difference Time Domain(FDTD) approach are done in MATLAB to generate the reflectometry trace for a cable. Experiments are done on the cable with known defects using Microwave frequencies generated using VNA (Vector Network Analyzer) and dipole antennas. Simulations and experiments have shown that many known defects on the cable can be broadly classified based on the change in line parameters of the transmission line at the defect. A table of defects mapped to their effect on the line parameters is presented.",
		"dates" : "Jan 2012 - July 2012"
	},{}]
}

if (bio.skills.length != 0){
	$("#header").append(HTMLskillsStart);
	for(var skill in bio.skills)
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
}

for(var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var employers = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var titles = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	$(".work-entry:last").append(employers+titles);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].datesWorked));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].city));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

}
function logClicks(x, y){
	console.log("x-cord = " + x);
	console.log("y-cord = " + y);
}

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name){
	var names = name.split(" ");
	var lastName = names[1].toUpperCase();
	var firstName = names[0][0].toUpperCase() + names[0].slice(1);
	return (firstName +" "+lastName);
}
if(inName("sabastian thurn") === "Sabastian THURN"){
	console.log("success");
}else{
	console.log("failure");
}