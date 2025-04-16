import axios from "axios";
import Layout from "../Layout";
import memberStyle from "./style/style.module.css";

import api from "../../api";
import { useEffect, useState } from "react";

export default function Create() {



    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleUserData = (event) => {

        const { name, value } = event.target;

        setUserData((prevUserData) => ({

            ...prevUserData,
            [name]: value
        }));

    }

    const handleDataSubmit = async (event) => {
        event.preventDefault();


        try {

            const apiResponse = await api.post('members', userData).then(response => response.data);

            if (apiResponse.success) {
                setUserData({
                    name: "",
                    email: "",
                    phone: "",
                    password: ""
                });
            }

            console.log(apiResponse);

        } catch (error) {
            console.log(error);
        }
    }




    /*
    useEffect(function () {
        console.log('Component mounted....');
    
        api.get('/members')
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    
    }, []);
    
    */

    return (
        <Layout>
            <>
                <h1 className="h3 mb-3">Member Create</h1>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="card card-custom mb-3">
                            <form className={memberStyle.formCustom} onSubmit={handleDataSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="name" name="name"
                                        value={userData.name}
                                        onChange={handleUserData}
                                        aria-describedby="nameHelp"
                                        placeholder="Enter Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="email" name="email"
                                        value={userData.email}
                                        onChange={handleUserData}
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="phone" name="phone"
                                        value={userData.phone}
                                        onChange={handleUserData}
                                        aria-describedby="phoneHelp"
                                        placeholder="Enter Phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password"
                                        className="form-control form-control-lg"
                                        id="password" name="password"
                                        value={userData.password}
                                        onChange={handleUserData}
                                        aria-describedby="passwordHelp"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div className="mb-3 mt-3 d-flex justify-content-between">
                                    <a href="" className="btn btn-danger btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-square align-middle">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                        </svg>
                                        <span className="align-middle px-2">Cancel</span>
                                    </a>
                                    <button className="btn btn-primary btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save align-middle">
                                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                            <polyline points="7 3 7 8 15 8"></polyline>
                                        </svg>
                                        <span className="align-middle px-2">Save Changes</span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </>
        </Layout>
    );
}