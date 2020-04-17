import React from 'react';
import './tableRow.css';

// let hidden = true;

// function showbuttons(id) {
//   if (hidden) {
//     document.getElementById('more' + id).className = 'd-float';
//   } else {
//     document.getElementById('more' + id).className = 'd-none';
//   }
//   hidden = !hidden;
// }

const tableRow = (props) => (
  <tr className="threedotdiv">
    <td className="px-4 py-2">{props.id}</td>
    <td className="px-4 py-2">{props.clientName}</td>
    <td className="px-4 py-2">{props.company}</td>
    <td className="px-4 py-2">{props.submitted}</td>
    <td className="px-4 py-2">{props.amount}</td>
    <div>
      <button
        className="threedots"
        data-toggle="collapse"
        data-target={'#more' + props.id}
        // onClick={() => showbuttons(props.id)}
      >
        ...
      </button>
      <ul className="collapse" id={'more' + props.id}>
        <li className="edit">
          <a
            className="btn btn-primary"
            onClick={props.editClicked}
            id={props.id - 1}
          >
            Edit
          </a>
        </li>
        <li className="delete">
          <a
            className="btn btn-danger"
            onClick={props.deleteClicked}
            data-toggle="collapse"
            data-target={'#more' + props.id}
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  </tr>
);

export default tableRow;
