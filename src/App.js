import React, { Component } from "react";
import "./App.css";
import ReactSimpleTable from "@harallio/react-simple-table";

import { getData } from "./mockDataService";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    getData().then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <ReactSimpleTable
          title={"Frameworks"}
          data={data}
          onEdit={(index, data) => console.log(index, data)}
          headerRowStyle={{ backgroundColor: "#bdc3c7" }}
          headerCellStyle={{ color: "white" }}
          cellStyle={{ color: "#bdc3c7" }}
          containerStyle={{
            height: "500px",
            width: "50%",
            justifyContent: "flex-start"
          }}
          onDelete={(i, data) => console.log(i, data)}
        />
      </div>
    );
  }
}

export default App;
