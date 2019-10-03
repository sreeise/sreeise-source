import React from 'react';
import './css/normalize.css';
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import config from './config';
import NavBar from './components/Navbar';
import history from './utils/history';
import { Router, Route } from 'react-router-dom';
import Analysis from './components/assets/undraw_predictive_analytics_kf9n.svg';
import Analytics from './components/assets/undraw_Business_analytics_64el.svg';
import Development from './components/assets/undraw_development_ouy3.svg';
import FriendShip from './components/assets/undraw_friendship_mni7.svg';
import OpenSource from './components/assets/undraw_open_source_1qxw.svg';
import VersionControl from './components/assets/undraw_version_control_9bpv.svg';
import DivineCanine from './components/assets/divinecanine.png';
import Firefox from './components/assets/firefox.jpg';
import Servo from './components/assets/servo.png';
import GitHub from './components/assets/github-color-circle.jpg';
import DetailSection, { DetailsLinkSection } from './components/DetailSection';
import ScrollToTop from './utils/ScrollToTop';
import ConsentNotification from './components/ConsentNotification';

function Projects() {
  const projects = config.get('projects');

  return (
    <div>
      <div
        className={'container'}
        style={{ marginTop: '5em', marginBottom: '10em', textAlign: 'center' }}
      >
        <header className="is-centered">
          <h1 className="title is-spaced has-text-weight-bold is-3">
            What I've Been Working On
          </h1>
        </header>
      </div>

      <DetailsLinkSection
        image={VersionControl}
        alt={'Version Control'}
        title={projects.graph.title}
        subtitle={projects.graph.content}
        link={projects.graph.link}
        button={
          <span>
            View The Repository <i className="fab fa-github-square"></i>
          </span>
        }
      />

      <DetailsLinkSection
        image={DivineCanine}
        alt={'The Divine Canine Logo'}
        title={projects.divineCanine.title}
        subtitle={projects.divineCanine.content}
        link={projects.divineCanine.link}
        button={<span>Visit Their Website</span>}
      />

      <DetailsLinkSection
        image={Servo}
        alt={'Servo Browser Logo'}
        title={projects.servo.title}
        subtitle={projects.servo.content}
        link={projects.servo.link}
        button={
          <span>
            See The Repository <i className="fab fa-github-square"></i>
          </span>
        }
      />

      <DetailsLinkSection
        image={Firefox}
        alt={'Firefox Browser Logo'}
        title={projects.firefox.title}
        subtitle={projects.firefox.content}
        link={projects.firefox.link}
        button={<span>View My Contributions</span>}
      />

      <DetailsLinkSection
        image={GitHub}
        alt={'GitHub Logo'}
        title={projects.github.title}
        subtitle={projects.github.content}
        link={projects.github.link}
        button={
          <span>
            View My GitHub <i className="fab fa-github-square"></i>
          </span>
        }
      />
    </div>
  );
}

function AboutMe() {
  const about = config.get('aboutMe');

  return (
    <div>
      <div
        className={'container'}
        style={{ marginTop: '5em', marginBottom: '10em', textAlign: 'center' }}
      >
        <header className="is-centered">
          <h1 className="title is-spaced has-text-weight-bold is-3">
            About Me
          </h1>
          <p className="subtitle">
            My name is Sean Reeise. Most people just call me Sean.
          </p>
        </header>
      </div>

      <DetailSection
        image={FriendShip}
        alt={'Friendship'}
        title={'Faith'}
        subtitle={about.faith.content}
      />
      <DetailSection
        image={Development}
        alt={'Development'}
        title={'Development'}
        subtitle={about.development.content}
      />
      <DetailSection
        image={OpenSource}
        alt={'Open Source'}
        title={'Open Source'}
        subtitle={about.openSource.content}
      />
      <DetailSection
        image={Analytics}
        alt={'Analytics'}
        title={'Education'}
        subtitle={about.education.content.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <section className="hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className={'columns is-vcentered is-desktop'}>
              <div className={'column is-6-desktop has-text-centered-touch'}>
                <p className="title has-text-dark">Software Developer</p>
                <p className="subtitle is-6 has-text-dark">
                  Java | Rust | JavaScript | Python | HTML/CSS | Spring | React
                  | MySQL
                </p>
              </div>
              <div className={'column is-5'}>
                <div className={'column'}>
                  <figure className={'image'}>
                    <img alt={'landing-page-image image'} src={Analysis} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AppRouter() {
  return (
    <Router history={history} basename={'/'}>
      <NavBar />
      <ScrollToTop />
      <Route path="/" exact component={App} />
      <Route path="/about" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <ConsentNotification />
    </Router>
  );
}

export default AppRouter;
