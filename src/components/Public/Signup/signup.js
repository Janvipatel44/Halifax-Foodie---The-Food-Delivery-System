import React, { useState } from 'react';
import { validateName, validateEmail, validatePassword, validateConfirmPass, validateAnswers } from './signupValidations';
import { useHistory } from 'react-router-dom';
import signupService from '../../../Services/Public/signup.service';

const Signup = () => {

    const history = useHistory();


    const [user, setUser] = useState();
    const [formErr, setFormErrs] = useState({ FirstNameError: "", LastNameError: "", EmailError: "", PasswordError: "", ConfirmPasswordError: "", Answer1Error: "", Answer2Error: "" });


    function signup(e){

        console.log(" in sign up method");
        alert("Registered successfully");


        e.preventDefault();
        // signupService.signupUser(user).then((response)=>{
        //     console.log(response.data.success);
        //     if(response.data.success == true){
        //         alert("Registered successfully");
        //         history.push("/login");    
        //     }
        // }).catch((error) => {
        //     console.log(error);
        //     alert("try after some time with other email address");
      
        // });
    }

    function handleChange(e) {

        const { id, value } = e.target;

        switch (id) {
            case 'firstname':
                if (validateName(value)) {
                    setFormErrs({ ...formErr, FirstNameError: "First Name should not contain numbers or symbols" })

                } else {
                    delete formErr.FirstNameError
                }
                setUser({ ...user, firstName: value.trim() })
                break;

            case 'lastname':
                if (validateName(value)) {
                    setFormErrs({ ...formErr, LastNameError: "Last Name should not contain numbers or symbols" })
                } else {
                    delete formErr.LastNameError
                }
                setUser({ ...user, lastName: value.trim() })
                break;

            case 'email':
                if (validateEmail(value)) {
                    setFormErrs({ ...formErr, EmailError: "Enter a valid Email (eg: a@a.com)" })
                } else {
                    delete formErr.EmailError
                }
                setUser({ ...user, email: value.trim() })
                break;

            case 'password':
                if (validatePassword(value)) {
                    setFormErrs({ ...formErr, PasswordError: "Password should contain minimum 8 Characters , Atleast One Letter and One Symbol" })
                } else {
                    delete formErr.PasswordError
                }
                setUser({ ...user, password: value.trim() })
                break;

            case 'cnfPassword':
                if (validateConfirmPass(user.password, value)) {
                    setFormErrs({ ...formErr, ConfirmPasswordError: "Re-entered Password Does not matches with previous one" })
                } else {
                    delete formErr.ConfirmPasswordError
                }
                setUser({ ...user, confirmpassword: value.trim() })
                break;

            case 'answer1':
                if (validateAnswers(value)) {
                    setFormErrs({ ...formErr, Answer1Error: "please enter security answer 1 " })
                } else {
                    delete formErr.Answer1Error
                }
                setUser({ ...user, Answer1: value.trim() })
                break;

            case 'answer2':
                if (validateAnswers(value)) {
                    setFormErrs({ ...formErr, Answer2Error: "please enter security answer 2" })
                } else {
                    delete formErr.Answer2Error
                }
                setUser({ ...user, Answer2: value.trim() })
                break;

            case 'question1':
                console.log("--question1"+value)
                setUser({ ...user , Question1 : value.trim()})
            case 'question2':
                setUser({...user , Question2 : value.trim() })

            default:
                break;
        }
    }


    return (<div className="row justify-content-center">
        <div className="col-md-6 col-sm-8">
            <h1 className="text-center mt-5">Signup</h1>
            <div className="mt-4">
                <form>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 form-group">
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" onBlur={handleChange} onChange={handleChange} />
                            <small id="firstnameHelp" className="form-text text-danger">{formErr.FirstNameError}</small>
                        </div>
                        <div className="col-md-6 col-sm-12 form-group">
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" onBlur={handleChange} onChange={handleChange} />
                            <small id="lastnameHelp" className="form-text text-danger">{formErr.LastNameError}</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Email" onBlur={handleChange} onChange={handleChange} />
                        <small id="emailHelp" className="form-text text-danger">{formErr.EmailError}</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" onBlur={handleChange} onChange={handleChange} />
                        <small id="passwordHelp" className="form-text text-danger">{formErr.PasswordError}</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="cnfPassword" placeholder="Confirm Password" onBlur={handleChange} onChange={handleChange} />
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.ConfirmPasswordError}</small>
                    </div>

                    <div className="form-group">
                        <select className="form-control" id="question1" onBlur={handleChange} onChange={handleChange} >
                            {/* <option value = "default">Select Security Question 1</option> */}
                            <option  value = "1" default>What was your first car? </option>
                            <option value = "2">What month were you born?</option>
                            <option value = "3">What is the first name of your best friend in high school?</option>

                            <option value= "4">Where did you vacation last year?</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="answer1" placeholder="Answer for question 1" onBlur={handleChange} onChange={handleChange} />
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.Answer1Error}</small>
                    </div>

                    <div className="form-group">
                        <select className="form-control" id="question2" onBlur={handleChange} onChange={handleChange} >
                        {/* <option value = "default" default>Select Security Question 2</option> */}
                            <option  value= "1" default>What is your mother’s maiden name? </option>
                            <option value = "2">Where did you go to high school/college?</option>
                            <option value= "3">What city were you born in?</option>
                            <option value = "4">Where is your favorite place to vacation?</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="answer2" placeholder="Answer for question 2" onBlur={handleChange} onChange={handleChange} />
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.Answer2Error}</small>
                    </div>


                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary" placeholder="Submit" disabled={Object.entries(formErr || {}).length > 0} onClick={ (e)=>signup(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default Signup;