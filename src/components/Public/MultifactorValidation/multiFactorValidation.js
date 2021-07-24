import React, { Component, useState, useEffect } from 'react';
import loginService from '../../../Services/Public/login.service';
import { useHistory } from 'react-router-dom';
import { validateName, validateEmail, validatePassword, validateConfirmPass, validateAnswers } from '../Signup/signupValidations';


const MultiFactorValidation = () => {


    const [user, setUser] = useState();
    const history = useHistory();
    const [question1, setQuestion1] = useState();
    const [question2, setQuestion2] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [formErr, setFormErrs] = useState({ Answer1Error: "", Answer2Error: "" });



    useEffect(() => {
        console.log(" in use effect method")
        setQuestion1(localStorage.getItem("question1"));
        setQuestion2(localStorage.getItem("question2"));
        setAnswer1(localStorage.getItem("answer1"));
        setAnswer2(localStorage.getItem("answer2"));
    }, [])

    function handleChange(e) {
        const { id, value } = e.target;
        switch (id) {
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

    function handlelogin(event) {

        event.preventDefault();

        if(user.Question1 == null || user.Question1 == "" || user.Question1 == undefined){
            user.Question1 = "1"
        }
        if (user.Question2 == null || user.Question2 == "" || user.Question2 == undefined){
            user.Question2 = "1"
        }

        if(user.Question1 != question1.trim()){
            console.log("1")
            alert("Your answer and question is wrong! Try again ");
        }
        else if( user.Question2 != question2.trim()){
            console.log("2")
            alert("Your answer and question is wrong! Try again ");
        }
        else if(user.Answer1 != answer1.trim()){
            console.log("3")
            alert("Your answer and question is wrong! Try again ");
        }
        else if( user.Answer2 != answer2.trim()){
            console.log("4")
            alert("Your answer and question is wrong! Try again ");
        }
        else {
            localStorage.setItem("isUserLoggedin",true);
            history.push("/buyFoods");
            window.location.reload();
            alert(" login successfully");
        }



    }

    return (<div className="row justify-content-center" >
        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <h1 className="text-center mt-5">Security Questions</h1>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <select className="form-control" id="question1" onBlur={handleChange} onChange={handleChange} >
                            <option value="1" default>What was your first car? </option>
                            <option value="2">What month were you born?</option>
                            <option value="3">What is the first name of your best friend in high school?</option>
                            <option value="4">Where did you vacation last year?</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="answer1" placeholder="Answer for question 1" onBlur={handleChange} onChange={handleChange} />
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.Answer1Error}</small>
                    </div>

                    <div className="form-group">
                        <select className="form-control" id="question2" onBlur={handleChange} onChange={handleChange} >
                            <option value="1" default>What is your mother’s maiden name? </option>
                            <option value="2">Where did you go to high school/college?</option>
                            <option value="3">What city were you born in?</option>
                            <option value="4">Where is your favorite place to vacation?</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="answer2" placeholder="Answer for question 2" onBlur={handleChange} onChange={handleChange} />
                        <small id="cnfPasswordHelp" className="form-text text-danger">{formErr.Answer2Error}</small>
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary" onClick={(e) => handlelogin(e)} placeholder="Submit" disabled={Object.entries(formErr || {}).length > 0}>Submit</button>
                    </div>
                   
                    
                </form>
            </div>
        </div>
    </div>);
}

export default MultiFactorValidation;