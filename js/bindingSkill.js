function bindingSkills() {
    var source = document.getElementById("skill-template").innerHTML;
    var template = Handlebars.compile(source);

    var html5 = [{
        name: 'HTML',
        image: 'images/skills/html5.png'
    }, {
        name: 'Handlebars',
        image: 'images/skills/handlebars.png'
    }];
    var css3 = [{
        name: 'CSS',
        image: 'images/skills/css3.png'
    }, {
        name: 'SASS',
        image: 'images/skills/sass.png'
    }, {
        name: 'Bootstrap',
        image: 'images/skills/bootstrap.png'
    }, {
        name: 'Materialize',
        image: 'images/skills/materialize.png'
    }];
    var javascript = [{
        name: 'Javascript',
        image: 'images/skills/javascript.png'
    }, {
        name: 'jQuery',
        image: 'images/skills/jquery.png'
    }, {
        name: 'Angular',
        image: 'images/skills/angular.png'
    }, {
        name: 'Ionic',
        image: 'images/skills/ionic.png'
    }];
    var android = [{
        name: 'Android Studio',
        image: 'images/skills/androidstudio.png'
    }]
    var other = [{
        name: 'Github',
        image: 'images/skills/github.png'
    }, {
        name: 'Heroku',
        image: 'images/skills/heroku.png'
    }, {
        name: 'Photoshop',
        image: 'images/skills/photoshop.png'
    }];
    var backend = [{
        name: 'Java',
        image: 'images/skills/java.png'
    }, {
        name: 'NodeJS',
        image: 'images/skills/nodejs.png'
    }, {
        name: 'ExpressJS',
        image: 'images/skills/expressjs.png'
    }, {
        name: 'MySQL',
        image: 'images/skills/mysql.png'
    }, {
        name: 'MongoDB',
        image: 'images/skills/mongodb.png'
    }];
    var otherLanguage = [{
        name: 'C++',
        image: 'images/skills/cpp.png'
    }, {
        name: 'C#',
        image: 'images/skills/csharp.png'
    }];

    var skillSections = [
        [{
            name: 'HTML',
            skills: html5
        }, {
            name: 'CSS',
            skills: css3
        }, {
            name: 'Javascript',
            skills: javascript
        }, {
            name: 'Android',
            skills: android
        }],
        [{
            name: 'Backend',
            skills: backend
        }, {
            name: 'Other languages',
            skills: otherLanguage
        }],
        [{
            name: 'Other',
            skills: other
        }]
    ]
    var content = template({
        skillSections: skillSections
    });
    $('#handlebars-skill').html(content);
}