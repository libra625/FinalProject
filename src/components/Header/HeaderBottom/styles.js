export const styles = {
    header: {
        height: '56px',
        backgroundColor: '#43b02a',
    },
    fixedHeader: {
        height: '56px',
        backgroundColor: '#43b02a',
        position: 'fixed',
        zIndex: 9999,
        top: '0',
        width: '100%'
    },
    container: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        gap: '20px',
    },
    wrapperButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    selector: {
        '& .MuiInputBase-root': {
            height: '40px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '500px',
        },
        '& .MuiOutlinedInput-input': {
            height: '35px',
            padding: '0',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-8px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
    },
    separator: {
        backgroundColor: '#fff',
    },
    buttonFav: {
        '&.MuiButton-root': {
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '20px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            color: '#fff',
            '&:hover': {
                backgroundColor: 'unset',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    buttonCart: {
        '&.MuiButton-root': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '56px',
            borderRadius: 'unset',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '150px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#43b02a',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#e25c1d',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    buttonLogIn: {
        '&.MuiButton-root': {
            display: 'flex',
            justifyContent: 'space-between',
            height: '45px',
            borderRadius: 1,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '110px',
        },
        '&.MuiButton-contained': {
            backgroundColor: 'unset',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#43b02a',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    cartItemCounter: {
        backgroundColor: '#e25c1d',
        fontSize: '11px',
        fontWeight: 'bold',
        color: 'white',
        padding: '0 5px',
        borderRadius: '100px',
        zIndex: 5,
        position: 'absolute',
        top: '3px',
        right: '98px'
    }
};
