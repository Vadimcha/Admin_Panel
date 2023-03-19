import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from "../components/Content";

const Problems = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

            <Content>
                <h1>Задачи</h1>
                <p>Задач пока нет)</p>
            </Content>
        </div>
    );
};

export default Problems;