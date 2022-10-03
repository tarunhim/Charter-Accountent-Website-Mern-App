import React, { Component } from 'react'
import contact1 from "../Images/contact1.jpg"
import axios from 'axios';

export default class Contact extends Component {

    state = {
        name:'', 
        email:'', 
        message:'', 
        sent:false
    }

    // handel input
    handelName=(e)=>{
        this.setState({
            name:e.target.value
    })
    }
    handelEmail=(e)=>{
        this.setState({
            email:e.target.value
    })
    }
    handelMessage=(e)=>{
        this.setState({
            message:e.target.value
    })
    }

    // end of handel input
    formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name:this.state.name, 
            email:this.target.email, 
            message:this.target.message
        }

        axios.post('/api/forma', data)
        .then(res=>{
            this.setState({
                sent:true,
            }, this.resetForm())
        })
        .catch(()=>{
            console.log('message not sent');
        })
    }

    // for reseting insial data
    resetForm=()=>{
        this.setState({
            name:'', 
            email:'', 
            message:''
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }


    render() {
        return (
            <div>
                <section className="py-4 bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <h4>Contact</h4>
                            </div>
                            <div className="col-md-8 my-auto">
                                <h6 className="float-end">
                                    Home / Contact Us
                                </h6>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                        
                                        <div className="col-md-6" >
                                            <form onSubmit={this.formSubmit}>
                                                <h6>Contact Form</h6>
                                                <hr/>
                                                <div className="form-group">
                                                    <label className="mb-1">Full Name</label>
                                                    <input type="text" className="form-control" name="name" placeholder="Enter Full Name" value={this.state.name} onChange={this.handelName}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="mb-1">E-mail Address</label>
                                                    <input type="text" className="form-control" name="email" placeholder="E-mail Address" value={this.state.email} onChange={this.handelEmail} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="mb-1">Message</label>
                                                    <textarea rows="3" className="form-control" name="message" placeholder="Type your messages...." value={this.state.message} onChange={this.handelMessage}></textarea>
                                                </div>
                                                <div className={this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>
                                                <div className="form-group py-3">
                                                    <button type="submit" className="btn btn-primary shadow w-100">Send Message</button>
                                                </div>
                                            </form>
                                        </div>

                                    <div className="col-md-6 border-start">
                                        <img src={contact1} className="w-100 border-bottom" alt="Services"/>
                                        <h5 className="main-heading">Address Information</h5>
                                        <div className="underline"></div>
                                        <p>Old Kondli, Near Kalyanipuri Nala, Behind Canara Bank, Delhi-110096</p>
                                        <p>+91-8127976296</p>
                                        <p>suraj888999@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
            </div>
        );
    }
}
