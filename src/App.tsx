import * as React from "react";
import LoginForm from "./LoginForm";

function App () {
    return (
        <LoginForm onPasswordChange={(value) => console.log("Password: " + value)} onUsernameChange={(value) => console.log("Login: " + value)}  onSubmit={(username: string, password: string) => console.log("form submitted: " + username + " " + password)}/>
    );
}

export default App;
