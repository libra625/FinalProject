export const styles = {
    radioButton: {
        border: '1px solid rgba(0,0,0,0.11)',
        borderRadius: '8px',
        color: 'rgba(0,0,0,0.61)',
        paddingLeft: '10px'
    },
    radioGroup: {
        display: 'flex',
        gap: '10px',
        width: '700px',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        backgroundColor: '#fff',
        padding: '40px',
        gap: '20px',
        borderRadius: '8px'
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
            backgroundColor: '#e25c1d',
            padding: '5px 20px',
            color: '#fff',
            border: '1px solid rgb(253,102,31)',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#e25c1d',
                color: '#fff'
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
    },
    selectorTitle: {
        fontSize: '18px',
        color: '#ccc'
    },
    selector: {
        '& .MuiInputBase-root': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '700px',
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#43b02a',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#43b02a',
        },
    },
    selectorError: {
        color: '#ff0404',
        fontSize: 'small',
        margin: '0 0 0 5px'
    }
}
