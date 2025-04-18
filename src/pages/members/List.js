import { useEffect, useState } from "react";

import api from "../../api";

import Layout from "../Layout";


export default function MemberList() {

    const [memberList, setMemberList] = useState([]);



    useEffect(() => {
        api.get("members")
            .then(response => {
                console.log(response.data);
                setMemberList(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <Layout>
            <>
                <h1 className="h3 mb-3">Member List</h1>
            </>
        </Layout>
    );
}