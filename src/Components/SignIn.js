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
                     
                    firstname:'',
                    lastname:'',
                    username:'',
                    email:'',
                    gender:'',
                    password:'',
                    password2:'',    
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
    
   /* validate_signIn(firstname, lastname, telnum,username, email,password1,password2,gender) 
    {

        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
    }*/

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

    validate_SignIn(firstname,lastname,username,password1,password2,email,gender)
    {
        
       
        const errors={
            firstname:'',
            lastname:'',
            username:'',
            password1:'',
            password2:'',
            email:'',
            gender:''
        };

        if (this.state.SignIn_touched.firstname&&firstname.length<=3)
           { 
               errors.firstname='Firstname needs to be greater than three characters';
               console.log(this.state.firstname);
        }
        
        if (this.state.SignIn_touched.lastname&& lastname.length<=3)
          {  errors.lastname='Lastname needs to be greater than three characters';
          console.log(this.state.SignIn_touched.lastname);
        }
        if (this.state.SignIn_touched.username && username.length <=3)
            errors.username ='Username needs to be greater than three characters';
        
           const reg =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (this.state.SignIn_touched.password && !reg.test(password1))
            {errors.password1 = 'Password should have atleast one number and a special character with 8 characters long';
        console.log(password1);}
            

        if(password1!==password2)
            errors.password2='Passwords donot match';

        const regem=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.SignIn_touched.email && !regem.test(email))
            errors.email ="Please enter a valid email";


        return errors;

    }

    handleBlur_Login = (field) => (evt) =>{
        this.setState({
                Login_touched: { ...this.state.Login_touched, [field]:true},
            });
    }

    handleBlur_SignIn= (field) => (evt) =>{
        this.setState({
            SignIn_touched:{...this.state.SignIn_touched, [field]:true},

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
        
       const errorssignIn= this.validate_SignIn(this.state.firstname,this.state.lastname,this.state.username,this.state.password,this.state.password2,this.state.email,this.state.gender);
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
                                 value={this.state.login_password}
                                 valid={errors.password === ''}
                                 invalid={errors.username !== ''}
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
                                <Label htmlFor ="firstname">First Name</Label>
                                <Input type ="text" id="firstname" name="firstname"
                                    placeholder="Firstname"
                                    value={this.state.firstname}  
                                    valid ={errorssignIn.firstname ===''}
                                    invalid={errorssignIn.firstname !==''}             
                                    onBlur={this.handleBlur_SignIn('firstname')}
                                    onChange={this.handleInputChange}
                                    />

                                <FormFeedback>{errorssignIn.firstname}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="lastname">Last Name</Label>
                                <Input type ="text" id="lastname" name="lastname"
                                    placeholder="LastName"
                                    value={this.state.lastname}  
                                    valid ={errorssignIn.lastname ===''}
                                    invalid={errorssignIn.lastname !==''}             
                                    onBlur={this.handleBlur_SignIn('lastname')}
                                    onChange={this.handleInputChange}/>
                           
                            <FormFeedback>{errorssignIn.lastname}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="username">UserName</Label>
                                <Input type ="text" id="username" name="username"
                                     placeholder="LastName"
                                     value={this.state.username}  
                                     valid ={errorssignIn.username ===''}
                                     invalid={errorssignIn.username !==''}             
                                     onBlur={this.handleBlur_SignIn('username')}
                                     onChange={this.handleInputChange}/>
                            
                             <FormFeedback>{errorssignIn.username}</FormFeedback>
                             </FormGroup>

                             <FormGroup>
                                <Label htmlFor ="email">Email</Label>
                                <Input type ="email" id="email" name="email"
                                     placeholder="Email"
                                     value={this.state.email}  
                                     valid ={errorssignIn.email ===''}
                                     invalid={errorssignIn.email !==''}             
                                     onBlur={this.handleBlur_SignIn('email')}
                                     onChange={this.handleInputChange}/>
                            
                             <FormFeedback>{errorssignIn.email}</FormFeedback>
                             </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="password">Password</Label>
                                <Input type ="text" id="password" name="password"
                                    placeholder="Password"
                                    value={this.state.password}  
                                    valid ={errorssignIn.password1 ===''}
                                    invalid={errorssignIn.password1 !==''}             
                                    onBlur={this.handleBlur_SignIn('password')}
                                    onChange={this.handleInputChange}/>
                           
                            <FormFeedback>{errorssignIn.password1}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor ="password2">Confirm Password</Label>
                                <Input type ="text" id="password2" name="password2"
                                    placeholder="Password"
                                    value={this.state.password2}  
                                    valid ={errorssignIn.password2 ===''}
                                    invalid={errorssignIn.password2 !==''}             
                                    onBlur={this.handleBlur_SignIn('password2')}
                                    onChange={this.handleInputChange}/>

                                 <FormFeedback>{errorssignIn.password2}</FormFeedback>
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