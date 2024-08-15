export const styles = {
    notFound: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.81)'
    },
    section: {
        minHeight: '100vh',
        maxHeight: '100%'
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '45px',
            borderRadius: '5px',
            textTransform: 'none',
            fontSize: '20px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.4s, color 0.4s, box-shadow 0.4s',
            minWidth: '200px',
        },
        // Styles for contained buttons
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
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        justifyContent: 'center',
        margin: '15% 0'
    }
}
