import React from 'react'
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'
import {auth, db} from '../../misc/firebase';
import firebase from "firebase/app";

const SignIn = () => {
    const singInWithProvider= async provider=>{
        try{
            const { additionalUserInfo, user}= await auth.signInWithPopup(provider)

            if(additionalUserInfo.isNewUser){
                await db.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                })
            }

            Alert.success('Signed in', 4000);
        } catch (err){
            Alert.error(err.message, 4000)
        }
       
    }

    const onFacebookSignin=()=>{
        singInWithProvider(new firebase.auth.FacebookAuthProvider())
    }

    const onGooglesignin=()=>{
        singInWithProvider(new firebase.auth.GoogleAuthProvider())
    }

    return <Container>
        <Grid className="mt-page">
            <Row>
                <Col xs={24} md={12} mdOffset={6}>{/* On small screen devices show 24 columns, on medium scren devices show 12, mdOffset={ centering component for large devices by halfing the md vaule md={12}, therfore mdOffset={6}}*/}
                    <Panel>
                        <div className="text-center">
                            <h2>Welcom to Chat</h2>
                            <p>Progressive Web App Chat</p>
                        </div>

                        <div className="mt-3"> 
                            {/* Button props block wil take full width of its conatiner*/}
                            <Button block color="blue" onClick={onFacebookSignin}>
                                <Icon icon="facebook"/> Continue With Facebook
                            </Button>
                            <Button block color="green" onClick={onGooglesignin}>
                                <Icon icon="google" /> Continue With Google
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>
}

export default SignIn;
