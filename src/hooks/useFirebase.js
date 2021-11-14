import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,updateProfile ,signOut} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);


    const auth = getAuth();

    // sign Up implement 
    const registerUser = (email,password,name,history) => {
      setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email,displayName:name};
            setUser(newUser);

            // save user to database
            saveUser(email,name);

            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            


            history.push('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
    }

    // log in implement 
    const loginUser = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // Observer State
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else {
             setUser({});
            }
            setIsLoading(false);
          });
          return unsubscribe;
    },[])


    const logout = () => {
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => {
            setIsLoading(false);
          });
    }


    const saveUser = (email,displayName) => {
      const user = {email,displayName};
      fetch('https://fast-taiga-86694.herokuapp.com/users',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      .then()
    }

    useEffect(() => {
      fetch(`https://fast-taiga-86694.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
      })
    },[user.email])


    return {
        user,
        admin,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError,

    }
}

export default useFirebase;