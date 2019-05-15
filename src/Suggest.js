import React from 'react';
import './Suggest.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';



const Suggest= (props) => {

    let buttons= (<p class="texter2">currently waiting for response...</p>);

    if(props.showbutton){

        buttons= ( <Row>
        <Col xs={3}>
    <button onClick={() => props.handleparent(true)} className= {props.button1}>
    <FaThumbsUp/>
        </button>
        </Col>
        <Col>

        <button onClick={() => props.handleparent(false)} className={props.button2}>
            <FaThumbsDown></FaThumbsDown>
        </button>
        </Col>
        </Row> )
    }


    return (
        <Container>
    <div className='Suggest' >
    <p className="texter ">submitted suggestion form</p>
    <p className="texter3">{props.name}</p>
    <p className="texter3">{props.candystore}</p>
    <p className="texter3">{props.url}</p>
    <p className="texter3">{props.email}</p>
    <p className="texter3">{props.candy}</p>
    <p className="texter3">{props.price}</p>
    {buttons}

    </div>
    </Container>
        ) ;
}
export default Suggest