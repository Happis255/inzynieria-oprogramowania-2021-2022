import * as React from "react";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {createTheme, ThemeProvider} from '@mui/material/styles';

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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoginWrapper>
                <Card sx={{
                    width: '24rem',
                    height: '34rem',
                    padding: '3rem'
                }}>
                    <CardContent>
                        <Typography align={'center'} variant="h5">
                            <img src={require('./assets/logo_1.png')} alt={'test'}/>
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
                                />
                            </Grid>
                            <Grid item>
                                <StyledTextField
                                    required
                                    type="password"
                                    id="password"
                                    label="Hasło"
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
                                <StyledButton variant="contained">Zaloguj się</StyledButton>
                            </Grid>
                            <Grid item xs>
                                <StyledButton variant="outlined">Zresetuj hasło</StyledButton>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </LoginWrapper>
        </ThemeProvider>
    );
}

export default App;
