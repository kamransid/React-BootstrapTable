var React = require('react')
var ReactDOM = require('react-dom')
var ReactBsTable = require('react-bootstrap-table')
var BootstrapTable = ReactBsTable.BootstrapTable
var TableHeaderColumn = ReactBsTable.TableHeaderColumn

var products = [
    {
        id: 1,
        name: 'Product1',
        price: 120
    },
    {
        id: 2,
        name: 'Product2',
        price: 80
    },
    {
        id: 3,
        name: 'Product3',
        price: 50
    },
    {
        id: 4,
        name: 'Product4',
        price: 840
    },
    {
        id: 5,
        name: 'Product5',
        price: 800
    },
    {
        id: 6,
        name: 'Product6',
        price: 860
    }

]

class BigTable extends React.Component{
    constructor(props, context){
        super(props, context)
    }
    render(){
        return(
            <BootstrapTable
               data = {products}
               striped
               hover
            >
            <TableHeaderColumn
               isKey
               dataField = 'id'
            >Product ID</TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'name'
            >Product Name
            </TableHeaderColumn>
            <TableHeaderColumn
               dataField = 'price'
            >Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default BigTable
