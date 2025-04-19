import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


import Layout from "../Layout";
import memberStyle from "./style/style.module.css";
import api from "../../api";

export default function Create() {

    const [memberList, setMemberList] = useState([]);
    const [costData, setCostData] = useState({

        user: "",
        dateOfCost: "",
        totalCost: "",

    });

    const [itemList, setItemList] = useState([{ itemLabel1: 'Item Description:', itemLabel2: 'Item Price:' }]);


    const addNewItem = () => {
        setItemList([...itemList, { itemLabel1: 'Item Description:', itemLabel2: 'Item Price:' }]);
    }

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

    const handlCostData = (event) => {
        const { name, value } = event.target;

        setCostData((prevCostData) => ({

            ...prevCostData,
            [name]: value
        }));
    }

    const handleDataSubmit = async (event) => {
        event.preventDefault();


        console.log({ costData });

    }


    return (

        <Layout>
            <>
                <h1 className="h3 mb-3">Shopping Cost</h1>
                <form onSubmit={handleDataSubmit}>
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div className={`card card-custom mb-3 ${memberStyle.formCustom}`}>


                                {
                                    itemList.map((singleItem, index) => (

                                        <div className="row" key={index}>
                                            <div className="col-md-8">
                                                <div className="mb-3">
                                                    <label htmlFor="depositAmount" className="form-label">{singleItem.itemLabel1}</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="depositAmount" name="depositAmount"
                                                        // value={costData.depositAmount}
                                                        // onChange={handlCostData}
                                                        aria-describedby="depostAmountHelp"
                                                        placeholder="Enter Item Description"
                                                    />
                                                    {errors.depositAmount && <div style={{ color: 'red' }}>{errors.depositAmount[0]}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label htmlFor="depositAmount" className="form-label">{singleItem.itemLabel2}</label>
                                                    <input
                                                        type="number"
                                                        className="form-control form-control-lg"
                                                        id="depositAmount" name="depositAmount"
                                                        // value={costData.depositAmount}
                                                        // onChange={handlCostData}
                                                        aria-describedby="depostAmountHelp"
                                                        placeholder="Enter Item Price"
                                                    />
                                                    {errors.depositAmount && <div style={{ color: 'red' }}>{errors.depositAmount[0]}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-secondary" onClick={addNewItem}>Add More Item</button>
                                </div>


                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className={`card card-custom mb-3 ${memberStyle.formCustom}`}>

                                <div className="mb-3">
                                    <label htmlFor="user" className="select-label mb-2">Member Name:</label>
                                    <select className="js-example-basic-single form-control" onChange={handlCostData} id="user" name="user" value={costData.user}>
                                        <option>----------</option>
                                        {memberList.map((member, index) => (
                                            <option key={member.id} value={member.id}>{member.name}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfCost" className="form-label">Date of Cost:</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        id="dateOfCost"
                                        name="dateOfCost"
                                        value={costData.dateOfCost}
                                        onChange={handlCostData}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="depositAmount" className="form-label">Total Amount:</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        id="totalCost"
                                        name="totalCost"
                                        value={costData.totalCost}
                                        onChange={handlCostData}
                                        placeholder="Enter Deposit Amount"

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

                            </div>
                        </div>
                    </div>
                </form>
            </>
        </Layout >

    );
}