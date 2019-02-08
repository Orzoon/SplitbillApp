import React, { Component } from 'react';
import {FormGroup, Input, Modal, Button, Card, CardTitle, CardImg} from 'reactstrap';
import '../Styles/homepage.css';

import {SignIndeets} from '../shared/SignIndeets';


class SignIn extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            isModalOpen:false,
        }

        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal()
    {
        this.setState(
            {
                isModalOpen:!this.state.isModalOpen
            }
        );
    }



    render()
    {
        return(
            <div >
               <Card className="container" id="logo">
               <CardTitle className="text-center">SplitBill Application</CardTitle>
                    <CardImg  src='/images/index.png'/>
               
               <div className="row">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-4">
                            <Button type="submit" class="btn btn-info">
                                Sign In
                            </Button>
                        </div>
                        <div className="col-lg-4">
                            <Button type="submit" class="btn btn-info">
                                Login
                            </Button>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    
               </div>
               </Card>
            </div>

        );
    }

}

export default SignIn;