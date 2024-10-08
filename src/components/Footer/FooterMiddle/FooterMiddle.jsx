import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import ComfyQR from "../../../assets/icons/comfy_QR.jsx";
import FormInput from "../../UI/inputs/FormInput/index.js";
import {useFormik} from "formik";
import {styles} from "./styles.js";
import subscribeValidation from "./subscribeValidation.js";
import FooterInfoList from "../../UI/FooterInfoList/index.js";
import {Link} from "react-router-dom";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import SendIcon from "@mui/icons-material/Send";
import LoveEmoji from "../../../assets/icons/LoveEmoji.jsx";

const comfy = [
    'About Company',
    'Stores',
    'Contacts',
    'Press-Center',
    'Work at COMFY',
    'Safety and warnings',
    'Tender',
    'For partners',
    'Catalog',
    'COMFY helps'
];

const services = [
    'Bonus program',
    'Gift cards',
    'COMFY books',
    'Credit and part-payment',
    'Trade in',
    'Service Contracts',
    'Non-cash payment',
    'Payment'
]

const customerHelp = [
    'Client`s Help center',
    'Find order',
    'Delivery terms',
    'Refund',
    'Warrantaty',
    'Docs',
    'Rules of participation'
]

const FooterMiddle = () => {

    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: subscribeValidation,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        }
    })
    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <List sx={styles.list}>
                    <ListItem sx={styles.li}>
                        <Box sx={styles.qRCodeContainer}>
                            <ComfyQR/>
                            <Typography variant='p' component='p' sx={styles.qRCodeText}>
                                {`What will happen if you scan it right you'll get scammed :)`}
                            </Typography>
                        </Box>
                        <Box sx={styles.formContainer}>
                            <form onSubmit={formik.handleSubmit} style={styles.form}>
                                <Typography variant='h6' component="span" sx={styles.formTitle}>
                                    Subscribe for discounts!
                                </Typography>
                                <Typography sx={styles.formSubtitle}>
                                    No worries, we DO spam <LoveEmoji/>
                                </Typography>
                                <FormInput
                                    placeHolder={'email@email.com'}
                                    value={formik.values.email.trim()}
                                    touched={formik.touched.email}
                                    error={formik.errors.email}
                                    onChange={formik.handleChange}
                                    label={'Email'}
                                    name={'email'}
                                    type={'text'}/>
                                <Button variant='contained' type={'submit'} sx={styles.emailSubmit}>
                                    Send
                                </Button>
                            </form>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <FooterInfoList
                            title={'Comfy'}
                            content={comfy}
                        />
                    </ListItem>
                    <ListItem>
                        <FooterInfoList
                            title={'Services & Conditions'}
                            content={services}
                        />
                    </ListItem>
                    <ListItem>
                        <FooterInfoList
                            title={'Customer Help'}
                            content={customerHelp}
                        />
                    </ListItem>
                    <ListItem>
                        <List>
                            <ListItem>
                                <Typography variant='h6' component='span' sx={styles.title}>
                                    Consultation
                                </Typography>
                            </ListItem>
                            <ListItem sx={styles.phoneNumberLi}>
                                <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                                    <a href={'tel:+380-800-303-505'}>0-800-303-505</a>
                                </Typography>
                            </ListItem>
                            <ListItem sx={styles.phoneNumberLi}>
                                <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                                    <a href={'tel:+380-800-600-506'}>0-800-600-506</a>
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='h6' component='span' sx={styles.subtitle}>
                                    <Link to={'/#'}>
                                        Free across Ukraine <br/> 08:00-21:00 Mon-Sat
                                    </Link>
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Link to={'/#'}>
                                    <Typography sx={styles.linkServices}>
                                        <NotListedLocationIcon
                                            fontSize='small'
                                            color='error'/>
                                        Help
                                        Center
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={'/#'}>
                                    <Typography sx={styles.linkServices}>
                                        <ChatOutlinedIcon
                                            fontSize='small'
                                            color='success'/>
                                        Live
                                        Chat
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={'/#'}>
                                    <Typography sx={styles.linkServices}>
                                        <SendOutlinedIcon
                                            fontSize='small'
                                            color='primary'/>
                                        Messenger
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={'/#'}>
                                    <Typography sx={styles.linkServices}>
                                        <WifiCalling3OutlinedIcon
                                            fontSize='small'
                                            color='secondary'/>
                                        Viber
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={'/#'}>
                                    <Typography sx={styles.linkServices}>
                                        <SendIcon
                                            fontSize='small'
                                            color='primary'/>
                                        Telegram
                                    </Typography>
                                </Link>
                            </ListItem>

                        </List>
                    </ListItem>

                </List>
            </Container>
        </section>
    )
}

export default FooterMiddle;
