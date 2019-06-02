import React from 'react';
import AppTable from '~/components/app/AppTable';
import { table } from '../settings';
import AppPagination from '~/components/app/AppPagination';
import AppTableSummary from 'components/app/AppTableSummary';
import TableComponent from '~/utils/TableComponent';
import ColorsService from '../ColorsService';

class ColorsPage extends TableComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      ...table()
    }

    this.service = ColorsService.build();
  }

  componentWillMount() {
    this.refreshTable();
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

        <AppTableSummary
          className='text-right'
          totalCount={this.state.pagination.totalCount}
          pageCount={this.state.pagination.pageCount} />

        <div className="card">
          <div className="card-datatable table-responsive">
            <AppTable fields={this.state.fields} rows={this.state.rows} />
          </div>

          <div className='card-body'>
            <AppPagination {...this.state.pagination} />
          </div>
        </div>
      </>
    );
  }
}

export default ColorsPage;
