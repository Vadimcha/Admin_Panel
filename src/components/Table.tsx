import React from 'react';
import {CSpinner, CTable } from "@coreui/react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {themeSlice} from "../store/reducers/UserSlice";
import {Users} from "../data/Users";

const columns = [
    {
        key: 'id',
        label: '#',
        _props: { scope: 'col' },
    },
    {
        key: 'name',
        label: 'Name',
        _props: { scope: 'col' },
    },
    {
        key: 'phone',
        label: 'Phone',
        _props: { scope: 'col' },
    },
    {
        key: 'location',
        label: 'Location',
        _props: { scope: 'col' },
    },
]
const Table = () => {
    const theme = useAppSelector(state => state.userReducer.theme);
    const { switch_theme } = themeSlice.actions;
    const dispatch = useAppDispatch();
    let items = Users()
    if(items.length === 0)
        return (
            (theme === "dark" ?
                <CSpinner color="light" style={{ display: "block", marginRight: "auto", marginLeft: "auto" }}/> :
                <CSpinner color="dark" style={{ display: "block", marginRight: "auto", marginLeft: "auto" }}/>)
        )

    else return (
        <div className={"Table_div"}>
            <CTable color={theme} style={{ margin: "0", padding: "0" }} striped columns={columns} items={items} hover bordered responsive />
        </div>
    );
};

export default Table;