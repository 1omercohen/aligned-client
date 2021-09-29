import React from 'react';
import styled from "styled-components";

const Container = ({children}) => {
    return <ContainerBox>
        {children}
    </ContainerBox>;
};

const ContainerBox = styled.div`
  justify-self: center;
  
`;

export default Container;