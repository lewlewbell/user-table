'use strict';

import React from 'react';

require('styles/components/Table.scss');

// Import table data
const users = require('json-loader!../../data/users.json');

const userTotal = Object.keys(users).length;
const userData = [];

for (var count = 1; count <= userTotal; count++) {
  userData.push(
    <tr>
      <th scope="row">{count}</th>
      <td>{users[count].firstName}</td>
      <td>{users[count].surname}</td>
      <td className={`td-sex td-sex--${users[count].sex}`}><img src={`images/icon_${users[count].sex}.svg`} alt={users[count].sex} /></td>
      <td className={`td-tier td-tier--${users[count].tier}`}><img src={`images/tier_${users[count].tier}.svg`} alt={users[count].tier} /></td>
      <td><a href={`mailto:{users[count].email}`}>{users[count].email}</a></td>
    </tr>
  );
}

function TableComponent() {
  return (
    <table className="table" aria-label="Table of users">
      <thead>
        <tr>
          <th className="th1" scope="col"></th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Sex</th>
          <th scope="col">Tier</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {userData}
      </tbody>
    </table>
  );
}

TableComponent.displayName = 'ComponentsTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;
