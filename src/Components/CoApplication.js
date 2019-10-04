import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class NotEarning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            PANNumber: "",
            father_name:"",
            profession:"",
            name: "",
            age: "",
            exprience:0,
            phone:""
        }
    }
    check_details = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        e.preventDefault()
        const PANNumber = { PANNumber: this.state.PANNumber };
        const name = { name: this.state.name };
        const age = { PANNumber: this.state.age };
        console.log(this.state)

        const object = {
            // name:this.state.name,
            // age:this.state.age,
            father_name:this.state.father_name,
            // profession:this.state.profession,
            exprience:this.state.exprience,
            phone:this.state.phone
        }
        this.setState({
            array: [...this.state.array, object]
        })
    }
// get_result_final = (e) => {
//     let obj = {
//         age: this.state.age,
//         profession: this.state.profession,
//         montly: this.state.montly
//     }



//     this.setState({
//         array1: [...this.state.array1, obj]
//     })
// }

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

            <div class="jumbotron jumbotron-fluid" style={{ backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" }}>
                <div class="container">
                    <h1 class="display-4">ONLINE REGISTRATION FORM FOR NON EARNING</h1>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    <form className="col-lg-5 col-sm-5 col-md-6" >
                        <div class="form-group mt-5">
                            <label for="PANNumber">FATHER NAME</label>
                            <input type="text" value={this.state.father_name} onChange={this.check_details} name="father_name" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER FATHER NAME" />
                        </div>
                        <div class="form-group mt-5">
                            <label for="name">EXPERIENCE</label>
                            <input type="text" value={this.state.exprience} onChange={this.check_details} name="exprience" class="form-control" id="name" aria-describedby="emailHelp" placeholder="ENTER EXPERIENCE" />
                        </div>
                        <div class="form-group mt-5">
                            <label for="PANNumber">PHONE</label>
                            <input type="text" value={this.state.phone} onChange={this.check_details} name="phone" class="form-control" id="age" aria-describedby="emailHelp" placeholder="ENTER PHONE NUMBER" />
                        </div>
            

                        {/* <button type="button" class="btn btn-primary rounded-pill" onClick={this.get_result}>CO-APPLICATION FORM</button> */}
                        <Link to="/co_application" class="btn btn-primary rounded-pill ml-3" onClick={this.get_result}>CONTINUE</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
}