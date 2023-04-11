import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from "../components/Content";
import ProblemCard from '../components/ProblemCard';
import { Problems } from '../data/Problems';
import { Problem } from '../models/Problem';

const ProblemPage = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

            <Content >

                <h1>Задачи</h1>
                <div className={"ProblemsContainer"}>
                    {
                        Problems.map((card: Problem) =>
                            <ProblemCard pr={ card } />
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ProblemPage;