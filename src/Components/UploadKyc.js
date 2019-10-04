import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class UploadKyc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            phone: "",
            yes: false,
            no: false
        }
    }
    check_phone = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        const object = {
            phone: this.state.phone
        }
        this.setState({
            yes: true,
            array: [...this.state.array, object],
        });
       
    }
    get_phone_number=(e) =>{
        alert("KYC Verification Done")
    }

    

    get_result_1 = (e) => {
        this.setState({
            no: true,
        });
    }

    render() {
        return (
            <div>
                <div className="container " style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" >
                        <a class="navbar-brand" href="#"><img src="./logo.ico" alt="logo" class="mr-2"></img>PROPELLD</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link" href="#">HOME <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#process">PROCESS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" onClick={() => this.props.history.push(`/contactus`)}>CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", marginTop: "10%" }}>
                    <div className="row">
                        <h3>Is Applicant Aadhar linked to Moblie Number ?</h3>
                    </div>
                    <div>
                        <input type="radio" name="yes" value={this.state.yes} onClick={this.get_result} /> YES<br></br>
                        <input type="radio" name="no" value={this.state.no} onClick={this.get_result_1} /> NO<br></br>
                    </div>

                    {this.state.yes ? (
                        <div className="container-fluid">
                            <div className="row " >
                                <div class="form-group mt-5">
                                    <label for="phone">PHONE</label>
                                    <input type="text" value={this.state.phone} onChange={this.check_phone} name="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="ENTER NUMBER" />
                                    <button type="button" class="btn btn-primary rounded-pill mt-5" onClick={this.get_phone_number}>CHECK</button>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.no ? (
                        <div className="container-fluid">
                            <div className="row " >
                                <Link to="/upload_document" class="btn btn-primary rounded-pill mt-5" onClick={this.get_result_1}>PROCEED TO KYC</Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}