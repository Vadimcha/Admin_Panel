import React from 'react';
import Content from '../components/Content';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {Problem} from "../models/Problem";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";
import {Problems} from "../data/Problems";
import {Link} from "react-router-dom";
import CIcon from "@coreui/icons-react";
import {cilArrowLeft, cilDescription} from "@coreui/icons";

function ProblemItemPage() {
    const cur_problem = useAppSelector(state => state.userReducer.cur_problem);
    const theme = useAppSelector(state => state.userReducer.theme);
    const cur = Problems[cur_problem]
    return (
        <div>

            <Header></Header>
            <Sidebar></Sidebar>

            <Content>
                <Link to={"/problems"} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <CIcon icon={cilArrowLeft} style={{fontWeight: "bold", color: (theme === "dark" ? "white" : "black")}} />
                    <p style={{ color: (theme === "dark" ? "white" : "black"), margin: "0", padding: "0", fontWeight: "medium" }}>Back</p>

                </Link>
                <h1>{cur.name}</h1>
                <h5 className={"problem_data_text"}>{cur.data}</h5>
                <p style={{ marginTop: "10px", fontSize: "18px" }}>{cur.full_dscr}</p>
            </Content>
        </div>
    );
}

export default ProblemItemPage;