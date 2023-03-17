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
import {cilDescription, cilGroup, cilPuzzle, cilSpeedometer} from "@coreui/icons";

const Sidebar = () => {
    const [activ, setActiv] = useState("Worker");
    return (
        <CSidebar style={{height: "100vh", paddingTop: "10vh", backgroundColor: "#212529", borderRight: "1px solid #4e4e4e"}}  unfoldable>
            <CSidebarNav>
                <CNavItem href="#" active={activ==="Problems"} onClick={() => setActiv("Problems")}>
                    <CIcon customClassName="nav-icon" icon={cilDescription} style={{fontWeight: "bold"}} />
                    <p style={{ fontWeight: "bold", margin: "0", padding: "0" }}>Задачи</p>
                </CNavItem>
                <CNavItem href="#" active={activ==="Worker"} onClick={() => setActiv("Worker")}>
                    <CIcon customClassName="nav-icon" icon={cilGroup} style={{fontWeight: "bold"}} />
                    <p style={{ fontWeight: "bold", margin: "0", padding: "0" }}>Сотрудники</p>
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    );
};

export default Sidebar;