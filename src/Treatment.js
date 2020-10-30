import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Treatment.css'

function Treatment({disease, description, doctor, hospital, medicine}) {
    return (
        <div>
            <Card style={{border: '2px solid #2e7d32', backgroundColor: '#fafafa'}}>
                <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{backgroundColor: '#1de9b6', marginBottom: '20px',borderRadius:'10px'}}>
                            <Card style={{ width: '50rem' }}>
                            
                            <Card.Body>
                                <Card.Title><strong>Cured:</strong> {disease}</Card.Title>
                                <Card.Text><strong>Treatment: </strong> 
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><strong>Treated By:</strong> Dr. {doctor}</ListGroupItem>
                                <ListGroupItem><strong>Treated At:</strong> {hospital} </ListGroupItem>
                                <ListGroupItem><strong>Medicines:</strong> {medicine}</ListGroupItem>
                            </ListGroup>
                            </Card>
                    </ListGroup.Item>

                </ListGroup>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Treatment