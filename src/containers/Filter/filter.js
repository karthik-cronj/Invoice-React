import React, { Component } from 'react';
import Table from '../Table/table';

class Filter extends Component {
  // state = {
  //   day: 0,
  //   month: 0,
  //   year: 0,
  // };

  // updateday = () => {
  //   // this.setState({ day: newday });
  //   let e = document.getElementById('day');
  //   // let newday = e.options[e.selectedIndex].value;
  //   this.setState({ day: e.options[e.selectedIndex].value });
  // };

  // updatemonth = () => {
  //   let e = document.getElementById('month');
  //   this.setState({ month: e.options[e.selectedIndex].value });
  // };

  // updateyear = () => {
  //   let e = document.getElementById('year');
  //   this.setState({ year: e.options[e.selectedIndex].value });
  // };
  // getday() {
  //   let e = document.getElementById('day');
  //   let num = e.options[e.selectedIndex].value;
  //   return num;
  // }
  render() {
    // console.log(this.state.day);
    // console.log(this.state.month);
    // console.log(this.state.year);

    return (
      <div className="navbar bg-dark text-white navbar-dark mb-3">
        <span className="m-auto">
          <select
            name="day"
            id="day"
            title="Day"
            onChange={this.props.changedate}
            className="btn btn-secondary text-light border-0"
          >
            <option value="0" selected="0">
              Day
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select
            name="month"
            id="month"
            title="Month"
            onChange={this.props.changedate}
            className="btn btn-secondary text-light border-0 m-3"
          >
            <option value="0" selected="0">
              Month
            </option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <select
            name="year"
            id="year"
            title="Year"
            onChange={this.props.changedate}
            className="btn btn-secondary text-light border-0 m-3"
          >
            <option value="0" selected="0">
              Year
            </option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
          </select>
          <button
            onClick={this.props.showall}
            className="btn btn-danger text-light border-0 m-3"
          >
            Show All
          </button>
        </span>
        <Table />
      </div>
    );
  }
}

export default Filter;
