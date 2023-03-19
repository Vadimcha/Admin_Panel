import React, {useState} from 'react';
import {
    CBadge,
    CNavGroup,
    CNavItem,
    CNavTitle,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarToggler
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilDescription, cilGroup} from "@coreui/icons";
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";




const Sidebar = () => {
    const theme = useAppSelector(state => state.userReducer.theme);

    let url = window.location.pathname;

    if(window.innerWidth > 1100) {
        return (
            <CSidebar style={{height: "100vh", paddingTop: "10vh", backgroundColor: (theme === "light" ? "#f8f9fa" : "#212529"), borderRight: "1px solid #4e4e4e"}} unfoldable>
                <CSidebarNav>
                    <Link to={"/problems"} >
                        <CNavItem href="#" active={ url[1] === 'p' } style={{ color: (theme === "light" ? "black" : "") }}>
                            <CIcon customClassName="nav-icon" icon={cilDescription} style={{fontWeight: "bold", color: (theme === "dark" ? "white" : "black")}} />
                            <p style={{ fontWeight: "bold", margin: "0", padding: "0" }}>Задачи</p>
                        </CNavItem>
                    </Link>

                    <Link to={"/"}>
                        <CNavItem href="#" active={ url.length === 1 } style={{ color: (theme === "light" ? "black" : "") }}>
                            <CIcon customClassName="nav-icon" icon={cilGroup} style={{fontWeight: "bold", color: (theme === "dark" ? "white" : "black")}} />
                            <p style={{ fontWeight: "bold", margin: "0", padding: "0" }}>Сотрудники</p>
                        </CNavItem>
                    </Link>
                </CSidebarNav>
            </CSidebar>
        );
    }
    else return (
        <></>
    )
};

export default Sidebar;