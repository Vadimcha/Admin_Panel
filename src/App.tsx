import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './app.sass'

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Table from "./components/Table";
import { CContainer } from '@coreui/react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table_page from "./pages/TablePage";
import ProblemPage from './pages/ProblemsPage';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {themeSlice} from "./store/reducers/UserSlice";
import { Users } from "./data/Users";



function App() {
    const theme = useAppSelector(state => state.userReducer.theme);
    const { switch_theme } = themeSlice.actions;
    const dispatch = useAppDispatch();
  return (
    <div className="App" style={{ backgroundColor: (theme === "dark" ? "#212529" : "white"), color: (theme === "dark" ? "#f8f9fa" : "black") }}>
        <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Table_page />} />
                    <Route path={"/problems"} element={<ProblemPage />} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
