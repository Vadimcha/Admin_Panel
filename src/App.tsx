import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import './app.sass'
import Content from "./components/Content";
import Table from "./components/Table";
import { CContainer } from '@coreui/react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table_page from "./pages/TablePage";
import Problems from './pages/Problems';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Table_page />} />
                <Route path={"/problems"} element={<Problems></Problems>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
