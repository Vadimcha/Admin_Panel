import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import {CContainer} from "@coreui/react";
import Table from '../components/Table';

const TablePage = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Content>
                <CContainer className={"workers"}>
                    <h1>Сотрудники</h1>
                    <a href="" >Добавить</a>
                </CContainer>
                <Table></Table>
            </Content>
        </div>
    );
};

export default TablePage;