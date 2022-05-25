import React from 'react'
import { Card } from 'react-bootstrap'
import './Shop.css'

function Shop() {
    return (
        <div className="shop">
            <div className="shop__heading">
                <span></span>
                <h2>shop</h2>
                <span></span>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Card
                        bg="warning"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card
                        bg="danger"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card
                        bg="success"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card
                        bg="primary"
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Shop;