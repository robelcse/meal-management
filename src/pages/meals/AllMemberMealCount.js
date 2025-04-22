import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


import Layout from "../Layout";
import memberStyle from "./style/style.module.css";
import api from "../../api";


export default function AllMemberMealCount() {

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


                                            <div>
                                                <div>
                                                    April 21, 2025
                                                </div>
                                                <div>
                                                    <select className={`form-control form-control-lg ${memberStyle.border_radious_0}`}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
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
                                                        value="0.00"

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