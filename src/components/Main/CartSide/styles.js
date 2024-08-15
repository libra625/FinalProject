export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '0',
        right: '0',
        width: '45vw',
        minHeight: '100vh',
        backgroundColor: '#fff',
        borderRadius: '5px 0 0 5px',
        boxShadow: 1,
        p: 4,
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    modalTitle: {
        fontWeight: '500',
        fontSize: '32px',
        color: '#000',
        paddingLeft: '75px'
    },
    wrapper: {},
    buttonContinue: {

        '&.MuiButton-root': {
            padding: '5px 10px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: '#fff',
            border: '1px solid rgba(0,0,0,0.16)',
            color: '#ccc',
            '&:hover': {
                backgroundColor: '#ccc',
                color: '#fff',
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
    buttonChoice: {

        '&.MuiButton-root': {
            padding: '5px 40px',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            border: '2px solid #40ad2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#e25c1d',
                border: '2px solid #fd661f',
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
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
            border: '2px solid #40ad2a',
            color: '#43b02a',
            '&:hover': {
                border: '2px solid #fd661f',
                color: '#e25c1d',
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
    buttonClose: {

        '&.MuiButton-root': {
            padding: '13px 0',
            borderRadius: '100px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: 'transparent',
            border: 'unset',
            color: 'rgba(0,0,0,0.61)',
            '&:hover': {
                backgroundColor: '#ccc',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ccc',
            },
            '&.Mui-disabled': {
                backgroundColor: '#8f8f8f',
                color: '#fff',
                boxShadow: 'none',
            }
        }

    },
    buttonGroup: {
        paddingBottom: '150px',
        borderBottom: '1px solid grey'
    },
}
