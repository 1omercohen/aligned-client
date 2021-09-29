import React from 'react';
import {ReactComponent as PencilIcon} from '../icons/pencil.svg';

const IconButton = ({setEdit}) => {

    const handleClick = () => {
        setEdit(true)
    }

    return <PencilIcon style={{ alignSelf: "center"}} onClick={handleClick}/>;
};

export default IconButton;