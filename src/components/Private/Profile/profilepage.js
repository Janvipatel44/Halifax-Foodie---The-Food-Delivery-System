import React, { Component } from 'react';
import profileimg from '../../../assests/images/profileimg.jpeg'
import './profilepage.css'

const ProfilePage = () => {
    return ( 
    <div className="container profile-page">
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <div className="profile-img">
                    <img src={profileimg} alt=""></img>
                    <div className="file btn btn-lg btn-primary">
                        Change Photo
                        <input type="file" name="file"/>
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-sm-9">
                <div className="profile-head">
                    <h5>Sarthak Patel</h5>
                    <h6>Web Developer and Designer</h6>
                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                    
                </div>
            </div>
            <div className="col-md-2 col-sm-3">
                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div class="profile-work">
                    <p className="font-weight-bold">Age</p>
                        <span>23</span><br/><br/>
                    <p className="font-weight-bold">SKILLS</p>
                        <span>Web Designer</span><br/>
                        <span>Web Developer</span><br/>
                        <span>Machine Learning</span><br/>
                        <span>Cloud</span><br/>
                        <span>Big Data</span><br/><br/>
                </div>
            </div>
            <div className="col-md-9">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="work" aria-selected="false">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false">Social</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="badges-tab" data-toggle="tab" href="#badges" role="tab" aria-controls="badges" aria-selected="false">Badges</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                
                <div class="tab-content education-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Degree Name</th>
                                    <th scope="col">University</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Graduation</td>
                                        <td>Indian Institute of Technology</td>
                                    </tr>
                                </tbody>
                            </table>                                
                    </div>
                    <div class="tab-pane fade " id="work" role="tabpanel" aria-labelledby="work-tab">
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Post</th>
                                    <th scope="col">Years</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Tata Consultancy Services</td>
                                        <td>Jr. Developer</td>
                                        <td>3 Years</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div class="tab-pane fade " id="social" role="tabpanel" aria-labelledby="social-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Github</label>
                                </div>
                                <div class="col-md-6">
                                    <p>sarthakp24</p>
                                </div>
                            </div>
                    </div>
                    <div class="tab-pane fade " id="badges" role="tabpanel" aria-labelledby="badges-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Machine Learning</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Master</p>
                                </div>
                            </div>
                    </div>
                    <div class="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email Id</label>
                                </div>
                                <div class="col-md-6">
                                    <p>sarthak@gmail.com</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </div> 
);
}
 
export default ProfilePage;