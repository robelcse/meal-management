import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


import Layout from "../Layout";
import memberStyle from "./style/style.module.css";
import api from "../../api";



export default function AllMemberMealCount() {


    const [userMeal, setUserMeal] = useState([
        {
            userId: "",
            date: "",
            totalMeal: "2.5"
        },
        {
            userId: "",
            date: "",
            totalMeal: "0.0"
        },
    ]);


    const handleMealChange = (event, index, userId) => {

        const updatedUserMeal = [...userMeal];
        updatedUserMeal[index]["userId"] = userId;
        updatedUserMeal[index]["date"] = "2025-04-24";
        updatedUserMeal[index]["totalMeal"] = event.target.value;

        setUserMeal(updatedUserMeal);
    }


    const handleIncrement = (index) => {
        console.log(index);
        console.log('increment meal');




        let updatedUserMeal = [...userMeal];
        let prevTotalMeal = parseFloat(updatedUserMeal[index]["totalMeal"]).toFixed(1);

        console.log({ prevTotalMeal });
        updatedUserMeal[index]["totalMeal"] = parseFloat(prevTotalMeal) + 1;

        setUserMeal(updatedUserMeal);
    }

    const handleDecrement = (index) => {
        console.log(index);
        console.log('decrement meal');


        const updatedUserMeal = [...userMeal];
        updatedUserMeal[index]["totalMeal"] = updatedUserMeal[index]["totalMeal"]--;

        setUserMeal(updatedUserMeal);
    }


    useEffect(() => {
        console.log({ userMeal });
    }, [userMeal]);


    return (

        <Layout>
            <>
                <h1 className="h3 mb-3">All Member Meal Count</h1>
                <div className="col-12  mb-3">
                    <div className="card card-custom">
                        <div className="card-header p-4">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className="card-title">Hoverable Rows</h5>
                                    <h6 className="card-subtitle text-muted">Add <code>.table-hover</code> to enable a hover
                                        state on table rows within a <code>&lt;tbody&gt;</code>.</h6>
                                </div>
                                <div className="col-3">
                                    <input
                                        type="month"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th width="20%">Name</th>
                                        <th width="15%">Total Deposit</th>
                                        <th width="10%">Total Meal</th>
                                        <th width="10%">Total Meal Cost</th>
                                        <th width="15%">Date</th>
                                        <th width="20%">Count Meal</th>

                                        <th width="10%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="../../../assets/img/avatars/avatar-5.jpg" width="48" height="48"
                                                className="rounded-circle mr-2" alt="Avatar" /> Vanessa Tucker
                                        </td>
                                        <td>৳2,000.00</td>
                                        <td>50</td>
                                        <td>৳1,800.00</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center gap-4">
                                                <div>
                                                    April 21, 2025
                                                </div>
                                                <div>
                                                    <select className={`form-control form-control-lg ${memberStyle.border_radious_0}`}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <button className={`btn btn-secondary btn-lg ${memberStyle.border_radious_0}`} onClick={() => handleIncrement(0)}>+</button>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-lg text-center ${memberStyle.border_radious_0}`}
                                                        id="name" name="name"
                                                        value={userMeal[0].totalMeal}
                                                        onChange={(event) => handleMealChange(event, 0, 10)}

                                                    />
                                                </div>
                                                <button className={`btn btn-secondary btn-lg ${memberStyle.border_radious_0}`} onClick={() => handleDecrement(1)}>-</button>
                                            </div>
                                        </td>


                                        <td>
                                            <button className="btn btn-secondary">Update</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img src="../../../assets/img/avatars/avatar-5.jpg" width="48" height="48"
                                                className="rounded-circle mr-2" alt="Avatar" /> Vanessa Tucker
                                        </td>
                                        <td>৳2,000.00</td>
                                        <td>50</td>
                                        <td>৳1,800.00</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center gap-4">
                                                <div>
                                                    April 21, 2025
                                                </div>
                                                <div>
                                                    <select className={`form-control form-control-lg ${memberStyle.border_radious_0}`}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <button className={`btn btn-secondary btn-lg ${memberStyle.border_radious_0}`}>+</button>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-lg text-center ${memberStyle.border_radious_0}`}
                                                        id="name" name="name"
                                                        value={userMeal[1].totalMeal}
                                                        onChange={(event) => handleMealChange(event, 1, 11)}

                                                    />
                                                </div>
                                                <button className={`btn btn-secondary btn-lg ${memberStyle.border_radious_0}`}>-</button>
                                            </div>
                                        </td>


                                        <td>
                                            <button className="btn btn-secondary">Update</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </>
        </Layout >

    );
}