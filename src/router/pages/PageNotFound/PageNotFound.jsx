import TemplateBasePage from "../../../templates/TemplateBasePage";
import {Box, Button, Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";
import NotFoundImage from '../../../assets/img/404.png'

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBackToMain = () => {
        navigate(routerNames.pageMain)
    }
    return (
        <TemplateBasePage>
            <section style={styles.section}>
                <Container>
                    <Box sx={styles.container}>
                        <Typography variant='h2' sx={styles.notFound}>
                            Упс, сторінка не існує
                        </Typography>
                        <Typography variant='h4' sx={styles.notFound}>
                            Ви вказали невірну адресу або перейшли за некоректним посиланням
                        </Typography>
                        <img src={NotFoundImage} alt={'404 Not Found'}/>
                        <Button
                            variant='contained'
                            sx={styles.button}
                            onClick={handleBackToMain}>
                            Go back to main
                        </Button>
                    </Box>
                </Container>
            </section>
        </TemplateBasePage>
    )
}
export default PageNotFound;
