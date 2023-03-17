import React from 'react';
import {CAvatar, CContainer, CNavbar, CNavbarBrand} from "@coreui/react";
import {cilDescription, cilSmile} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Header = () => {
    return (
        <CNavbar colorScheme="dark" className="bg-dark px-5 py-2" style={{ borderBottom: "1px solid #4e4e4e" }}>
            <CContainer fluid style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <CNavbarBrand href="#">
                    <img
                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                        alt=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> CoreUI
                </CNavbarBrand>
                <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                    <CIcon width={30} height={30} icon={cilSmile} style={{ color: "white", cursor: "pointer" }}/>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <CAvatar size={"md"} src={process.env.PUBLIC_URL + "/img/avatar.webp"} style={{ cursor: "pointer"}}/>
                </div>
            </CContainer>
        </CNavbar>
    );
};

export default Header;