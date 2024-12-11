import ModalTemplate from "../../UI/ModalTemplate";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import registerFormValidation from "./registerFormValidation.js";
import {Button, FormGroup} from "@mui/material";
import FormInput from "../../UI/inputs/FormInput/index.js";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {cloneElement} from "react";
import {setModalRegOpen} from "../../../redux/slices/modalsAuthSlice.js";
import {formatPhoneNumber} from "../../../utils/functions/functions.js";
import {useSnackbar} from "notistack";
import {usePostUserMutation} from "../../../redux/productsApi/productsApi.js";
import Cookies from "js-cookie";

const formInitValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '+38(0',
    email: '',
    password: '',
    confirmPassword: '',
}

const ModalRegister = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();

    const handlePhoneNumberChange = (event) => {
        const {value} = event.target;
        formik.setFieldValue('phoneNumber', formatPhoneNumber(value));
    };

    const {modalRegOpen} = useSelector(state => state.modalsAuth);
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setModalRegOpen());
    const handleClose = () => dispatch(setModalRegOpen());

    const buttonWithOnClick = cloneElement(button, {
        onClick: handleOpen,
    });

    const [postUser, {isLoading, isError, error, isSuccess}] = usePostUserMutation();

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: registerFormValidation,
        onSubmit: async (values, {resetForm}) => {
            try {
                enqueueSnackbar('Data sent to server to check', {variant: 'warning'});
                const response = await postUser(values).unwrap();
                console.log('Registration Successful:', response);
                enqueueSnackbar('Registration Successful!', {variant: 'success'});
                enqueueSnackbar('Checks passed successfully', {variant: 'success'});
                Cookies.set('LoggedIn', 'true');
                Cookies.set('role', 'user');
                Cookies.set('name', values.firstName);
                handleClickVariant('success')();
                resetForm();
                handleClose();
                console.log(response);
                console.log(isLoading);
                console.log(isError);
                console.log(isSuccess)
                window.location.reload();
            } catch (err) {
                console.error('Registration Failed:', err);
                enqueueSnackbar('Registration failed! Please check your details.', {variant: 'error'});
            }
        },
    });

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Successful Registration!', {variant});
    };

    return (
        <ModalTemplate
            title={'Sign Up'}
            button={buttonWithOnClick}
            open={modalRegOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formRegister}>
                <FormGroup className={'flex'}>
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.firstName.trim()}
                        touched={formik.touched.firstName}
                        error={formik.errors.firstName}
                        label={'First Name:'}
                        name={'firstName'}
                        id={'firstName'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.lastName.trim()}
                        touched={formik.touched.lastName}
                        error={formik.errors.lastName}
                        label={'Last Name:'}
                        name={'lastName'}
                        id={'lastName'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={handlePhoneNumberChange}
                        value={formik.values.phoneNumber.trim()}
                        touched={formik.touched.phoneNumber}
                        error={formik.errors.phoneNumber}
                        label={'Phone Number:'}
                        name={'phoneNumber'}
                        id={'phoneNumber'}
                        type={'tel'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password.trim()}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={'Password:'}
                        name={'password'}
                        id={'password'}
                        type={'password'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword.trim()}
                        touched={formik.touched.confirmPassword}
                        error={formik.errors.confirmPassword}
                        label={'Confirm Password:'}
                        name={'confirmPassword'}
                        id={'confirmPassword'}
                        type={'password'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.email.trim()}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        label={'Email:'}
                        name={'email'}
                        id={'email'}
                        type={'text'}
                    />
                    <Button type={'submit'} sx={styles.signUpButton} variant={'contained'}>
                        Sign Up
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    )
}

ModalRegister.propTypes = {
    button: PropTypes.object.isRequired
}

export default ModalRegister;
