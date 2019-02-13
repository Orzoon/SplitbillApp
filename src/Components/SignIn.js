import React, { Component } from 'react';
import {NavLink,FormGroup,FormFeedback, Input, Modal,ModalBody, ModalHeader,Form, Label, Button, Card, CardTitle, CardImg, Col } from 'reactstrap';
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
                isSignUpOpen:false,
                
                SignIn:{
                    firstname:'',
                    lastname:'',
                    username:'',
                    email:'',
                    gender:'',
                    password:'',
                    password2:''
                },

               
                    login_username:'',
                    login_password:'',
                
                
                SignIn_touched:
                {
                    firstname:false,
                    lastname:false,
                    username:false,
                    email:false,
                    gender:false,
                    password:false,
                    password2:false
                },

                Login_touched:{
                    username:false,
                    password:false
                }
     
            }

            this.toggleModal = this.toggleModal.bind(this);
            this.toggleSignUp = this.toggleSignUp.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleBlur_Login= this.handleBlur_Login.bind(this);
    }
    
    validate_signIn(firstname, lastname, telnum,username, email,password1,password2,gender) 
    {

        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
    }

    validate_Login(username,password)
    {
        const errors={
            username:'',
            password:'',
        };
        

        if (this.state.Login_touched.username && username.length<=3)
            {
                    errors.username='Username needs to be greater then three characters';
                
            }


        if (this.state.Login_touched.password)
            {
                errors.password='Please enter password';
                console.log("password state "+this.state.Login_touched.password);

            }

    

        return errors;
            
    }

    handleBlur_Login = (field) => (evt) =>{
        this.setState({
                Login_touched: { ...this.state.Login_touched, [field]:true},
            });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' 
                            ? target.checked 
                            : target.value;
        const name = event.target.name;

        this.setState({
            [name]:value
        });

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
        const errors = this.validate_Login(this.state.login_username,this.state.login_password);
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
                            <Label htmlFor ="login_username">Username</Label>
                            <Input type ="text" id="login_username" name="login_username"
                                placeholder="Username"
                                value={this.state.login_username}
                                valid={errors.username === ''}
                                invalid={errors.username !== ''}
                                onBlur={this.handleBlur_Login('username')}
                                onChange={this.handleInputChange}/>

                            <FormFeedback>{errors.username}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor ="login_password">Password</Label>
                            <Input type ="text" id="login_password" name="login_password"
                                 placeholder="Password"
                                 valid={errors.password === ''}
                                 invalid={errors.username !== ''}
                                 value={this.state.login_password}
                                 onBlur={this.handleBlur_Login('password')}
                                 onChange={this.handleInputChange}/>
                            
                            <FormFeedback>{errors.password}</FormFeedback>
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