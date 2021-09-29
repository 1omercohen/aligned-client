import React from 'react';
import { useNavigate } from '@reach/router';
import { useForm } from "react-hook-form";
import { useRecoilCallback } from "recoil";
import {addUserOperation} from '../state';
import styled from "styled-components";

const AddUserForm = () => {
    const navigate = useNavigate();
    const createUser = useRecoilCallback(addUserOperation);
    const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: "all"});
    const onSubmit = (data) => {
        createUser(data);
        navigate('/');
    }

    const FormControl = ({ label, name, register, required , placeholder}) => <Box>
        <Label>{label}</Label>
        <StyleInput {...register(name, { required })} placeholder={`Enter ${!!placeholder ? placeholder : label}`} hasError={errors[name]?.type === 'required'}/>
    </Box>;

    return <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl label="User Name" name="firstName" placeholder="First Name" register={register} required />
            <FormControl label="Last Name" name="lastName" register={register} required />
            <FormControl label="Email" name="email" register={register} required />
            <SubmitBtn type="submit">Done</SubmitBtn>
        </Form>;
};

const Form = styled.form`
  display: grid;
  gap: 15px;
`

const Box = styled.div`
    width: 350px;
`

const SubmitBtn = styled.button`
  color: ${props => props.theme.white};
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.bgBlue};
  cursor: pointer;
`

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
`

const StyleInput = styled.input`
  width: 100%;
  border: ${props => props.hasError ? '1px solid #de7877' : 'none'};
  background-color: ${props => props.theme.bgOrange};
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 5px;
  &:focus-visible {
    outline: none;
  }
`

export default AddUserForm;