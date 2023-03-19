import { CButton, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import React, {useState} from 'react';

import {themeSlice} from "../store/reducers/UserSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";

const Modal = () => {
    const modal = useAppSelector(state => state.userReducer.modal);
    const { switch_visibl } = themeSlice.actions;
    const dispatch = useAppDispatch();
    const [visible, switch_visible] = useState(false)
    return (
            <CModal visible={modal} onClose={() => dispatch(switch_visibl())} alignment="center" backdrop={"static"}>
                <CModalHeader>
                    <CModalTitle>Добавить сотрудника</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CInputGroup className="mb-3">
                        <CFormInput placeholder="Имя" aria-label="Username"/>
                        <CInputGroupText>|</CInputGroupText>
                        <CFormInput placeholder="Фамилия" aria-label="Server"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CFormInput placeholder="Номер телефона" aria-label="Username" aria-describedby="basic-addon1" type="tel"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CFormInput placeholder="Страна" aria-label="Username"/>
                        <CInputGroupText>|</CInputGroupText>
                        <CFormInput placeholder="Республика" aria-label="Server"/>
                        <CInputGroupText>|</CInputGroupText>
                        <CFormInput placeholder="Город" aria-label="Server"/>
                    </CInputGroup>
                    <CFormInput
                        type="email"
                        id="floatingInputValue"
                        floatingLabel="Введите адрес электронной почты"
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton type={"submit"} color="primary">Добавить</CButton>
                </CModalFooter>
            </CModal>
    );
};

export default Modal;