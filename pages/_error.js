import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  componentDidMount = () => {
    Router.push(
      (process.env.NODE_ENV === "production"
        ? "/learning-lab/tailwind-starter-kit"
        : "") + "/presentation"
    );
  };

  render() {
    return <div />;
  }
}
