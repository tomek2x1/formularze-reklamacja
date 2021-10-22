import "./App.css";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const App = ({ data }) => {
  const producersList = data.producers.map((producer, index) => {
    return (
      <MenuItem key={index} value={producer}>
        {producer}
      </MenuItem>
    );
  });

  return (
    <div className="App">
      <FormWrapper>
        <form>
          <FormHeader>Formularz reklamacji</FormHeader>
          <TextField
            label="Numer zamówienia lub numer faktury"
            type="text"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="producer">Producent</InputLabel>
            <Select labelId="producer" label="producer">
              {producersList}
            </Select>
          </FormControl>
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
