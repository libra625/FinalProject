export const styles = {
    header: {
        backgroundColor: '#fff',
        height: '75px',
    },
    container: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        width: '340px'
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '45px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#e25c1d',
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
    selector: {
        width: '200px',
        '& .MuiInputBase-root': {
            height: '30px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '200px'
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
            width: '200px'
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
            width: '200px'
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#43b02a',
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
            width: '200px'
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#43b02a',
            width: '200px'
        }
    },
    buttonLogOut: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#e25c1d',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fd661f',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#fd661f',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    navList: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    li: {
        maxWidth: '110px',
        '&:nth-of-type(3)': {
            maxWidth: '80px'
        }
    },
    liButton: {
        maxWidth: '150px',
        padding: 'unset'
    },
    discounts: {
        width: '100%',
        padding: '5px 10px',
        color: '#fff',
        borderRadius: '20px',
        backgroundColor: '#fd0000'
    },
    giftCards: {
        width: '100%',
        '&:hover': {
            color: '#e25c1d'
        }
    },
    liMore: {
        display: 'flex',
        gap: '20px',
        maxWidth: '120px',
        marginLeft: '10px',
        '&:hover': {
            color: '#e25c1d'

        }
    },
    liContact: {
        display: 'flex',
        gap: '20px',
        maxWidth: '160px',
        marginLeft: '10px',
        color: '#e25c1d',
        '&:hover': {
            color: '#ff7b3c'

        }

    },
    menuItem: {
        display: 'flex',
        gap: '10px',
        width: '155px',
        height: '100%',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: '#fff',
            textDecoration: 'underline',
            color: '#e25c1d'
        },
    },
    phoneNumber: {
        letterSpacing: '2px',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '18px'
    },
    phoneNumberLast: {
        paddingLeft: '30px',
        letterSpacing: '2px',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '18px'
    },
    liPhone: {
        width: '330px',
    },
    number: {
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'underline'
    },

}
