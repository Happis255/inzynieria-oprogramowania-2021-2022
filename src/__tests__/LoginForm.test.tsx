import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render } from "@testing-library/react"
import * as React from "react"
import LoginForm from "../LoginForm";

const getLoginForm = () => {
    return render(<LoginForm onPasswordChange={(value) => console.log("Password: " + value)} onUsernameChange={(value) => console.log("Login: " + value)}  onSubmit={(username: string, password: string) => console.log("form submitted: " + username + " " + password)}/>);
}

describe("Komponent App", () => {
    it("Formularz do logowania powinien być pusty",  () => {
        const { getByTestId } = getLoginForm();
        const login = getByTestId("account-login") as HTMLInputElement;
        const password = getByTestId("account-password") as HTMLInputElement;
        expect(login.value).toBe("");
        expect(password.value).toBe("");
    });
    it("Formularz usupełniony, powinien miec dane",  () => {
        const { getByTestId } = getLoginForm();
        const login = getByTestId("account-login") as HTMLInputElement;
        const password = getByTestId("account-password") as HTMLInputElement;
        fireEvent.change(login, { target: { value: "login" } });
        fireEvent.change(password, { target: { value: "password" } });
        expect(login.value).toBe("login");
        expect(password.value).toBe("password");
    })
});
