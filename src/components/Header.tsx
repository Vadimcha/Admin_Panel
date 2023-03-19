import React from 'react';
import {CAvatar, CContainer, CNavbar, CNavbarBrand} from "@coreui/react";
import {cilHamburgerMenu, cilMoon, cilSun} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import {themeSlice} from "../store/reducers/UserSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import AdaptiveSidebar from "./AdaptiveSidebar";

const Header = () => {
    const theme = useAppSelector(state => state.userReducer.theme);
    const sidbar = useAppSelector(state => state.userReducer.sidebar);
    const { switch_theme, switch_sidebar } = themeSlice.actions;
    const dispatch = useAppDispatch();
    const logo =
        <>
        <img
            src={process.env.PUBLIC_URL + "/img/logo_" + theme + ".png"}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
        /> Core UI
        </>


    const sidebar =
        <CIcon
            width={30}
            height={30}
            onClick={() => dispatch(switch_sidebar())}
            icon={cilHamburgerMenu}
            style={{ color: (theme === "dark" ? "white" : "black"), cursor: "pointer" }}/>

    return (
        <>
            <AdaptiveSidebar />
            <CNavbar colorScheme={(theme === "light" ? "light" : "dark")} className={(window.innerWidth > 1100 ? "px-5 " : "") + "py-2" + " bg-"+theme} style={{ borderBottom: "1px solid #4e4e4e" }} placement={"sticky-top"}>
                <CContainer fluid style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <CNavbarBrand href="#">
                        { (window.innerWidth > 1100 ? logo : sidebar) }
                    </CNavbarBrand>
                    <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                        <CIcon width={30} onClick={() => dispatch(switch_theme())} height={30} icon={(theme === "dark" ? cilSun : cilMoon)} style={{ color: (theme === "dark" ? "white" : "black"), cursor: "pointer" }}/>
                        <CAvatar size={"md"} src={process.env.PUBLIC_URL + "/img/avatar_dark.png"} style={{ cursor: "pointer", border: "2px solid #4e4e4e", userSelect: "none" }}/>
                    </div>
                </CContainer>
            </CNavbar>
        </>
    );
};

export default Header;