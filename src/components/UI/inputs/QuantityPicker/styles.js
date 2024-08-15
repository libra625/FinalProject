export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '50px',
        borderRadius: '0px',
    },
    buttonMinus: {
        '&.MuiButton-root': {
            padding: '2px 2px',
            borderRadius: '4px 0 0 4px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '30px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#000',
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
            }
        }
    },
    buttonPlus: {
        '&.MuiButton-root': {
            padding: '2px 2px',
            borderRadius: '0 4px 4px 0',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '30px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#000',
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
            }
        }
    },
};
