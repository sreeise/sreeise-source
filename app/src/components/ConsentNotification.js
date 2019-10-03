import React from 'react';
import CookieReader from '../utils/CookieReader';

class ConsentNotification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      consent: false,
    };
  }

  componentDidMount() {
    if (CookieReader().hasConsent('srme-analytics=agreed')) {
      this.setState({
        consent: true,
      });
    }
  }

  onConsent() {
    CookieReader().setCookie(
      'srme-analytics=agreed;SameSite=Strict;expires=Fri, 4 Jan 2022 15:04:05 GMT',
    );
    this.setState({
      consent: true,
    });
  }

  render() {
    if (this.state.consent) {
      return null;
    }

    if (CookieReader().hasConsent('srme-analytics=agreed')) {
      return null;
    }

    return (
      <article
        style={{
          bottom: 0,
          left: '1em',
          maxWidth: '30%',
          paddingBottom: '1em',
          position: 'fixed',
          zIndex: 20,
        }}
        className={'message is-primary'}
      >
        <div className="message-header">
          <p>Notification</p>
          <button
            onClick={() => this.onConsent()}
            className="delete"
            aria-label="delete"
          ></button>
        </div>
        <div className="message-body">
          This site uses cookies to help analyze traffic. By not changing you
          cookie settings we assume you are ok with this.
        </div>

        <div style={{ marginLeft: '1em' }} className="buttons">
          <button
            onClick={() => this.onConsent()}
            id="consent"
            className="button is-primary"
          >
            <strong>Ok, thanks</strong>
          </button>
        </div>
      </article>
    );
  }
}

export default ConsentNotification;
