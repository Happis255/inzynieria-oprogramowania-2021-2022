export interface Props {
    onUsernameChange?: (username: string) => void;
    onPasswordChange?: (password: string) => void;
    onSubmit?: (username: string, password: string) => void;
}
