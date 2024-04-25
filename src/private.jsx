import { signOut } from "firebase/auth"
import { auth } from "../src/firebase"

export const Private = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => console.log("Sign out"))
                        .catch((error) => console.log(error))
    }
    
    return (
        <section>
             <h1>Private Page</h1>
             <button onClick={handleSignOut}>Sign Out</button>
        </section>
    )
}