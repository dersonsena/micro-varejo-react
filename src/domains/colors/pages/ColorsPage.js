import React, { Component } from 'react';
import AppTable from 'components/app/AppTable';
import { table } from '../settings';

class ColorsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...table()
    }
  }

  render() {
    return (
      <>
        <div className="ui-bordered px-4 pt-4 mb-4">
          <div className="form-row align-items-center">
            <div className="col-md mb-4">
              <label className="form-label">Verified</label>
              <select className="custom-select">
                <option>Any</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-md mb-4">
              <label className="form-label">Role</label>
              <select className="custom-select">
                <option>Any</option>
                <option>User</option>
                <option>Author</option>
                <option>Staff</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="col-md mb-4">
              <label className="form-label">Status</label>
              <select className="custom-select">
                <option>Any</option>
                <option>Active</option>
                <option>Banned</option>
                <option>Deleted</option>
              </select>
            </div>
            <div className="col-md mb-4">
              <label className="form-label">Latest activity</label>
              <input type="text" id="user-list-latest-activity" className="form-control" placeholder="Any" />
            </div>
            <div className="col-md col-xl-2 mb-4">
              <label className="form-label d-none d-md-block">&nbsp;</label>
              <button type="button" className="btn btn-secondary btn-block">Show</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-datatable table-responsive">
            <AppTable fields={this.state.fields} rows={this.state.rows} />
          </div>

          <div className='card-body'>
            <ul className="pagination pagination-sm pull-right">
              <li className="page-item disabled">
                <a className="page-link" href="javascript:void(0)">«</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0)">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">5</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)">»</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ColorsPage;
