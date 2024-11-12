import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Login = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");

  const onSubmit = () => {
    handleSubmit(username);
  };

  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h3">Realtime Cursors</Typography>
      <Stack spacing={1}>
        <TextField
          id="name"
          label="Enter Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={onSubmit}>
          Click Me
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
