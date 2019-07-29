const convict = require('convict');

const config = convict({
    portfolio: {
        mozilla: {
            link: "https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=reeisesean%40gmail.com&from=2018-01-01&to=2019-01-01&group=when",
            imgSrc: "images/Mozilla-logo-md.png",
            title: "My contributions to Mozilla",
        },
        github: {
            link: "https://github.com/sreeise",
            imgSrc: "images/github-color-circle.jpg",
            title: "My work on GitHub",
        },
        srSource: {
            link: "https://github.com/sreeise/sreeise-source",
            imgSrc: "images/sreeise-source.png",
            title: "The source code for this website. Built using React.",
        }
    },
    aboutMe: {
        hobbies: {
            title: "Hobbies",
            content: "My hobbies are programming an working on open source projects. I am a regular contributor to Mozilla.\
                    I started out contributing to Firefox. Now I mainly focus on contributing to Servo, the experimental\
                    browser from Mozilla written in the Rust programming language",
        },
        education: {
            title: "Education",
            content: "Bachelor of Science in Information Technology and an Associates of Arts in Religion from Liberty University",
        },
        faith: {
            title: "My Beliefs",
            content: "I am a Christian that believes that Jesus Christ is the one and only true savior.\
                      I also believe in loving each other just as Jesus taught and regardless of whether you\
                      hold the same beliefs as me. Romans 12:10 says: Be devoted to one another in love. Honor\
                      one another above yourselves.",
        }
    }
});

export default config;