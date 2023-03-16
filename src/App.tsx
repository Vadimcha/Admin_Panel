import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import './app.sass'
import Content from "./components/Content";
import Table from "./components/Table";
import { CContainer } from '@coreui/react';

function App() {
  return (
    <div className="App">
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
}

export default App;
