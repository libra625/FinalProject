export const styles = {
    section: {
        backgroundColor: '#ccc',
        minHeight: '100vh',
        maxHeight: '100%'
    },
    wrapper: {
        maxWidth: '1200px',
        display: 'flex',
        gap: '25px'
    },
    placeOrder: {
        width: '350px',
        padding: '0',
        position: 'sticky',
        height: '350px',
        top: '0px'
    },
    productsList: {
        width: '825px',
    },
    titleBack: {
        fontWeight: 'bold',
        color: '#000'
    },
    titleCount: {
        color: '#000'
    },
    deleteButton: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            color: '#000',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#000',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#000',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    totalPrice: {
        padding: 'unset',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    loginButton: {
        '&.MuiButton-root': {
            padding: '2px 10px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            color: '#43b02a',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#ccc',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#000',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    sideBar: {
        backgroundColor: '#fff',
        marginBottom: ' 9px'
    },
    buttonPlaceOrder: {
        '&.MuiButton-root': {
            padding: '8px 5px',
            margin: '20px 0',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '300px',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#41ae2a',
            color: '#fff',
            border: 'unset',
            fontWeight: 'bold',
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
    totalPriceSub: {
        fontWeight: 'bold',
        color: '#000',
    },
}
