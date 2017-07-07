var bio = {
    "name": "Kevin Brennan",
    "role": "Uix Designer // Creative Coder",
    "contacts": {
        "mobile": "778-681-0501",
        "email": "Kevinppb@gmail.com",
        "github": "Kbloop",
        "twitter": "@BrennansBread",
        "location": "Vancouver, British Columbia"
    },
    "welcomeMesage": "Hey, lets work together!",
    "skills": ["creative coder", "front-end dev", "uix design"],
    "biopic": "https://www.fillmurray.com/200/200",
    "display": function () {
        // TODO display the data from bio.
        // Bio information
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);

        // Append to the page.
        // Bio info
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(formattedPicture, HTMLskillsStart);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#main").append(internationalizeButton);
        $("#mapDiv").append(googleMap);

        bio.skills.forEach(function replace(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            if(bio.skills.length > 0){
                $("#header").append(formattedSkill);
            }
        });
    }
};
var education = {
    "schools": [
    {
        "name": "Dublin City University",
        "location": "Dublin, Ireland",
        "degree": "Bsc. Multimedia",
        "majors": ["Web Design", "Photography", "Animation"],
        'dates': "2013-2016",
        'url': "http://www.Dcu.ie"
    }
    ],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "May '17-",
        "url": "Udacity.com"
    }],
    display: function () {
        // TODO display the data from education.
        // Education info
        education.schools.forEach(function addSchoolInfo(school) {
            var formattedSchoolStart = HTMLschoolStart;
            $("#education").append(formattedSchoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
        // Online classes
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function addCoursesInfo(course) {
            $("#education").append(HTMLschoolStart);
            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);
            var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedCourseDates);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedCourseURL);
        });
    }
};

var work = {
    "jobs": [
        {
        "employer": "AnalysisWorks",
        "title": "Uix Intern",
        "location": "Vancouver, B.C.",
        "dates": "Jan '17 - May '17",
        "description": "Performed in an agile team blah"
    },
    {
        "employer": "AnalysisWorks",
        "title": "Uix Intern",
        "location": "Vancouver, B.C.",
        "dates": "Jan '17 - May '17",
        "description": "Performed in an agile team blah"
    }
    ],
    "display": function () {
        // TODO display the data from work.
        // Work info
        var jobs = work.jobs;
        // for(job in work.jobs){
        //     if(jobs.hasOwnProperty(job)){
        //         var formattedWorkStart = HTMLworkStart;
        //         $("#workExperience").append(formattedWorkStart);
        //         var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
        //         var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
        //         $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
        //         var formattedWorkDates = HTMLworkDates.replace("%data%", jobs[job].dates);
        //         $(".work-entry:last").append(formattedWorkDates);
        //         var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
        //         $(".work-entry:last").append(formattedWorkLocation);
        //         var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
        //         $(".work-entry:last").append(formattedWorkDescription);
        //     }
        // }
        work.jobs.forEach(function addWorkInfo(job) {
            var formattedWorkStart = HTMLworkStart;
            $("#workExperience").append(formattedWorkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            $(".work-entry:last").append(formattedWorkEmployer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedWorkTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
        });

    }
};

var projects = {
    "projects": [
        {
        "title": "stringer bell",
        "dates": "may-12-17",
        "description": "blah blah blah v blah blah blah blah",
        "images": ["https://www.fillmurray.com/200/200"]
    },
    {
        "title": "stringer bell",
        "dates": "may-12-17",
        "description": "blah blah blah v blah blah blah blah",
        "images": ["https://www.fillmurray.com/200/200"]

    }
    ]
};
 projects.display = function() {
        // Project info
        projects.projects.forEach(function addProjectInfo(project) {
            var formattedProjectStart = HTMLprojectStart;
            $("#projects").append(formattedProjectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);
            project.images.forEach(function addImages(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").prepend(formattedProjectImage);
            });
        });
    };

function inName() {
    var name = bio.name.trim().split(" ");
    var firstName = name[0][0].toUpperCase() + name[0].substring(1).toLowerCase();
    var secondName = name[1].toUpperCase();

    return firstName+" "+secondName;
}
// run program
bio.display();
work.display();
projects.display();
education.display();