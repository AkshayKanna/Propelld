import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom';
import Homepage from "./Homepage"
import ApplyLoan from "./ApplyLoan"
import Earning from "./Earning"
import Congrats from "./Congrats"
// import CoApplicant from "./CoApplication"
import UploadKyc from "./UploadKyc"
import UploadDcouments from './UploadDocuments';
import NotEarning from "./NotEarning"
import CoApplication from"./CoApplication";

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/apply_loan" component={ApplyLoan}></Route>
                <Route exact path="/earning" component={Earning}></Route>
                <Route exact path="/not_earning" component={NotEarning}></Route>
                <Route exact path="/congrats" component={Congrats}></Route>
                <Route exact path="/co_application" component={CoApplication}></Route>
                <Route exact path="/upload_kyc" component={UploadKyc}></Route>
                <Route exact path="/upload_document" component={UploadDcouments}></Route>
            </div>
        );
    }
}
export default App;