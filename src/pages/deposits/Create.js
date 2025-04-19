import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Layout from "../Layout";
import memberStyle from "./style/style.module.css";
import api from "../../api";

export default function Create() {


    const [memberList, setMemberList] = useState([]);
    const [depositData, setDepositData] = useState({
        memberName: "",
        depositAmount: "",
        depositMonth: ""
    });

    const [errors, setErrors] = useState({});


    useEffect(() => {
        api.get("members")
            .then(response => {
                setMemberList(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleDepositData = (event) => {
        const { name, value } = event.target;

        setDepositData((prevDepositData) => ({

            ...prevDepositData,
            [name]: value
        }));
    }

    const handleDataSubmit = async (event) => {
        event.preventDefault();


        try {

            const apiResponse = await api.post('deposits', depositData).then(response => response.data);
            console.log(apiResponse);

            if (apiResponse.success == true) {

                toast.success(apiResponse.message);

                setDepositData({
                    memberName: "",
                    depositAmount: "",
                    depositMonth: ""
                });

            } else if (apiResponse.success == false) {
                setErrors(apiResponse.errors);
            }

        } catch (error) {
            console.log(error);
            if (error.status == 403) {
                console.log();
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong!");
            }
        }

        console.log({ depositData });
    }




    return (

        <Layout>
            <>
                <h1 className="h3 mb-3">Deposit of Member</h1>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="card card-custom mb-3">
                            <form className={memberStyle.formCustom} onSubmit={handleDataSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="memberName" className="select-label mb-2">Member Name:</label>
                                    <select className="js-example-basic-single form-control" onChange={handleDepositData} value={depositData.memberName} id="memberName" name="memberName">
                                        <option>----</option>
                                        {memberList.map((member, index) => (

                                            <option key={member.id} value={member.id}>{member.name}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="depositAmount" className="form-label">Deposit Amount:</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        id="depositAmount" name="depositAmount"
                                        value={depositData.depositAmount}
                                        onChange={handleDepositData}
                                        aria-describedby="depostAmountHelp"
                                        placeholder="Enter Deposit Amount"
                                    />
                                    {errors.depositAmount && <div style={{ color: 'red' }}>{errors.depositAmount[0]}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="depositMonth" className="form-label">Month of deposit:</label>
                                    <input
                                        type="month"
                                        className="form-control form-control-lg"
                                        id="depositMonth" name="depositMonth"
                                        value={depositData.depositMonth}
                                        onChange={handleDepositData}
                                        aria-describedby="depositMonthHelp"
                                        placeholder="Enter Deposit Month"
                                    />
                                    {errors.depositMonth && <div style={{ color: 'red' }}>{errors.depositMonth[0]}</div>}
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
        </Layout >

    );
}