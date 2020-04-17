import React, { Component } from 'react';

import Filter from './containers/Filter/filter';
import Table from './containers/Table/table';

class App extends Component {
  state = {
    day: 0,
    month: 0,
    year: 0,
    updated: false,
  };

  // updateday = () => {
  //   let d = document.getElementById('day');

  //   this.setState({ day: d.options[d.selectedIndex].value });
  //   console.log(d.options[d.selectedIndex].value);
  // };

  updatedate = () => {
    let m = document.getElementById('month');
    this.setState({ month: m.options[m.selectedIndex].value });

    let y = document.getElementById('year');
    this.setState({ year: y.options[y.selectedIndex].value });

    let d = document.getElementById('day');
    this.setState({ day: d.options[d.selectedIndex].value });

    this.setState({ updated: true });
    this.forceUpdate();
  };

  showallfunction = () => {
    this.setState({ updated: false });
    // window.location.reload();
  };

  // updateyear = () => {
  //   let y = document.getElementById('year');
  //   this.setState({ year: y.options[y.selectedIndex].value });
  // };

  render() {
    // console.log(this.state.month);
    // console.log(this.state.year);
    return (
      <div className="App">
        <Filter
          // changeday={this.updateday()}
          changedate={this.updatedate}
          showall={this.showallfunction}
          // changeday={this.updateyear}
        />
        <div className="container">
          <table className="m-auto w-100">
            <thead className="py-5">
              <tr className="text-center bg-dark text-danger">
                <th className="py-3">Invoice</th>
                <th>Client Name</th>
                <th>Company</th>
                <th>Submitted</th>
                <th>Amount</th>
                <th> </th>
              </tr>
            </thead>
            <Table
              day={this.state.day}
              month={this.state.month}
              year={this.state.year}
              updated={this.state.updated}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
