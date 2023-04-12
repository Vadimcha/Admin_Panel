import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from "../components/Content";
import ProblemCard from '../components/ProblemCard';
import { Problems } from '../data/Problems';
import { Problem } from '../models/Problem';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";

const ProblemPage = () => {
    const theme = useAppSelector(state => state.userReducer.theme);
    const { switch_problem } = themeSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

            <Content >
                <h1>Задачи</h1>
                <div className={"ProblemsContainer"}>
                    {
                        Problems.map((card: Problem) =>
                            <Link onClick={ () => dispatch(switch_problem(card.id)) } to={"/task"} style={{ color: (theme == "dark" ? "white" : "black") }}>
                                <ProblemCard pr={ card } />
                            </Link>
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ProblemPage;