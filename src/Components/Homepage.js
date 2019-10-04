import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

class Homepage extends React.Component {
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
                                    <a class="nav-link" href="#Process">PROCESS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" onClick={() => this.props.history.push(`/contactus`)}>CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container" style={{ marginTop: "15%" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./massevent.png" alt="Events" className="img-fluid"></img>
                        </div>
                        <div className="col-md-6">
                            <h3 style={{ fontFamily: "Bitter, serif" }}>APPLY LOAN</h3>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                                Check the fees for your Institute and Course. Just answer a few quick questions on your personal, education and employment details.
                                </p>
                            <button to="/create" className="rounded-pill btn btn-warning pt-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}
                                onClick={() => this.props.history.push(`/apply_loan`)}>GET STARTED</button>
                        </div>
                    </div>
                </div>

                <div className="jumbotron bg-light" style={{ padding: "5%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 style={{ fontFamily: "Bitter, serif" }}>TAKE YOUR CLASSES AND REPAY MONTLY</h3>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                                    You can now join your classes. Repayments will be monthly but remember that there is no penalty to paying off your loan early.
                            </p>

                            </div>
                            <div className="col-md-6">
                                <img src="./pic1.png" alt="Events" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-3">
                    <h2 style={{ fontFamily: "Bitter, serif" }} id="Process">PROCESS</h2>
                </p>

                <div className="container-fluid">
                    <div className="row">
                        <div class="col-lg-4 col-sm-3 mt-5 col-md-4">
                            <div class="card bg-light border-0 py-3">


                                <div class="card-body">
                                    <h5 class="card-title text-center" style={{ fontFamily: "Bitter, serif" }}>APPLY LOAN</h5>
                                    <p class="card-text text-center" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "17px", }}>Sign Up with Google to start My Calendar.</p>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-4 col-sm-3 mt-5 col-md-4">
                            <div class="card bg-light border-0 py-3">
                                {/* <img src="./create.png" class="card-img-top rounded-pill" alt="Login" style={{ width: "120px", alignSelf: "center" }} /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-center" style={{ fontFamily: "Bitter, serif" }}>ACCEPT TERMS & GET LOAN</h5>
                                    <p class="card-text text-center" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "17px", }}>Create a free Calendar to get started.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-3 mt-5 col-md-4 ">
                            <div class="card bg-light border-0 py-3">
                                {/* <img src="./cr_event.png" class="card-img-top rounded-pill" alt="Event" style={{ width: "120px", alignSelf: "center" }} /> */}
                                <div class="card-body">
                                    <h5 class="card-title text-center" style={{ fontFamily: "Bitter, serif" }}>TAKE CLASSES & REPAY MONTHLY</h5>
                                    <p class="card-text text-center" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "17px", }}>Add all day events
                                            to your Calendar. Set Reminder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;