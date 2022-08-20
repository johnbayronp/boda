import React from 'react'
import './table.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';


const selectOptions = {
  true: 'Confirmado',
  false: 'No Confirmado',
};

const selectOptions2 = {
    false: 'No Asistire',
    true: 'Asistire',
  };

const columns = [{
  dataField: 'posList',
  text: 'ID'
}, {
  dataField: 'nombre',
  text: 'Nombre',
  filter: textFilter()
}, {
    dataField: 'apellidos',
    text: 'Apellidos',
    filter: textFilter()
  }, {
  dataField: 'confirmado',
  text: 'Confirmacion',
  formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions,
    defaultValue: 0
  })},{
    dataField: 'asistencia',
    text: 'Asistencia',
    formatter: cell => selectOptions2[cell],
    filter: selectFilter({
      options: selectOptions2,
      defaultValue: 0
    })
}];

class Table extends React.Component {

  
    constructor(props){
        super(props)
        this.state = {peoples: props.people}
    }

  render() {
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      totalSize: this.state.peoples.length
    };

    const TableInvitados = ({ paginationProps, paginationTableProps }) => (
      <div>
        <PaginationListStandalone { ...paginationProps } />
        <div>
          <div>
            <BootstrapTable
              striped
              hover
              keyField="id"
              data={ this.state.peoples }
              columns={ columns }
              filter={ filterFactory() }
              { ...paginationTableProps }
            />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <h2>Tabla de invitados</h2>
        <PaginationProvider
          pagination={
            paginationFactory(options)
          }
        >
          { TableInvitados }
        </PaginationProvider>
      </div >
    );
  }
}
export  default Table;