
import React from 'react'
import { Redirect , Route} from 'react-router';
import { Container, Loader } from 'rsuite';
import {useProfile} from '../../context/profileContext'

const PrivateRoute = ({children,...routeProps}) => {//Apart from {children} deconstruct everything and out into a routeProps variable
   
const { profile, isloading}= useProfile();

if(isloading && !profile) {
    return <Container>
        <Loader center vertical size="md" content="Loading" speed="normal"></Loader>
    </Container>
}

if(!profile && !isloading){//if no user/ profile detected redirect to sign in page
    return <Redirect to="/signin"/>
}


    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PrivateRoute;
