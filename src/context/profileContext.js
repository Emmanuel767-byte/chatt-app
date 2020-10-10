import { auth, db } from "../misc/firebase";
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProfileContext = createContext();

export const ProfileProvider =({children})=>{
    const [profile, setProfile] = useState(null);
    const [isloading, setIsloading]=useState(true)

    useEffect(() => {
        let userRef;
      const authUnsubscibe=  auth.onAuthStateChanged(authObj=>{
            console.log(authObj)
            if(authObj) { userRef= db.ref(`/profiles/${authObj.uid}`);
               userRef.on('value',snapshot=> {
                    const {name, createdAt} =  snapshot.val()
                    
                    const data = {
                        name,
                        createdAt,
                        uid: authObj.uid,
                        email: authObj.email
                    }
                    setProfile(data)
                });
            }  else{
                if(userRef){
                    userRef.off();
                }
                    setProfile(null)
                    setIsloading(false)
            }
        })
        return ()=>{
            authUnsubscibe();
            if(userRef){
                userRef.off();
            }
        }
    }, [])

return (
    <ProfileContext.Provider value={{isloading,profile}}>
        {children}
    </ProfileContext.Provider>
)
}

   
export const useProfile=()=> useContext(ProfileContext);



