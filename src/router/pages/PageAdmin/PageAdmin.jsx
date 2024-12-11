import TemplateBasePage from "../../../templates/TemplateBasePage";
import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {styles} from "./styles.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";
import {useGetAllUsersQuery} from "../../../redux/productsApi/productsApi.js";
import {useEffect} from "react";
import Cookies from "js-cookie";

const PageAdmin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('role') !== 'admin') {
            navigate(routerNames.pageMain); // Redirect to main page if not an admin
        }
    }, [navigate]);

    const handleBackToMain = () => {
        navigate(routerNames.pageMain)
    }

    const {data, error, isLoading, isError} = useGetAllUsersQuery();

    return (
        <TemplateBasePage>
            <section style={styles.section}>
                <Container>
                    <TableContainer component={Paper} sx={styles.container}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>ID</strong></TableCell>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Surname</strong></TableCell>
                                    <TableCell><strong>Phone number</strong></TableCell>
                                    <TableCell><strong>email</strong></TableCell>
                                    <TableCell><strong>role</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((user) => (
                                    <TableRow key={user.id_customer}>
                                        <TableCell>{user.id_customer}</TableCell>
                                        <TableCell>{user.first_name}</TableCell>
                                        <TableCell>{user.last_name}</TableCell>
                                        <TableCell>{user.phone_number}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Button
                            variant='contained'
                            sx={styles.button}
                            onClick={handleBackToMain}>
                            Go back to main
                        </Button>
                    </TableContainer>
                </Container>
            </section>
        </TemplateBasePage>
    )
}
export default PageAdmin;
