import { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    let page;


    if(isLoggedIn)
    {
        page = <UserPage />;
    }
    else
    {
        page = <GuestPage />;
    }


    return (

        <div>

            <h1>
                Ticket Booking App
            </h1>


            {
                isLoggedIn ?

                <button onClick={() => setIsLoggedIn(false)}>
                    Logout
                </button>

                :

                <button onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>

            }


            <hr />


            {page}


        </div>

    );
}

export default App;