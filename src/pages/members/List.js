import { useEffect, useState } from "react";

import api from "../../api";
import Layout from "../Layout";
import memberStyle from "./style/style.module.css";
import { Link, NavLink } from "react-router-dom";


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];


export default function MemberList() {

    const [memberList, setMemberList] = useState([]);



    useEffect(() => {
        api.get("members")
            .then(response => {
                console.log(response.data.data);
                setMemberList(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    var srNumber = 1;


    return (
        <Layout>
            <>
                <h1 className="h3 mb-3">Member List</h1>
                <div>
                    <div className="card card-custom" >
                        <div className="row d-flex justify-content-center  ">
                            <div className="my-2 p-4 d-flex justify-content-end">
                                {/* <a type="button" className="btn btn-primary pull-right delete_all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus align-middle">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    <span>Create Member</span>
                                </a> */}
                                <Link to="/members/create" className="btn btn-primary pull-right delete_all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus align-middle">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    <span>Create Member</span>
                                </Link>
                            </div>

                        </div>
                        <div className="table-responsive">
                            <table id="employee_grid"
                                className="table table-condensed table-hover table-striped bootgrid-table"
                                cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th width="10%">SL NO.</th>
                                        <th width="25%">Name</th>
                                        <th width="25%">Email</th>
                                        <th width="25%">Phone</th>
                                        <th width="15%" className="pull-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {memberList.map(member => (
                                        <tr data-row-id="1" key={member.id}>
                                            <td>{srNumber++}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <input type="checkbox" className={`sub_chk ${memberStyle.mr_10}`} data-id="1" />
                                                    <span>{member.name}</span>
                                                </div>
                                            </td>
                                            <td>{member.email}</td>
                                            <td>{member.phone}</td>
                                            <td><a className="remove-row pull-right" targetdiv="" data-id="1"
                                                href="javascript: void(0)">Delete</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </>
        </Layout>
    );
}