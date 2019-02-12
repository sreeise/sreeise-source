import React, {Component} from 'react';
import './css/index.css';
import './css/normalize.css';
import CardInfo from "./components/card.jsx";
import CardFlex from "./components/CardFlex";
import PageHeader from "./components/PageHeader";
import AboutMe from "./components/AboutMe";

let work = [
    <CardInfo
        href={"https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=reeisesean%40gmail.com&from=2018-01-01&to=2019-01-01&group=when"}
        src={"images/Mozilla-logo-md.png"} title={"My contributions to Mozilla"} button={"See More"}
    />,
    <CardInfo href={"https://github.com/sreeise"} src={"images/github-color-circle.jpg"} title={"My work on GitHub"}
              button={"See More"}/>,
    <CardInfo href={"https://www.linkedin.com/in/sean-r-48b36b135/"} src={"images/linkedin-logo-702336.jpg"}
              title={"Find me on LinkedIn"} button={"See More"}/>,
    <CardInfo href={"https://bitbucket.org/sreeise/"} src={"images/bitbucket.jpg"} title={"My projects on Bitbucket"}
              button={"See More"}/>,
    <CardInfo href={"https://bitsrc.io/sreeise"} src={"images/bit.png"} title={"My projects on Bit"}
              button={"See More"}/>,
];

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <AboutMe/>
                <CardFlex cards={work}/>
            </div>
        );
    }
}

export default App;
