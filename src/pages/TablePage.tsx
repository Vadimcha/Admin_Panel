import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import {CContainer} from "@coreui/react";
import Table from '../components/Table';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";
import Modal from '../components/Modal';

const TablePage = () => {
    const theme = useAppSelector(state => state.userReducer.theme);
    const modal = useAppSelector(state => state.userReducer.modal);
    const { switch_visibl } = themeSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div>
            <Modal></Modal>
            <Header />
            <Sidebar />
            <Content style={{ width: "100%" }}>
                <CContainer className={"workers"}>
                    <h1>Сотрудники</h1>
                    <a href="#" onClick={() => dispatch(switch_visibl())}>Добавить</a>
                </CContainer>
                <Table></Table>
            </Content>
        </div>
    );
};

export default TablePage;