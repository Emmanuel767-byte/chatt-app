import React from 'react'
import { Redirect , Route} from 'react-router';
import {useProfile} from '../../context/profileContext';

const PublicRoute = ({children,...routeProps}) => {//Apart from {children} deconstruct everything and out into a routeProps variable
const profile= useProfile();
if(profile){
    return <Redirect to="/"/>

}

    return (
        <Route {...routeProps}>{children}
        </Route>
    )
}

export default PublicRoute
