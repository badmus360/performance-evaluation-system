import './App.css';
// import AuthDetails from './components/AuthDetails';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";

import { Home } from "./pages/home"
import { Private } from "./private"
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './protectedRoute';

function App() {
  
    // <div className="App">
    //   <SignIn />
    //   <SignUp />
    //   <AuthDetails />
    // </div>

    const [user, setUser] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setIsFetching(false);
          return;
        }

        setUser(null);
        setIsFetching(false);
      });
      return () => unsubscribe();
    }, [])


    if (isFetching) {
      return <h2>Loading...</h2>
    }


    return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home user={user}></Home>}></Route>
      <Route 
        path='/private' 
        element={

          <ProtectedRoute user={user}>
            <Private></Private>
          </ProtectedRoute>
          }></Route>
    </Routes>
    </BrowserRouter>
  ); 
}

export default App;
