export const styles = {
    radioButton: {
        border: '1px solid rgba(0,0,0,0.11)',
        borderRadius: '8px',
        color: 'rgba(0,0,0,0.61)',
        padding: '10px'
    },
    radioGroup: {
        display: 'flex',
        gap: '15px',
        width: '700px',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        backgroundColor: '#fff',
        padding: '40px',
        gap: '20px'
    },
    buttonSubmit: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '250px',
            maxWidth: '700px',
            maxHeight: '40px',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#FD661FFF',
            padding: '5px 20px',
            color: 'white',
            border: '1px solid rgb(253,102,31)',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#e25c1d',
                color: 'white'
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    }
}
