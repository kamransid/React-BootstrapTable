import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Col } from 'react-bootstrap'


const products = []

function addProducts(quantity) {
    const startId = products.length
    for (let i = 0; i < quantity; i++) {
        const id = startId + i
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        })
    }
}

addProducts(150)

class BasicTable extends React.Component {
    render() {
        return (
            <Col xs={12} md={12} className="deviceList">
                <BootstrapTable
                    data={products}
                    striped
                    hover
                    condensed
                >
                    <TableHeaderColumn
                        dataAlign='center'
                        headerAlign='center'
                        dataSort
                        dataField='id'
                        isKey={true}
                    >Producut ID</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='name'
                    >Product Name</TableHeaderColumn>
                </BootstrapTable>
            </Col>
        )
    }
}

export default BasicTable