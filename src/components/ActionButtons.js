import React from 'react';
import { Link } from "@reach/router";
import { useRecoilCallback} from "recoil";
import {removeUsersOperation} from "../state";
import styled from "styled-components";

const ActionButtons = ({ids}) => {
    const removeUsers = useRecoilCallback(removeUsersOperation);
    const handleClick = () => {
        if(ids.size > 0){
            removeUsers(ids);
        }
    }
    return <Container>
            <LinkButton to="create">Add User</LinkButton>
            <ClickButton onClick={handleClick}>Delete</ClickButton>
    </Container>;
};

const LinkButton = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.theme.bgBlue};
  color: ${props => props.theme.white};
  padding: 5px 15px;
  font-size: 12px;
  border-radius: 15px;
`

const ClickButton = styled.button`
  border: none;
  background-color: ${props => props.theme.bgBlue};
  color: ${props => props.theme.white};
  padding: 5px 15px;
  font-size: 12px;
  border-radius: 15px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  margin-top: 10px;
`;

export default ActionButtons;