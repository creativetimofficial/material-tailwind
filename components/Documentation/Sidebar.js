import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCollapseStates(props.routes);
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = (routes) => {
    let initialState = {};
    routes &&
      routes.map((prop, key) => {
        if (prop.subRoutes) {
          initialState = {
            [prop.state]: this.getCollapseInitialState(prop.subRoutes),
            ...this.getCollapseStates(prop.subRoutes),
            ...initialState,
          };
        } else if (prop.routes) {
          initialState = {
            ...this.getCollapseStates(prop.routes),
            ...initialState,
          };
        }
        return null;
      });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (
        routes[i].subRoutes &&
        this.getCollapseInitialState(routes[i].subRoutes)
      ) {
        return true;
      } else if (this.props.router.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.disabled) {
        return (
          <li key={key}>
            <a
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              className="text-gray-400 text-sm block mb-2 mx-4 no-underline cursor-not-allowed"
            >
              {prop.name}
            </a>
          </li>
        );
      }
      if (prop.routes) {
        return (
          <div className="mb-6" key={key}>
            <Link
              href={prop.path}
              as={
                (process.env.NODE_ENV === 'production'
                  ? '/learning-lab/tailwind-starter-kit'
                  : '') + prop.path
              }
            >
              <a className="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline">
                {prop.name}
              </a>
            </Link>
            <ul className="block flex-wrap list-none pl-0 mb-0 mt-0">
              {this.getRoutes(prop.routes)}
            </ul>
          </div>
        );
      } else if (prop.redirect) {
        return null;
      } else if (prop.subRoutes) {
        return (
          <li className="" key={key}>
            <a
              href="#pablo"
              className={
                (this.state[prop.state]
                  ? 'text-pink-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 ') +
                ' text-sm block mb-2 mx-4 no-underline'
              }
              onClick={(e) => {
                e.preventDefault();
                this.setState({ [prop.state]: !this.state[prop.state] });
              }}
            >
              {prop.name}{' '}
              <span
                className="material-icons text-xs align-middle"
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                keyboard_arrow_{this.state[prop.state] ? 'up' : 'down'}
              </span>
            </a>
            <ul
              className={
                (this.state[prop.state] ? 'block ' : 'hidden ') +
                'flex-wrap list-none pl-2 mb-0 mt-0'
              }
            >
              {this.getRoutes(prop.subRoutes)}
            </ul>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <Link
              href={prop.path}
              as={
                (process.env.NODE_ENV === 'production'
                  ? '/learning-lab/tailwind-starter-kit'
                  : '') + prop.path
              }
            >
              <a
                className={
                  (this.props.router.pathname.indexOf(prop.path) !== -1
                    ? 'text-pink-600 border-l-2 border-solid border-pink-600 pl-1 '
                    : 'text-gray-600 hover:text-gray-900 ') +
                  'text-sm block mb-2 mx-4 no-underline'
                }
              >
                {prop.name}
              </a>
            </Link>
          </li>
        );
      }
    });
  };
  render() {
    return (
      <>
        <div className="block overflow-y-auto pt-8 pb-4">
          {this.getRoutes(this.props.routes)}
        </div>
      </>
    );
  }
}

export default withRouter(Sidebar);
