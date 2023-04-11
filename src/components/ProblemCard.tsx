import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
import {useAppSelector} from "../hooks/redux";

const ProblemCard = () => {
    const theme = useAppSelector(state => state.userReducer.theme);
    return (
        <CCard className={(theme + "ProblemCard")} style={{ width: '18rem' }}>
            <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
                <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CCardText>
                <CCardLink href="#">Card link</CCardLink>
                <CCardLink href="#">Another link</CCardLink>
            </CCardBody>
        </CCard>
    );
};

export default ProblemCard;