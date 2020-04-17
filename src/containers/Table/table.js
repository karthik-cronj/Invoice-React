import React, { PureComponent } from 'react';
import TableRow from './tableRow';
import data from './data.json';
import TableEdit from './tableEdit';

// import axios from 'axios';

class Table extends PureComponent {
  state = {
    tabledata: data,
    updated: false,
  };

  editfunction = (id) => {
    this.state.tabledata.forEach((element, index) => {
      if (element.id == id) {
        element.isedited = true;
      }
    });

    this.forceUpdate();
  };

  deletefunction = (id) => {
    // this.state.tabledata[id].isedited = false;

    this.state.tabledata.forEach((element, index) => {
      if (element.id == id) {
        this.state.tabledata.splice(index, 1);
      }
    });

    // document.getElementById('more' + (id + 1)).style.display = 'none';
    this.forceUpdate();

    // console.log(id);
  };

  confirmfunction = (id) => {
    this.state.tabledata.forEach((element, index) => {
      if (element.id == id) {
        element.clientName = document.getElementById('nameinput' + id).value;
        element.company = document.getElementById('companyinput' + id).value;
        element.amount = document.getElementById('amountinput' + id).value;

        element.isedited = false;
      }
    });
    // let tempname = document.getElementById('nameinput' + id).value;
    // let tempcompany = document.getElementById('company' + id).value;
    // let tempamount = document.getElementById('amount' + id).value;

    this.forceUpdate();
    // console.log(tempname, tempcompany, tempamount);
  };

  render() {
    // console.log(this.state.updated);
    // let trow = this.state.tabledata.map((element) => {
    //     return(
    //   <TableRow
    //     clientName={element.clientName}
    //     id={element.id}
    //     company={element.company}
    //     submitted={element.submitted}
    //     amount={element.amount}
    //   />;
    //     );
    // });

    // console.log(this.props.day);
    // console.log(this.props.month);
    // console.log(this.props.year);

    let trow = [];
    let tempstate = [];

    // if (this.props.day || this.props.month || this.props.year)
    if (this.props.updated) {
      trow = this.state.tabledata.map((element) => {
        if (
          (element.day == this.props.day || this.props.day == 0) &&
          (element.month == this.props.month || this.props.month == 0) &&
          (element.year == this.props.year || this.props.year == 0)
        ) {
          tempstate.push(element);
          if (!element.isedited) {
            return (
              <TableRow
                clientName={element.clientName}
                id={element.id}
                company={element.company}
                submitted={element.submitted}
                amount={element.amount}
                editClicked={() => {
                  this.editfunction(element.id);
                }}
                deleteClicked={() => {
                  this.deletefunction(element.id);
                }}
                //   isedit={element.isedit}
              />
            );
          } else {
            return (
              <TableEdit
                id={element.id}
                submitted={element.submitted}
                clientName={element.clientName}
                company={element.company}
                amount={element.amount}
                confirmClicked={() => {
                  this.confirmfunction(element.id);
                }}
              />
            );
          }
        }
      });
      //   console.log(trow);
    }

    if (this.props.updated === false) {
      trow = this.state.tabledata.map((element) => {
        if (element.isedited === false) {
          return (
            <TableRow
              clientName={element.clientName}
              id={element.id}
              company={element.company}
              submitted={element.submitted}
              amount={element.amount}
              editClicked={() => {
                this.editfunction(element.id);
              }}
              deleteClicked={() => {
                this.deletefunction(element.id);
              }}
            />
          );
        } else {
          return (
            <TableEdit
              id={element.id}
              submitted={element.submitted}
              clientName={element.clientName}
              company={element.company}
              amount={element.amount}
              confirmClicked={() => {
                this.confirmfunction(element.id);
              }}
            />
          );
        }
      });
    }

    // let trow = null;

    // console.log(trow);

    return <tbody>{trow}</tbody>;
  }
}

export default Table;
