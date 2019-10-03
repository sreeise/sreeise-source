import React from 'react';

export function DetailsLinkSection(props) {
    return(
        <section style={{marginTop: '3em', marginBottom: '10em'}} className={'hero is-medium is-spaced'}>
            <div className={'container'}>
                <div
                    className="columns is-variable is-8 is-vcentered has-text-centered-mobile"
                >
                    <div className="column is-half">
                        <h3 className="title has-text-weight-bold is-spaced is-3">
                            {props.title}
                        </h3>
                        <p className="subtitle is-5">{props.subtitle}</p>
                        <a className={'button is-primary'}
                           rel="noopener noreferrer"
                           target="_blank"
                           href={props.link}>
                            {props.button}
                        </a>
                    </div>
                    <div className="column">
                        <figure className={'image'}>
                            <img style={{maxWidth: '400px', minWidth: '400px', maxHeight: '300', minHeight: '300'}}
                                 src={props.image}
                                 alt={props.alt}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function DetailSection(props) {
    return(
        <section style={{marginTop: '3em', marginBottom: '10em'}} className={'hero is-medium is-spaced'}>
            <div className={'container'}>
                <div
                    className="columns is-variable is-8 is-vcentered has-text-centered-mobile"
                >
                    <div className="column is-half">
                        <h3 className="title has-text-weight-bold is-spaced is-3">
                            {props.title}
                        </h3>
                        <p className="subtitle is-5">{props.subtitle}</p>
                    </div>
                    <div className="column">
                        <figure className={'image'}>
                            <img style={{maxHeight: '70%', maxWidth: '70%'}}
                                src={props.image}
                                alt={props.alt}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
