import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class Earning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            PANNumber: "",
            age: "",
            profession:"",
            montly:0,
            array1:[]
        }
    }
    check_pan = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        e.preventDefault()
        // const PANNumber = { PANNumber: this.state.PANNumber };
        console.log(this.state)

        var body = {
            PANNumber: this.state.PANNumber
        }

        axios({
            method: 'POST',
            url: 'http://863bbefc.ngrok.io/hack/2019/verification/pan/fetch',
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

    get_result_final=(e)=>{
        let obj = {
            age: this.state.age,
            profession: this.state.profession,
            montly:this.state.montly
        }

       
         
        this.setState({
            array1: [...this.state.array1, obj]
        })
    }

    // get_alert =()=>{
    //     alert("sorry monthly inc should be lesser than 10000")
    // }
    // {this.state.monthly <= 10000 ?<Link to="/congrats" class="btn btn-primary rounded-pill" onClick={this.get_result_final}>SUBMIT</Link>:<Link class="btn btn-primary rounded-pill"  onClick={this.get_alert}>SUBMIT</Link>} 

    render() {
        console.log(this.state.array)
        console.log(this.state.array1)
        console.log(this.state.montly)
        
        return (
            <div>
                <div className="container " style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", marginBottom: "5%" }}>
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

                <div class="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"}}>
                    <div class="container">
                        <h1 class="display-4">ONLINE REGISTRATION FORM</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row ">
                        <form className="col-lg-5 col-sm-5 col-md-6" >
                            <div class="form-group mt-5">
                                <label for="PANNumber">PAN NUMBER</label>
                                <input type="text" value={this.state.PANNumber} onChange={this.check_pan} name="PANNumber" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER PANNumber" />
                            </div>

                            <button type="button" class="btn btn-primary rounded-pill" onClick={this.get_result}>CHECK PAN</button>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {this.state.array.map((element) => {
                            return (
                                <form className="col-lg-5 col-sm-5 col-md-6" >
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">NAME</label>
                                        <input type="text" value={element.PayLoad.Name} name="name" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER NAME" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">FATHER'S NAME</label>
                                        <input type="text" value={element.PayLoad.FatherName} name="FatherName" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER FATHER NAME" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">DATE OF BIRTH</label>
                                        <input type="text" value={element.PayLoad.DateOfBirth} name="DateOfBirth" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER DATE OF BIRTH" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">PAN NUMBER</label>
                                        <input type="text" value={element.PayLoad.PANNumber} name="DateOfBirth" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER PANNUMBER" />
                                    </div>
                                </form>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <form className="col-lg-5 col-sm-5 col-md-6" >
                            {/* <div class="form-group mt-5">
                                <label for="age">I AM </label>
                                <input type="text" value={this.state.age} onChange={this.check_pan} name="age" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER AGE" />
                            </div> */}
                            <div class="form-group mt-5">
                                <label for="age">PROFESSION </label>
                                <input type="text" value={this.state.profession} onChange={this.check_pan} name="profession" class="form-control" id="profession" aria-describedby="emailHelp" placeholder="ENTER PROFESSION" />
                            </div>
                            <div class="form-group mt-5">
                                <label for="age">MONTLY INCOME </label>
                                <input type="text" value={this.state.montly} onChange={this.check_pan} name="montly" class="form-control" id="montly" aria-describedby="emailHelp" placeholder="ENTER MONTLY" />
                            </div>
                            <Link to="/congrats" class="btn btn-primary rounded-pill" onClick={this.get_result_final}>SUBMIT</Link>
                            {/* {this.state.monthly <= 10000 ?<Link to="/congrats" class="btn btn-primary rounded-pill" onClick={this.get_result_final}>SUBMIT</Link>:<Link class="btn btn-primary rounded-pill"  onClick={this.get_alert}>SUBMIT</Link>}  */}
                        </form>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="row">
                        {this.state.array.map((items, index) => {
                            return (
                                <div class="col-sm-6 mt-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h3 class="card-title">NAME: {items.PayLoad.Name}</h3>
                                            <hr></hr>
                                            <h5 class="card-text">ID: {items.PayLoad.FatherName}</h5>
                                            <hr></hr>
                                            <h5 class="card-text">QUANTITY: {items.PayLoad.DateOfBirth}</h5>
                                            <hr></hr>
                                            <h5 className="card-text">PAN NUMBER: {items.PayLoad.PANNumber}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
            </div>
        )
    }
}