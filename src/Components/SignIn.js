import React, { Component } from 'react';
import {NavLink,FormGroup, Input, Modal,ModalBody, ModalHeader,Form, Label, Button, Card, CardTitle, CardImg, Col } from 'reactstrap';
import '../Styles/homepage.css';
/**
 * TO DO LIST:
 * Form Validation
 * Form post 
 * Fetch for userdata from json
 * Remove Side Nav unless logged in
 * Footer Component
*/




    class SignIn extends Component
    {
        constructor(props)
        {
            super(props);
            this.state ={
                isModalOpen:false,
                isSignUpOpen:false
            }

            this.toggleModal = this.toggleModal.bind(this);
            this.toggleSignUp = this.toggleSignUp.bind(this);
    }


    toggleModal()
    {
        this.setState(
            {
                isSignUpOpen:false,
                isModalOpen:!this.state.isModalOpen
            }
        );
    }

    toggleSignUp()
    {
        this.setState(
            {
                isModalOpen:false,
                isSignUpOpen:!this.state.isSignUpOpen

            }
        );
    }



    render()
    {
        return(
            < >
               <Card className="container" id="logo">
               <h3 className="text-center font-weight-bold">SplitBill Application</h3>
                    <CardImg  src='/images/index.png'/>
               
               <div className="row">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-4">
                            <Button type="submit" class="btn btn-info" onClick={this.toggleSignUp}>
                                Sign Up
                            </Button>
                        </div>
                        <div className="col-lg-4">
                            <Button type="submit" class="btn btn-info" onClick={this.toggleModal}>
                                Login
                            </Button>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    
               </div>
               </Card>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor ="username">username</Label>
                            <Input type ="text" id="username" name="username"
                                innerRef ={(input)=>this.username = input}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor ="password">Password</Label>
                            <Input type ="text" id="password" name="password"
                                innerRef={(input)=>this.password = input}/>
                        </FormGroup>
                        </Form>
                        <FormGroup>
                        Don't Have an account yet.  
                        <div className="float-right">
                           <NavLink href="#" onClick={this.toggleSignUp }>Sign Up</NavLink>
                          </div>
                          </FormGroup>
                          <FormGroup>
                        <Button type="submit" value="submit" color="primary">Sign In</Button>
                        </FormGroup>
                    </ModalBody>
               </Modal>

               <Modal isOpen={this.state.isSignUpOpen} toggle={this.SignIn}>
                    <ModalHeader toggle = {this.toggleSignUp}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.handleSignIn}>
                            <FormGroup>
                                <Label htmlFor ="fname">First Name</Label>
                                <Input type ="text" id="fname" name="fname"
                                    innerRef ={(input)=>this.fname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="lname">Last Name</Label>
                                <Input type ="text" id="lname" name="lname"
                                    innerRef ={(input)=>this.lname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="username">UserName</Label>
                                <Input type ="text" id="username" name="username"
                                    innerRef ={(input)=>this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="password">Password</Label>
                                <Input type ="text" id="password" name="password"
                                    innerRef ={(input)=>this.password = input}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor ="password2">Confirm Password</Label>
                                <Input type ="text" id="password2" name="password2"
                                    innerRef ={(input)=>this.password2 = input}/>
                            </FormGroup>
                    
                                <Label htmlFor ="gender">Gender</Label>
                            <Col sm={10}>  
                
                            <FormGroup>
                                    <Label class="radio-inline">
                                        <Input type ="radio" name="gender" innerRef ={(input)=>this.gender = input}/>Male
                                    </Label><br/>
            
                                    <Label class="radio-inline">
                                        <Input type ="radio" id="gender" name="gender" innerRef ={(input)=>this.gender = input}/>Female
                                    </Label>
                            </FormGroup>
                                
                            </Col>
                                
                     
                        
                            <FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign In</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
               </Modal>
            </>

        );
    }

}

export default SignIn;