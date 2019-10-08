const convict = require('convict');

const config = convict({
  projects: {
    github: {
      link: 'https://github.com/sreeise',
      imgSrc: 'images/github-color-circle.jpg',
      title: 'My work on GitHub',
      content:
        "There's a ton more i'm working on! Feel free to take a look at some of my projects.",
    },
    graph: {
      link: 'https://github.com/sreeise/graph-rs',
      title: 'graph-rs',
      content:
        // eslint-disable-next-line
        'Microsoft Graph API client written in the Rust programming language.\
          Provides integration with OneDrive, mail, user data, contacts, and more.',
    },
    divineCanine: {
      link: 'https://divinecaninellc.com',
      title: 'The Divine Canine',
      content:
        // eslint-disable-next-line
        'The Divine Canine is an awesome dog grooming shop in Inman South Carolina.\
          I designed their website and continue to help automate their business process and workflows.\
          They consider me as their personal IT administrator and developer.',
    },
    servo: {
      link: 'https://github.com/servo',
      title: 'Servo Open Source Contributor',
      content:
        'Servo is an experimental browser written in the Rust programming language',
    },
    firefox: {
      link:
        'https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=reeisesean%40gmail.com&from=2018-01-01&to=2019-01-01&group=when',
      title: 'Firefox Open Source Contributor',
      content:
        "Firefox is Mozilla's premier browser. My contributions to Firefox span multiple areas but most of my work focuses on the developer tools.",
    },
  },
  aboutMe: {
    development: {
      title: 'Development',
      content:
        'Software engineering is my passion. I love innovating new ideas and building creative applications.',
    },
    education: {
      title: 'Education',
      content: [
        'Bachelor of Science in Information Technology 2017 - 2019',
        'Associates of Arts in Religion 2012 - 2015',
        'Liberty University, Lynchburg, VA 24515',
      ],
    },
    faith: {
      title: 'Faith',
      content:
        // eslint-disable-next-line
        'I am a Christian that believes that Jesus Christ is the one and only true savior.\
         I also believe in loving each other just as Jesus taught and regardless of whether you\
         hold the same beliefs as me. Romans 12:10 says: "Be devoted to one another in love. Honor one another above yourselves." (NIV)',
    },
    openSource: {
      title: 'Open Source',
      content:
        // eslint-disable-next-line
        'I am a regular contributor to Mozilla. I started out contributing to Firefox. Now I mainly focus on\n\
          contributing to Servo, the experimental browser from Mozilla written in the Rust programming language,',
    },
  },
});

export default config;
