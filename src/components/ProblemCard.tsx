import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {Problem} from "../models/Problem";

interface ProblemProps {
    pr: Problem
}


export default function ProblemCard ({pr}: ProblemProps)  {
    const theme = useAppSelector(state => state.userReducer.theme);
    console.log("Hello there")
    return (
        <CCard className={(theme + "ProblemCard")} style={{ width: '18rem' }}>
            <CCardBody>
                <CCardTitle>{ pr.name }</CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">{pr.data}</CCardSubtitle>
                <CCardText>
                    Необходим {(pr.post == "-" ? "специалист" : pr.post)}
                </CCardText>
                <CCardLink href="#">Card link</CCardLink>
                <CCardLink href="#">Another link</CCardLink>
            </CCardBody>
        </CCard>
    );
};
