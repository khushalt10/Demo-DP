import React from 'react'
import { Button, Card, CardColumns, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AttendingPatients.css'

function AttendingPatients({name, image, phone, disease, allergy, condition, medicine}) {
    return (

        // <ListGroup style={{border: '1px solid lightgray'}}> 
        //     <ListGroup.Item style={{ backgroundColor: '#eeeeee'}}>
        //         <CardColumns>
        //         <Card bg="primary" text="dark" style={{ width: '260px', borderRadius: '10px', border: '1px solid gray' }}>
        //         <Card.Img className="patient__image" variant="top" src={image} />
        //         <Card.Body>
        //             <Card.Title><strong>Name: </strong> {name}</Card.Title>
        //             <Card.Text>
        //                 <strong>Disease: </strong>{disease}
        //             </Card.Text>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroupItem><strong>Condition:</strong> {condition}</ListGroupItem>
        //             <ListGroupItem><strong>Allegry:</strong> {allergy}</ListGroupItem>
        //             <ListGroupItem><strong>Medicines: </strong>{medicine}</ListGroupItem>
        //         </ListGroup>
        //         <Card.Body>
        //             <Card.Link href="#">View Profile</Card.Link>
        //             <Card.Link href="#">Edit Details</Card.Link>
        //         </Card.Body>
        //         </Card>

                
        //         </CardColumns>

        //         </ListGroup.Item>

                
        //     </ListGroup>
        <CardColumns>
                    
                        
                        <div className="card">
                            <img src={image}
                                alt="Not found" />
                            <div className="card__desc">
                                <h3>Name: {name}</h3>
                                <h3>Allergy: {allergy}</h3>
                                <h3>Condition: {condition}</h3>
                                <h3>Medicines: {medicine}</h3>
                                <h3>Disease: {disease}</h3>
                                <div className="but">
                                <Button size="sm">View Profile</Button>
                                <Button size="sm">Edit Details</Button>
                                </div>
                            </div>
                    
                        </div> 
                       
                        
                        <div className="card">
                            <img src={image}
                                alt="Not found" />
                            <div className="card__desc">
                                <h3>Name: {name}</h3>
                                <h3>Allergy: {allergy}</h3>
                                <h3>Condition: {condition}</h3>
                                <h3>Medicines: {medicine}</h3>
                                <h3>Disease: {disease}</h3>
                                <div className="but">
                                <Button size="sm">View Profile</Button>
                                <Button size="sm">Edit Details</Button>
                                </div>
                            </div>
                    
                        </div> 

                      
                        
                         <div className="card">
                             <img src={image}
                                 alt="Not found" />
                             <div className="card__desc">
                                 <h3>Name: {name}</h3>
                                 <h3>Allergy: {allergy}</h3>
                                 <h3>Condition: {condition}</h3>
                                 <h3>Medicines: {medicine}</h3>
                                 <h3>Disease: {disease}</h3>
                                 <div className="but">
                                 <Button size="sm">View Profile</Button>
                                 <Button size="sm">Edit Details</Button>
                                 </div>
                             </div>
                     
                         </div> 
 
                     
                                                
                        <div className="card">
                            <img src={image}
                                alt="Not found" />
                            <div className="card__desc">
                                <h3>Name: {name}</h3>
                                <h3>Allergy: {allergy}</h3>
                                <h3>Condition: {condition}</h3>
                                <h3>Medicines: {medicine}</h3>
                                <h3>Disease: {disease}</h3>
                                <div className="but">
                                <Button size="sm">View Profile</Button>
                                <Button size="sm">Edit Details</Button>
                                </div>
                            </div>

                        </div> 

                     
                                                
                        <div className="card">
                            <img src={image}
                                alt="Not found" />
                            <div className="card__desc">
                                <h3>Name: {name}</h3>
                                <h3>Allergy: {allergy}</h3>
                                <h3>Condition: {condition}</h3>
                                <h3>Medicines: {medicine}</h3>
                                <h3>Disease: {disease}</h3>
                                <div className="but">
                                <Button size="sm">View Profile</Button>
                                <Button size="sm">Edit Details</Button>
                                </div>
                            </div>

                        </div> 

                
        </CardColumns>
                    
                   
                    
                   
                 
    )
}

export default AttendingPatients
