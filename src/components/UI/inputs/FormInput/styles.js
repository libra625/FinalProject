export const styles = {
    formInput: {
        '&.MuiInput-root': {
            backgroundColor: 'rgb(255,255,255)',
            borderRadius: '10px',
            height: '35px',

        },
        '&.Mui-focused': {
            borderColor: 'black',

        },
        '&.Mui-disabled': {
            backgroundColor: 'lightgrey',

        },
        '&.Mui-error': {
            borderColor: 'red',
        },
        '&.MuiInput-multiline': {
            padding: '10px',

        },
        '& .MuiInput-input': {
            padding: '10px',

        },
        '& .MuiInput-inputTypeSearch': {
            borderRadius: '4px',
        },
    },
    inputLabel: {
        '&.MuiInputLabel-root': {
            color: 'black',
            paddingTop: '5px',
        },
        '&.Mui-focused': {
            color: 'black',
            fontSize: '22px',
        },
        '&.Mui-disabled': {
            color: 'grey',
        },
        '&.Mui-error': {
            color: 'red',
        },
        '&.Mui-required': {
            color: 'red',
        },
        '& .MuiInputLabel-asterisk': {
            color: 'red',
        },
    },
    signUpButton: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(255,83,0,0.46)',
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
    errorText: {
        color: 'red',
        fontSize: 'small',
        margin: '0 0 0 5px'
    },
    formControl: {
        '&.MuiFormControl-root': {
            marginBottom: '16px',
            minWidth: '120px',

        },
        '&.Mui-disabled': {
            opacity: 0.5,
        },
        '& .MuiInput-underline:before': {
            border: '1px solid rgba(0,0,0,0.09)',
            paddingTop: '10px',
            borderRadius: '4px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            border: '1px solid rgba(0,0,0,0.09)',
            borderRadius: '4px',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'transparent',
        },
    }
}
