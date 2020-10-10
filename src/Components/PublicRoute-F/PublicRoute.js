import React from 'react'
import { Redirect , Route} from 'react-router';
import { Container, Loader } from 'rsuite';
import {useProfile} from '../../context/profileContext';

const PublicRoute = ({children,...routeProps}) => {//Apart from {children} deconstruct everything and out into a routeProps variable
const { profile, isloading}= useProfile();

if(isloading && !profile) {
    return <Container>
        <Loader center vertical size="md" content="Loading" speed="normal"></Loader>
    </Container>
}

if(profile && !isloading){
    return <Redirect to="/"/>

}

    return (
        <Route {...routeProps}> {children} </Route>
    )
}

export default PublicRoute
