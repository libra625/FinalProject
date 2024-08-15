export const styles = {
    link: {
        textDecoration: 'none',
    },
    card: {
        padding: '16px',
        marginLeft: '8px',
        display: 'flex',
        flexDirection: 'column',
        width: '280px',
        height: '620px',
        marginBottom: '8px',
        justifyContent: 'space-between',
        boxShadow: 'none',
        '&:hover': {
            transition: '0.3s',
            backgroundColor: 'rgb(238,238,238)',
            boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.22)',
        }
    },
    image: {
        marginTop: '40px',
        marginBottom: '20px',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '190px',
        height: '240px',
        alignSelf: 'center',
        position: 'relative',
    },
    title: {
        fontSize: '22px',
        marginTop: '8px',
        textAlign: 'left',
        color: '#291800',
        wordBreak: 'break-word'
    },
    body: {
        textAlign: 'left',
        marginTop: '4px'
    },
    price: {
        marginTop: '8px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)'
    },
    rating: {
        textAlign: 'left',
        marginTop: '4px'
    },
    count: {
        marginTop: '8px',
        fontSize: '16px',
        color: 'rgba(0,0,0,0.6)'
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    groupedText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    purchase: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    button: {
        '&.MuiButton-root': {
            padding: '13px 15px',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '50px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#42b02a',
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
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ebf6e8',
            color: '#fff',
            border: '0px',
            '&:hover': {
                backgroundColor: '#ccc',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ebf6e8',
            },
            '&.Mui-disabled': {
                backgroundColor: '#ccc',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    priceOriginal: {
        display: 'flex',
        alignItems: 'center',
        gap: '7px'
    },
    priceStrike: {
        fontSize: '18px',
        color: '#ccc'
    },
    discount: {
        fontSize: '16px',
        color: 'white',
        padding: '0 2px',
        borderRadius: '10px',
        backgroundColor: '#ff090b'
    },
    favButton: {
        position: 'absolute',
        right: '-25px',
        top: '80px',
        backgroundColor: ' rgba(255,255,255,0.61)',
    },
    commentIcon: {
        color: 'rgba(0,0,0,0.4)'
    },
    tooltip: {
        backgroundColor: '#000'
    }
};
