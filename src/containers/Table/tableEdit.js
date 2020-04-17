import React from 'react';

const tableEdit = (props) => (
  <tr>
    <td className="px-4 py-2">{props.id}</td>
    <td className="px-4 py-2">
      <input
        type="text"
        name="clientName"
        id={'nameinput' + props.id}
        placeholder={props.clientName}
      />
    </td>
    <td className="px-4 py-2">
      <input
        type="text"
        name="company"
        id={'companyinput' + props.id}
        placeholder={props.company}
      />
    </td>
    <td className="px-4 py-2">{props.submitted}</td>
    <td className="px-4 py-2">
      <input
        type="text"
        name="amount"
        id={'amountinput' + props.id}
        placeholder={props.amount}
      />
    </td>
    <div>
      <button
        className="btn btn-success"
        onClick={props.confirmClicked}
        // id={props.id}
      >
        confirm
      </button>
    </div>
  </tr>
);

export default tableEdit;
