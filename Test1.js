import { useState, useContext, createContext } from "react";


const UserContext = createContext();

const Test2 = () => {

    const [user, setUser] = useState("Sanjeeth");

    return (
        <div>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component1 />
            </UserContext.Provider>
        </div>
    );
}

function Component1() {
    return (
        <>

            <Component2 />

        </>
    );

}

function Component2() {
    return (
        <>

            <Component3 />

        </>
    );

}


function Component3() {

    const user = useContext(UserContext);

    return (
        <>

            <h1>{`Hello ${user}!`}</h1>

        </>
    );

}

export default Test2;
