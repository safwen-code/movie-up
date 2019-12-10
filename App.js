import React, { Component } from "react";

import Moviecontainer from "./component/Moviecontainer";
import HOC from "./hoc";
import "./App.css";

const Listleadind = HOC(Moviecontainer);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  render() {
    return <Listleadind isLoading={this.state.isLoading} />;
  }
}
