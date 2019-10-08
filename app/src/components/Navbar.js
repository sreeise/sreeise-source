import React from 'react';
import { Link } from 'react-router-dom';

// TODO Add a report issues link for this repository
/*
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>

                <div className="navbar-dropdown">
                  <hr className="navbar-divider" />
                  <a className="navbar-item has-dropdown is-hoverable">
                    Report an issue
                  </a>
                </div>
              </div>
 */

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // TODO Add Contact Component and Link
    // { id: 2, name: 'Contact', route: '/contact', active: '' },

    this.state = {
      menu: [
        { id: 0, name: 'Home', route: '/', active: 'is-active' },
        { id: 1, name: 'About Me', route: '/about', active: '' },
        { id: 2, name: 'Projects', route: '/projects', active: '' },
      ],
      navMenuClassName: '',
      isOpen: false,
    };
  }

  mobileMenuOpen() {
    if (!this.state.isOpen) {
      this.setState({
        navMenuClassName: 'is-active',
        isOpen: true,
      });
    } else {
      this.setState({
        navMenuClassName: '',
        isOpen: false,
      });
    }
  }

  onRouteUpdate(obj) {
    obj.active = 'is-active';
    let menu = this.state.menu;
    for (let prop in menu) {
      if (obj.id === menu[prop].id) {
        menu[prop] = obj;
      } else {
        menu[prop].active = '';
      }
    }
    this.setState({
      menu,
    });
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className={'container'}>
          <div className="navbar-brand">
            <Link to={'/'} className={'navbar-item'}>
              <i className="fas fa-code"></i>
            </Link>
            <div
              onClick={() => this.mobileMenuOpen()}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div className={`navbar-menu ${this.state.navMenuClassName}`}>
            <div className="navbar-start">
              {this.state.menu.map(obj => {
                return (
                  <Link
                    to={obj.route}
                    key={obj.id}
                    id={obj.i}
                    onClick={() => this.onRouteUpdate(obj)}
                    className={`navbar-item ${obj.active}`}
                  >
                    {obj.name}
                  </Link>
                );
              })}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons ">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={'https://github.com/sreeise'}
                    className="button is-dark"
                  >
                    <span className={'icon'}>
                      <i className="fab fa-github-square"></i>
                    </span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={'https://www.linkedin.com/in/sean-r-48b36b135'}
                    className="button is-link"
                  >
                    <span className={'icon'}>
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
