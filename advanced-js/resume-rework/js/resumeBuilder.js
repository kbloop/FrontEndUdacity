var model = {
    bio: {
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
        "biopic": "https://www.fillmurray.com/200/200"
    },
    education: {
        "schools": [{
            "name": "Dublin City University",
            "location": "Dublin, Ireland",
            "degree": "Bsc. Multimedia",
            "majors": ["Web Design", "Photography", "Animation"],
            'dates': "2013-2016",
            'url': "http://www.Dcu.ie"
        }],
        "onlineCourses": [{
            "title": "Front End Developer",
            "school": "Udacity",
            "dates": "May '17-",
            "url": "Udacity.com"
        }]
    },
    "jobs": [{
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
    "projects": [{
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

var controller = {
    init: function() {
        view.bio.init();
        view.education.init();
        view.projects.init();
        view.projects.display();
        view.work.display();
    },
    getData: function () {
        return model;
    },
    getFormattedName: function() {
    var name = model.bio.name.trim().split(" ");
    var firstName = name[0][0].toUpperCase() + name[0].substring(1).toLowerCase();
    var secondName = name[1].toUpperCase();
    return firstName + " " + secondName;
    }
};

var view = {
    bio: {
        "init": function () {
            this.bio = controller.getData().bio;
            this.skills = this.bio.skills;
            this.formattedName = HTMLheaderName.replace("%data%", this.bio.name);
            this.formattedRole = HTMLheaderRole.replace("%data%", this.bio.role);
            this.formattedLocation = HTMLlocation.replace("%data%", this.bio.contacts.location);
            this.formattedMobile = HTMLmobile.replace("%data%", this.bio.contacts.mobile);
            this.formattedEmail = HTMLemail.replace("%data%", this.bio.contacts.email);
            this.formattedGithub = HTMLgithub.replace("%data%", this.bio.contacts.github);
            this.formattedPicture = HTMLbioPic.replace("%data%", this.bio.biopic);
            view.bio.display();
        },
        "display": function () {
            // Bio info
            $("#header").prepend(this.formattedName, this.formattedRole);
            $("#header").append(this.formattedPicture, HTMLskillsStart);
            $("#topContacts, #footerContacts").append(this.formattedMobile, this.formattedEmail, this.formattedGithub, this.formattedLocation);
            $("#main").append(internationalizeButton);
            $("#mapDiv").append(googleMap);
            this.skills.forEach(function replace(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                if (this.skills > 0) {
                    $("#header").append(formattedSkill);
                }
            });
        }
    },
    education: {
        init: function () {
            this.education = controller.getData().education;
        },
        display: function () {
            // Append the  classes to the page
            $("#education").append(HTMLonlineClasses);
            this.education.schools.forEach(function addSchoolInfo(school) {
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
            // Append the online courses to the page
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
    },
    work: {
        "display": function () {
            // TODO display the data from work.
            // Work info
            var jobs = controller.getData();
            jobs.jobs.forEach(function addWorkInfo(job) {
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
    },
    projects: {
        init: function() {
            this.projects = controller.getData();
        },
        display : function () {
            // Project info

            this.projects.projects.forEach(function addProjectInfo(project) {
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
        }
    }
};

controller.init();