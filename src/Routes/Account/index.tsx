import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { signOut } from "../../utils/firebase/auth";
import { useAppSelector } from "../../hooks";

const Account = () => {
  const user = useAppSelector((state) => state.user.user);
  const status = useAppSelector((state) => state.user.status);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (user === null) {
    return <Navigate replace to="/account/signup" />;
  }

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Card variant="outlined" sx={{ marginY: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <Typography variant="h5">Account Information</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">{user.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Register Number</TableCell>
              <TableCell align="left">{user.registerNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">{user.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <Button sx={{ margin: 2 }} variant="contained" onClick={signOut}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Account;
