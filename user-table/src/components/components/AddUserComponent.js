'use strict';

import React from 'react';

require('styles/components/AddUser.scss');

class AddUserComponent extends React.Component {
  render() {
    return (
      <div className="add-user-dialog">
          <h3>Add Player</h3>

          <p>First Name</p>
          <p><input type="text" required /></p>

          <p>Surname</p>
          <p><input type="text" required /></p>

          <p>Sex</p>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>

          <p>Tier</p>
          <select>
            <option>Gold</option>
            <option>Silver</option>
            <option>Bronze</option>
          </select>

          <p>Email</p>
          <p><input type="email" required /></p>

          <p><input type="submit" value="Cancel" /> <input type="submit" value="Add" /></p>

      </div>
    );
  }
}

AddUserComponent.displayName = 'ComponentsAddUserComponent';

// Uncomment properties you need
// AddUserComponent.propTypes = {};
// AddUserComponent.defaultProps = {};

export default AddUserComponent;
