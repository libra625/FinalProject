import {cloneElement} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from '@mui/material';
import FormInput from '../../UI/inputs/FormInput';
import {useFormik} from 'formik';
import loginFormValidation from './loginFormValidation.js';
import {styles} from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {setModalLoginOpen} from '../../../redux/slices/modalsAuthSlice.js';
import {useSnackbar} from 'notistack';
import ModalTemplate from '../../UI/ModalTemplate/index.js';
import {useGetUserByEmailAndPasswordMutation} from "../../../redux/productsApi/productsApi.js";
import Cookies from "js-cookie";
import routerNames from "../../../router/routes/routerNames.js";
import {useNavigate} from "react-router-dom";

const formInitValues = {
    login: '',
    password: '',
};

const ModalLogin = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {modalLoginOpen} = useSelector((state) => state.modalsAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginUser, {isLoading, isError, error, data}] = useGetUserByEmailAndPasswordMutation();

    const handleOpen = () => dispatch(setModalLoginOpen(true)); // Ensure you set the correct state
    const handleClose = () => dispatch(setModalLoginOpen(false)); // Ensure you set the correct state

    const buttonWithOnClick = cloneElement(button, {
        onClick: handleOpen,
    });

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: loginFormValidation,
        onSubmit: async (values, {resetForm}) => {
            try {
                enqueueSnackbar('Data sent to server to check', {variant: 'warning'});
                console.log(values)
                const response = await loginUser({email: values.login, password: values.password}).unwrap();
                console.log('Login Successful:', response);
                enqueueSnackbar('Successful Login!', {variant: 'success'});
                Cookies.set('LoggedIn', 'true');
                console.log(response.role)
                Cookies.set('role', response.role);
                Cookies.set('name', response.first_name);
                resetForm();
                handleClose();
                if (response.role === 'admin') {
                    navigate(routerNames.pageAdmin);
                }
                window.location.reload();
            } catch (err) {
                console.error('Login Failed:', err);
                enqueueSnackbar('Login Failed! Please check your credentials.', {variant: 'error'});
            }

        },
    });

    return (
        <ModalTemplate
            title={'Log in'}
            button={buttonWithOnClick}
            open={modalLoginOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formLogin}>
                <FormGroup className={'flex '}>
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        touched={formik.touched.login}
                        error={formik.errors.login}
                        label={'Login:'}
                        name={'login'}
                        id={'login'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={'Password:'}
                        name={'password'}
                        id={'password'}
                        type={'password'}
                    />
                    <Button type={'submit'} variant={'contained'} sx={styles.loginButton}>
                        Log in
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalLogin.propTypes = {
    button: PropTypes.object.isRequired,
};

export default ModalLogin;
