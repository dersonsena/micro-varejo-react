import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  fields: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  emptyText: PropTypes.string,
  emptyTextIcon: PropTypes.string,
  hovered: PropTypes.bool,
  removeDefaultClasses: PropTypes.bool
};

const defaultProps = {
  emptyText: 'Nenhum registro encontrado.',
  emptyTextIcon: 'fas fa-info-circle',
  hovered: true,
  removeDefaultClasses: false
};

const AppTable = (props) => {
  const keysList = props.fields.map(field => field.key);
  const { className, hovered, removeDefaultClasses, emptyText, emptyTextIcon } = props;

  const tableClasses = classnames(
    !removeDefaultClasses ? 'table table-striped' : false,
    hovered ? 'table-hover' : false,
    className
  );

  const newRows = props.rows.map(row => {
    let newRow = {};

    for (let key in row) {
      if (!keysList.includes(key)) {
        delete row[key];
      }

      newRow = row;
    }

    return newRow;
  });

  const trEmpty = (
    <tr>
      <td colSpan={props.fields.length} className='text-center'>
        <i className={emptyTextIcon} /> { emptyText }
      </td>
    </tr>
  );

  const trs = newRows.map((row, index) => {
    const tds = [];

    for (let key in row) {
      const tdSetting = props.fields.find(field => field.key === key);

      const tdValue = (tdSetting.hasOwnProperty('formatter')
        ? tdSetting.formatter(row[key], key, row)
        : row[key]
      );

      tds.push(<td key={key} className={tdSetting.tdClass}>{tdValue}</td>)
    }

    return <tr key={index}>{tds}</tr>;
  });

  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          { props.fields.map(field => (
              <th key={field.key} style={field.thStyle} className={field.thClass}>
                { field.label }
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>{ newRows.length > 0 ? trs : trEmpty }</tbody>
    </table>
  );
}

AppTable.propTypes = propTypes;
AppTable.defaultProps = defaultProps;

export default AppTable;
