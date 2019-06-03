import React from 'react';
import AppTable from '~/components/app/AppTable';
import { table } from '../settings';
import AppPagination from '~/components/app/AppPagination';
import AppTableSummary from 'components/app/AppTableSummary';
import TableComponent from '~/utils/TableComponent';
import ColorsService from '../ColorsService';
import AppFormField from '~/components/app/AppFormField';
import AppButton from '~/components/app/AppButton';
import AppLabel from 'components/app/AppLabel';

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
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <AppFormField
                  label='Nome'
                  name='name'
                  value={this.state.filters.name}
                  onChange={this.handleChange}
                  placeholder='Informe um nome...' />
              </div>
              <div className="col-3">
                <AppLabel className='d-none d-md-block'>&nbsp;</AppLabel>
                <AppButton color='primary' type='submit'>
                  <i className="fas fa-search"></i> {''}
                  Buscar
                </AppButton>
                {
                  this.state.hasFilter && (
                    <AppButton color='link' type='button' onClick={this.onClickClearFilters}>
                      <i className="fas fa-eraser"></i> {''}
                      Limpar Filtros
                    </AppButton>
                  )
                }
              </div>
            </div>
          </form>
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
