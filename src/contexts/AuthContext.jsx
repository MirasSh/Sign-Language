import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../js/firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(() => {
            auth.currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://auth-developement-4ae2b.firebaseapp.com',
            })
            .then(() =>{
                alert('Авторизация хаты поштаға жіберілді') 
            }).catch((error) => {
                alert(error.message)
            })
        })
        
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
    currentUser,
    login,
    signup,
  }
    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
