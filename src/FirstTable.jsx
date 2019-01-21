var React = require('react')
var ReactDOM = require('react-dom')
var ReactBsTable = require('react-bootstrap-table')
var BootstrapTable = ReactBsTable.BootstrapTable
var TableHeaderColumn = ReactBsTable.TableHeaderColumn

var userInfo = [
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 12,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },
    {
        userName: 1,
        email: 'Product1',
        role: 120,
        firstName: 'Mohammad',
        middleName: 'kamran',
        lastName: 'siddique',
        timeZone: 'UTC'
    },

]

class BigTable extends React.Component{
    constructor(props, context){
        super(props, context)
    }
    render(){
        return(
            <BootstrapTable
               data = {userInfo}
               striped
               hover
               condensed
               pagination
            >
            <TableHeaderColumn
               isKey
               dataField = 'userName'
               dataSort = {true}
            >User Name</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'email'
               dataSort = {true}
            >Email
            </TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'role'
               dataSort = {true}
            >Role</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'firstName'
               dataSort = {true}
            >First Name</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'lastName'
               dataSort = {true}
            >Middle Name</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'middleName'
            >Last Name</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'timeZone'
            >Time Zone</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default BigTable
