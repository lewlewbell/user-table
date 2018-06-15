'use strict';

import React from 'react';

require('styles/components/AddUser.scss');

class AddUserComponent extends React.Component {
  render() {
    return (
      <div className="add-user-dialog">
        Add new user dialog
      </div>
    );
  }
}

AddUserComponent.displayName = 'ComponentsAddUserComponent';

// Uncomment properties you need
// AddUserComponent.propTypes = {};
// AddUserComponent.defaultProps = {};

export default AddUserComponent;
