import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class UploadDcouments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            FrontImageUrl:"",
            BackImageUrl:""
        }
    }
    upload_document = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        e.preventDefault()
        const FrontImageUrl = { FrontImageUrl: this.state.FrontImageUrl };
        const BackImageUrl={BackImageUrl: this.state.BackImageUrl}
        console.log(this.state)

        var body = {
            FrontImageUrl: this.state.FrontImageUrl,
            BackImageUrl:this.state.BackImageUrl
        }

        axios({
            method: 'POST',
            url: 'http://863bbefc.ngrok.io/hack/2019/verification/aadhaar/extract',
            data: body,
        })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.PayLoad)
                const object = {
                    PayLoad: response.data.PayLoad,
                }
                this.setState({
                    array: [...this.state.array, object]
                })
            })
            .catch((err) => alert(err))
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

            
                <div className="container" style={{marginTop:"10%"}}>
                    <div className="row">
                        <h1>"USER SHOULD UPLOAD THE AADHAR IMAGE URL"</h1>
                        <form className="col-lg-5 col-sm-5 col-md-6" >
                            <div class="form-group mt-5">
                                <label for="age">FRONT IMAGE URL </label>
                                <input type="text" value={this.state.FrontImageUrl} onChange={this.upload_document} name="FrontImageUrl" class="form-control" id="profession" aria-describedby="emailHelp" placeholder="ENTER FRONT IMAGE URL" />
                            </div>
                            <div class="form-group mt-5">
                                <label for="age">BACK IMAGE URL</label>
                                <input type="text" value={this.state.BackImageUrl} onChange={this.upload_document} name="BackImageUrl" class="form-control" id="montly" aria-describedby="emailHelp" placeholder="ENTER BACK IMAGE URL " />
                            </div>
                            <button class="btn btn-primary rounded-pill" onClick={this.get_result}>SUBMIT</button>
                        </form>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <table class="table text-center table-bordered">
                        <thead class="thead-light ">
                            <tr>
                                <th scope="col"> NAME</th>
                                <th scope="col"> Gender</th>
                                <th scope="col">DateOfBirth</th>
                                <th scope="col">Address</th>
                                <th scope="col">Pincode</th>
                            </tr>
                        </thead>
                        <tbody >

                            {this.state.array.map((items, index) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{items.PayLoad.Name}</td>
                                            <td>{items.PayLoad.Gender}</td>
                                            <td>{items.PayLoad.DateOfBirth}</td>
                                            <td>{items.PayLoad.Address}</td>
                                            <td>{items.PayLoad.PinCode}</td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}