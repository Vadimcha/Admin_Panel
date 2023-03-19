import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/react";

const AdaptiveSidebar = () => {
    const sidbar = useAppSelector(state => state.userReducer.sidebar);
    const { switch_sidebar } = themeSlice.actions;
    const dispatch = useAppDispatch();


    if(sidbar)
        return (
            <CModal className={"Adaptive_sidebar"} fullscreen visible={sidbar} onClose={() => dispatch(switch_sidebar())} >
                <CModalHeader>
                    <CModalTitle>Full screen</CModalTitle>
                </CModalHeader>
                <CModalBody>...</CModalBody>
            </CModal>
        );
    else return(<></>)
};

export default AdaptiveSidebar;