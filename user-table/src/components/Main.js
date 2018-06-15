require('styles/bootstrap.css');
require('styles/components/App.scss');

import React from 'react';
import TableComponent from '../components/components/TableComponent';
import AddUserDialog from '../components/components/AddUserComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }

  showAddUserDialog = function() {
    this.setState({ showDialog: true })
  }

  render() {
    return (
      <div className="application">
        <header className="header">
          <a className="logo" href="https://www.vizexplorer.com/" title="VizExplorer website">
            <img src="images/viz-logo.svg" onerror="this.onerror=null; this.src='images/viz-logo.png'" alt="Viz Explorer logo" />
          </a>
          <div className="title">DataGrid Assignment</div>
        </header>

        <main className="main-content">
          <section className="table-controls">
            <button onClick={this.showAddUserDialog} aria-label="Add player to list">Add Player</button>
          </section>
          <TableComponent />
          <div className={this.state.showDialog ? 'show-dialog' : 'hide-dialog'}>
            <AddUserDialog />
          </div>
        </main>
      </div>
    );
  }
}

export default AppComponent;
