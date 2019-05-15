import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Suggest from './Suggest'
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

class App extends Component {
constructor(props){
super(props);
this.handleClickShowAlert=this.handleClickShowAlert.bind(this);
this.handleChildData=this.handleChildData.bind(this);
this.state= {
    candy: [
{ name: "", candystore: "", url: "", email: "", candy:"", price:""}
    ],
    showcandy: false,
    showfile: false,
    fromChild: "",
    showingAlert: false,
    button1: "btn-thumbs",
    button2: "btn-thumbs2"
  }}


  handleClickShowAlert=()=> {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);
  }



  handleSubmit=(e)=> {
    e.preventDefault();
    this.setState({showfile: true, showcandy:true})
    this.handleClickShowAlert()
    }

    handleChildData(data) {
      this.setState({
        fromChild: data
      });
      if(data){
        this.setState({
          button1: "green",
          button2: "btn-thumbs2"
        })}
        else{
          this.setState({
            button1: "btn-thumbs",
            button2: "red"
          })
      }
    }
  
  handleChange= (event) => {
    const candy= {
      ...this.state.candy
    }
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    candy[fieldName]=fieldVal;
    this.setState({candy:candy})
  }

  render() {
    let file= (

<Suggest showbutton={false}></Suggest>

    );
    let fileoutput= null;

    let iconbutton= (<div className= "btn-thumbs5">
    <FaThumbsUp/>
        </div> )

    let iconbutton2= ( <div className= "btn-thumbs6">
    <FaThumbsDown></FaThumbsDown>
</div>)

    let buttonoutput= (
      <div className= "buttonholder">
      <Button variant="primary" type="submit" block >
              submit
            </Button>
            </div>
            );
            
      let alert= null;

    if (this.state.showfile) {
      file= (
       <div>
    <Suggest 
    name={this.state.candy.name} 
    candystore={this.state.candy.candystore}  
    url={this.state.candy.url}  
    email={this.state.candy.email}  
    candy={this.state.candy.candy}  
    price={this.state.candy.price} 
    handleparent= {this.handleChildData}
    showbutton= {true}
    button1=  {this.state.button1}
    button2= {this.state.button2}
    />   
       </div>
     
      );
     
if(this.state.fromChild != ""  || this.state.fromChild===false){
if(this.state.fromChild){
iconbutton= (
<div className= "btn-thumbs3">
    <FaThumbsUp/>
        </div>
);
        }
else{
iconbutton2= (
  <div className= "btn-thumbs4">
  <FaThumbsDown></FaThumbsDown>
</div>
);

        };

      }
        
      fileoutput= (
      <Container>
        <Row>
      <Col xs={7} md={7} lg={5} xl= {4}><h1 className="response"> candy store rep response: </h1></Col>
      <Col xs={1.3} >
    {iconbutton}
          </Col>
          <Col>
         {iconbutton2}
          </Col>
          </Row>
          </Container>
          );

          buttonoutput=null;

  if(this.state.showingAlert){
    alert = (
      <div>
      <div className="fadeMe">
     Form Submitted
      </div>
      <div className="fadeMe2">
     <FaCheck></FaCheck>
       </div>
       </div>
    )



  }



          
    }

    return (
      <div className="App">
       {alert}
      <Container>
      <Row ><div className="totheleft"><h1 className="boldtext">Candy Store Submission Form</h1></div></Row>
      <Row>
      <Col xs={7} md={7} >
      <div className= "Box">
      <h1 className="lesstext">suggestion submission form</h1>
      <h1 className="lessertext">enter your suggestion details:</h1>
      <Form onSubmit= {this.handleSubmit}>

      <Form.Group controlId="candyname">
        <Form.Label>Name:</Form.Label>
        <Form.Control required size="sm" name="name" type="text" placeholder="enter your name..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy} />
      </Form.Group>
      
      <Form.Group controlId="candycompany">
        <Form.Label>Company:</Form.Label>
        <Form.Control required size="sm" name="candystore" type="text" placeholder="enter your company..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy} />
      </Form.Group>

      <Form.Group controlId="candyurl">
        <Form.Label>Company Website:</Form.Label>
        <Form.Control required size="sm" name="url" type="url" placeholder="enter your company url..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy }  />
      </Form.Group>

      <Form.Group controlId="candyemail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control required size="sm" name="email" type="email" placeholder="enter your email address..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy}  />
      </Form.Group>

      <Form.Group controlId="candytype">
        <Form.Label>Top Candy Specialty:</Form.Label>
        <Form.Control required  size="sm" name="candy" type="text" placeholder="enter your candy speciality..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy}  />
      </Form.Group>

      <Form.Group controlId="candyprice">
        <Form.Label>Price per Unit:</Form.Label>
        <Form.Control required size="sm" name="price" type="number" placeholder="enter your suggested price..." onChange={this.handleChange.bind(this)} readOnly = {this.state.showcandy}  />
      </Form.Group>
    
      {buttonoutput}

      <div>{fileoutput}</div>

    </Form>
    </div>
    </Col>
   
    <Col>
  {file}
    </Col>

    </Row>
    </Container>
    </div>
    );
  }
}

export default App;


