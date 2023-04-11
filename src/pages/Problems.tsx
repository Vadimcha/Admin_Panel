import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from "../components/Content";
import ProblemCard from '../components/ProblemCard';

const Problems = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

            <Content>
                <h1>Задачи</h1>
                <ProblemCard />
            </Content>
        </div>
    );
};

export default Problems;