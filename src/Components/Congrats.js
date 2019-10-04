import React from "react"
import { Route, Redirect, Link } from 'react-router-dom';

class Congrats extends React.Component {
    render() {
        return (
            <div>
                <p className='text-center container'>
                    <img
                        className='mb-3 mt-4'
                        src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-4.png'
                        alt='...'
                        style={{ width: "123px" }}
                    />
                    <h1 style={{ fontFamily: "'Montserrat', sans-serif"}}>Congratulations!</h1>
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif"}}>You staisfy our minimum eligibility criteria for loan processing. Please complete your KYC and
                    document verfication process to complete the loan application.</h4>
                    <Link to="/upload_kyc" className="btn btn-outline-primary btn-lg rounded-pill mt-5">CONTINUE</Link>
                </p>
            </div>
        );
    }
}
export default Congrats;