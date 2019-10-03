import React, { useState } from 'react';

// TODO: Update Contact Component
/*
import ContactSubscribe from './components/Contact';

function Contact() {
  return (
    <section className={'section'} style={{ marginTop: '10em' }}>
      <ContactSubscribe
        button={'submit'}
        subscribedMessage={'Thanks! Ill get back to you as soon as I can!'}
        size="medium"
      />
    </section>
  );
}
*/

export default function ContactSubscribe(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
    }

    if (message) {
    }
  };

  return (
    <>
      {subscribed === false && (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 is-10-fullhd">
                <div className="columns is-vcentered">
                  <div className="column is-half">
                    <div className="title">{'Contact Me'}</div>
                    <div className="subtitle is-6">
                      {
                        'Enter your contact info and a message and Ill reach out to you as soon as possible.'
                      }
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className={`input is-3`}
                          type="email"
                          placeholder={'email...'}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="control">
                        <button
                          className={'button is-primary'}
                          onClick={props.onClick}
                        >
                          {props.button}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={'column'}>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        id={'message'}
                        className="textarea"
                        placeholder={'message...'}
                        rows="10"
                        onChange={event => setMessage(event.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {subscribed === true && <>{props.subscribedMessage}</>}
    </>
  );
}
