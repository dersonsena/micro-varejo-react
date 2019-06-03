import { Component } from 'react';

export default class TableComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      hasFilter: false,
      pagination: {
        page: 1,
        currentPage: 0,
        pageCount: 0,
        perPage: 0,
        totalCount: 0,
        size: 'sm',
        onClickPrevious: this.onClickPrevious,
        onClickNext: this.onClickNext,
        onClickPage: this.onClickPage
      }
    }
  }

  handleChange = e => {
    let value = e.target.value;

    if (e.target.type === 'checkbox') {
      value = (value === '0' || value === '' ? '1' : '0');
    }

    this.setState({ filters: {
      ...this.state.filters,
      [e.target.name]: value
    }});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ hasFilter: true });
    this.refreshTable();
  };

  onClickClearFilters = e => {
    const filters = {};

    for (let field in this.state.filters) {
      filters[field] = '';
    }

    this.setState({ filters, hasFilter: false }, () => this.refreshTable());
  }

  refreshTable = (page = 1) => {
    this.setState({ page, loader: true });

    const fields = this.state.fields
      .map(field => field.key)
      .join(',');

    const params = { page, fields, filters: this.state.filters };

    this.service.search(params)
      .then(response => {
        this.setState({
          pagination: {
            ...this.state.pagination,
            currentPage: parseInt(response.headers['x-pagination-current-page'], 10),
            pageCount: parseInt(response.headers['x-pagination-page-count'], 10),
            perPage: parseInt(response.headers['x-pagination-per-page'], 10),
            totalCount: parseInt(response.headers['x-pagination-total-count'], 10)
          }
        });

        return response.data;
      })
      .then(rows => {
        this.setState({ rows });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ loader: false }))
  };

  onClickPrevious = () => {
    let page = (this.state.pagination.currentPage === 1 ? 1 : (this.state.pagination.currentPage - 1));
    this.refreshTable(page);
  };

  onClickNext = () => {
    let page = (this.state.pagination.currentPage === this.state.pagination.pageCount ?
      this.state.pagination.pageCount :
      (this.state.pagination.currentPage + 1)
    );

    this.refreshTable(page);
  };

  onClickPage = (e) => {
    let page = parseInt(e.target.text, 10);
    this.refreshTable(page);
  };
}
