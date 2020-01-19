import React, { Component } from "react";
import bemHelper from "../../utils/bem";
import { getJSON } from "../../utils/";
import Carousel from "../Carousel/Carousel";
import "./dashboard.scss";

const cn = bemHelper({ block: "dashboard" });

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    getJSON("/api/creditReport").then(json =>
      this.setState({ data: json.data })
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className={cn("container")}>
        <Carousel creditReport={data.creditReportInfo} />
      </div>
    );
  }
}

export default Dashboard;
