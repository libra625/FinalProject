export const styles = {
    section: {
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid rgba(0,0,0,0.09)'
    },
    container: {
        height: '450px',
        display: 'flex'
    },
    qRCodeContainer: {
        display: 'flex',
        padding: '16px',
        border: '2px solid rgba(0,0,0,0.09)',
        borderRadius: '12px',
        maxWidth: '295px',
        marginBottom: '8px',
        marginTop: '25px'
    },
    qRCodeText: {
        marginLeft: '10px',
        width: '150px',
        wordWrap: 'break-word',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        border: '1px solid rgba(0,0,0,0.09)',
        borderRadius: '20px',
        width: '295px',
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    formTitle: {
        width: '100%',
        height: '35px'
    },
    formSubtitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'rgba(0,0,0,0.61)',
        fontSize: '20px'
    },
    emailSubmit: {
        '&.MuiButton-root': {
            marginTop: '8px',
            padding: '5px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#389524',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#e25c1d',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    li: {
        display: 'flex',
        padding: '0',
        flexDirection: 'column'
    },
    list: {
        display: 'flex',
        alignItems: 'start',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.72)'
    },
    subtitle: {
        fontSize: '15px',
        color: 'rgba(0,0,0,0.65)',
        '&:hover': {
            textDecoration: 'underline',
            color: 'rgba(0,0,0,0.85)',
        }
    },
    phoneNumber: {
        color: '#43b02a',
        fontWeight: 'bold',
        fontSize: '22px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    phoneNumberLi: {
        paddingTop: '0',
        paddingBottom: '0',
    },
    linkServices: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',

        '&:hover': {
            textDecoration: 'underline'
        }
    }

};
