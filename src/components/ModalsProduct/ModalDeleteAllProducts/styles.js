export const styles = {
    buttonDelete: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '40px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '20px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#e25c1d',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#f65305',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#f65305',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    buttonCancel: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '40px',
            borderRadius: '4px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid rgba(0,0,0,0.19)',
            '&:hover': {
                backgroundColor: '#ccc',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ccc',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
}
