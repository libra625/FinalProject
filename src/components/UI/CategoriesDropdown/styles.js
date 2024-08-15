export const styles = {
    dropdownContainer: {
        display: 'inline-block',
        position: 'relative',
    },
    button: {
        display: 'flex',
        gap: '5px',
        height: '56px',
        width: '250px',
        borderRadius: '0',
        textTransform: 'none',
        fontSize: '16px',
        backgroundColor: '#379424',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2dff02',
        },
    },
    arrowIcon: {
        marginLeft: '30px',
    },
    menu: {
        marginTop: '0px',
    },
    menuItem: {
        width: '250px',
        height: '100%',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: '#f1f1f1',
            textDecoration: 'underline',
            color: '#4bc153'
        },
    },
    menuTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
};
