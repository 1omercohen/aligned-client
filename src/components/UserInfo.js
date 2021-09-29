import React, {useState, useRef} from 'react';
import styled from "styled-components";
import { useRecoilCallback } from "recoil";
import {updateUserStatus} from "../state"
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";

const UserInfo = ({user, handleCheckBox}) => {
    const updateStatus = useRecoilCallback(updateUserStatus);
    const UserRef= useRef();
    const [edit, setEdit] = useState(false)

    const handleSelect = (e) => {
        const userId = UserRef.current.id;
        const status = e.target.value;
        updateStatus(userId, status)
        setEdit(false);
    }
    return <>
        <FlexContainer>
            <Checkbox value={user._id} handleChange={handleCheckBox}/>
            <UserName>{user.firstName} {user.lastName}</UserName>
        </FlexContainer>
        <FlexContainer>
            {
                edit
                    ? <SelectStatus ref={UserRef} onChange={handleSelect} id={user._id} value={user.status}>
                        <option value="Active" >Active</option>
                        <option value="Invited">Invited</option>
                        <option value="Disabled">Disabled</option>
                    </SelectStatus>
                    : <Status name={user.status.toLowerCase()} edit={edit}>{user.status}</Status>
            }
            <IconButton setEdit={setEdit}/>
        </FlexContainer>
        </>;
};

const Status = styled.div`
    color: ${props => props.theme[props.name]};
`

const UserName = styled.div`
  display: flex;
  align-items: center;
`

const SelectStatus = styled.select`
  align-self: center;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  &:focus-visible {
    outline: none;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
`

export default UserInfo;