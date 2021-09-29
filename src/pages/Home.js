import React from 'react';
import { UserList, ActionButtons, Container } from "../components"

const Home = () => {
    const ids = new Set();
    return <Container>
        <UserList {...{ids}}/>
        <ActionButtons ids={ids}/>
    </Container>;
};



export default Home;