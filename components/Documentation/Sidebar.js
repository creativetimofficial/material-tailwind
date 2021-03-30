import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

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
          <div className="mb-8">
            <div className="flex items-center gap-2" key={key}>
              <i
                className={`${prop.icon} bg-gradient-to-tr from-light-blue-700 to-light-blue-500 p-2 leading-none rounded-lg text-xs text-white`}
              />
              <h4 className="text-gray-900 text-base font-medium">
                {prop.name}
              </h4>
            </div>
            <ul className="block flex-wrap list-none pl-0 mb-0 mt-3">
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
                  ? "text-light-blue-500"
                  : "text-gray-700 hover:text-gray-900 ") +
                " capitalize text-sm px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300"
              }
              onClick={(e) => {
                e.preventDefault();
                this.setState({ [prop.state]: !this.state[prop.state] });
              }}
            >
              {prop.name}{" "}
              <span
                className="material-icons text-xs align-middle"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                keyboard_arrow_{this.state[prop.state] ? "up" : "down"}
              </span>
            </a>
            <ul
              className={
                (this.state[prop.state] ? "block " : "hidden ") +
                "flex-wrap list-none ml-2"
              }
            >
              {this.getRoutes(prop.subRoutes)}
            </ul>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <Link href={prop.path}>
              <a
                className={
                  (this.props.router.pathname.indexOf(prop.path) !== -1
                    ? "bg-gray-200 text-gray-900 "
                    : "text-gray-700 hover:text-gray-900 ") +
                  "capitalize text-sm text-gray-700 px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300"
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
      <div className="w-72 h-screen px-6 pt-10 pb-16 sticky top-16 z-30 overflow-y-scroll border border-t-0 border-b-0 border-l-0 border-r flex-none lg:block hidden">
        {this.getRoutes(this.props.routes)}
      </div>
    );
  }
}

export default withRouter(Sidebar);
