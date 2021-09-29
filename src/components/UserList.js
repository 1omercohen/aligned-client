import React from 'react';
import {useRecoilValue} from "recoil";
import {UserState} from "../state";
import styled from "styled-components";
import UserInfo from "./UserInfo"

const UserList = ({ids}) => {

    const users = useRecoilValue(UserState);

    const handleCheckBox = (e) => {
        const { checked, value } = e.target;
        if(checked === true){
            ids.add(value);
        }
        else {
            ids.delete(value);
        }
        console.log(ids)
    }

    return <List>
        {
            users.length > 0
                ? (
                    users.map(user => <FlexContainer key={user._id}>
                        <UserInfo {...{user}} handleCheckBox={handleCheckBox}/>
                    </FlexContainer>)
                )
                : <div>Empty Users</div>
        }
    </List>;
};

const List = styled.div`
  display: grid;
  row-gap: 10px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: ${props => props.theme.bgOrange};
  border-radius: 15px;
  align-items: center;
  width: 500px;
`

export default UserList;