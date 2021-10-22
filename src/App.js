import "./App.css";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const App = () => {
  return (
    <div className="App">
      <FormWrapper>
        <form>
          <FormHeader>Formularz reklamacji</FormHeader>
          <TextField
            id="outlined-password-input"
            label="Numer zamówienia lub numer faktury"
            type="text"
            autoComplete="current-password"
            fullWidth
          />
        </form>
      </FormWrapper>
    </div>
  );
};

export default App;

const FormWrapper = styled.div`
  margin: 30px auto;
  max-width: 800px;
  border-radius: 15px;
  padding: 30px;
  background: #f5f7f7;
`;

const FormHeader = styled.h1`
  font-size: 30px;
  text-align: left;
  font-family: "Roboto";
  margin: 0 0 20px 0;
`;
