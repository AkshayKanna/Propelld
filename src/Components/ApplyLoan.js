import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

{/*Component to Apply Loan */}
class ApplyLoan extends React.Component {
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
                <div className="container" style={{ marginTop: "10%" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./apply.svg" alt="Events" className="img-fluid"></img>
                        </div>
                        <div className="col-md-6">
                            <h3 style={{ fontFamily: "Bitter, serif" }}>REGISTER THE FORM</h3>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                                To aplly for the form you have to click on either Earning person or Not Earning.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <button type="button" className="btn btn-warning rounded-pill btn-lg" data-toggle="tooltip" data-placement="top" title="People Who Earns Money" onClick={() => this.props.history.push(`/earning`)}>EARNING</button>
                        <button type="button" className="btn btn-warning rounded-pill btn-lg ml-2" data-toggle="tooltip" data-placement="top" title="People Who Not Earns Money" onClick={() => this.props.history.push(`/not_earning`)}>NOT EARNING</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApplyLoan;