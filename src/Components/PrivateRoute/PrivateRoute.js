
import React from 'react'
import { Redirect , Route} from 'react-router';
import {useProfile} from '../../context/profileContext'

const PrivateRoute = ({children,...routeProps}) => {//Apart from {children} deconstruct everything and out into a routeProps variable
   
const profile= useProfile();
if(!profile){//if no user/ profile detected redirect to sign in page
    return <Redirect to="/signin"/>
}


    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PrivateRoute;
