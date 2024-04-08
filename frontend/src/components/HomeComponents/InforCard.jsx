import React from "react";
import Card from 'react-bootstrap/Card';

const infoStyle = {
    // width: '18rem', 
    textAlign: 'center'
}

function InforCard(props) {
    return (
        <Card style={infoStyle} className={props.className}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default InforCard;