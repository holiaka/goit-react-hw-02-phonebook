import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SubmitForm = styled(Form)`
    padding: 20px;
    margin-bottom: 20px;    
    border-radius: 20px;
    background-color: lightgray;    
`;

export const InputName = styled.p`
    margin: 0;
    font-size: 16px;

`;

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
`;

export const Input = styled(Field)`
    width: 300px;
`;
