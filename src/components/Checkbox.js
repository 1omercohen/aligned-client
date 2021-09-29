import React from 'react';
import styled from "styled-components";

const CheckBox = ({value, handleChange}) => {
    return <CheckBoxContainer>
        <CheckBoxInput value={value} onChange={handleChange}/>
    </CheckBoxContainer>;
};

const CheckBoxContainer = styled.div``;

const CheckBoxInput = styled.input.attrs({type: "checkbox"})`
  zoom: 1.5;
`

export default CheckBox;