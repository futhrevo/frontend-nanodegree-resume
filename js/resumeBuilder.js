var formattedName = HTMLheaderName.replace("%data%","Rakesh Kalyankar");
var formattedRole = HTMLheaderRole.replace("%data%", "Development Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
