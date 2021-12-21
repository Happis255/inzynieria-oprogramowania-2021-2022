import * as React from "react";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Props} from "./props.model";

export const LoginWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  padding: 5px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledGrid = styled(Grid)`
  margin-bottom: 4rem;
`;

export const StyledTypography = styled(Typography)`
  margin-bottom: 8rem;
  font-family: sans-serif;
`;

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1f1f1f'
        },
        secondary: {
            main: '#1f1f1f'
        },
    },
});

const LoginForm = (props: Props) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setUsername(value);
        props.onUsernameChange(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setPassword(value);
        props.onPasswordChange(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(username, password);
    };

    return (
        <ThemeProvider theme={theme}>
            <LoginWrapper>
                <form data-testid="login-form" onSubmit={handleSubmit}>
                    <Card sx={{
                        width: '24rem',
                        height: '34rem',
                        padding: '3rem'
                    }}>
                        <CardContent>
                            <Typography align={'center'} variant="h5">
                                Tu kiedyś było logo
                            </Typography>
                            <StyledTypography align={'center'} variant="h5">
                                Zaloguj się do systemu
                            </StyledTypography>
                            <StyledGrid container
                                        direction="column"
                                        justifyContent="space-around"
                                        alignItems="stretch"
                                        spacing={2}>
                                <Grid item>
                                    <StyledTextField
                                        required
                                        id="outlined-required"
                                        label="Login"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        inputProps={{ "data-testid": "account-login" }}
                                    />
                                </Grid>
                                <Grid item>
                                    <StyledTextField
                                        required
                                        type="password"
                                        id="password"
                                        label="Hasło"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        inputProps={{ "data-testid": "account-password" }}
                                    />
                                </Grid>
                            </StyledGrid>
                        </CardContent>
                        <CardActions>
                            <Grid container
                                  direction="column"
                                  justifyContent="space-around"
                                  alignItems="stretch"
                                  spacing={1}>
                                <Grid item xs>
                                    <StyledButton variant="contained" type={'submit'}>Zaloguj się</StyledButton>
                                </Grid>
                                <Grid item xs>
                                    <StyledButton variant="outlined">Zresetuj hasło</StyledButton>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </form>
            </LoginWrapper>
        </ThemeProvider>
    );
}

export default LoginForm;
