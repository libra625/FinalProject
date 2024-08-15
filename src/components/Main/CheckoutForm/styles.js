export const styles = {
    sectionForm: {
        backgroundColor: '#eee',
        minHeight: '850px',
        maxHeight: '100%'
    },
    wrapper: {
        display: 'flex',
        gap: '50px'
    },
    buttonBack: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-outlined': {
            backgroundColor: 'transparent',
            color: '#43b02a',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'transparent',
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
    checkoutTitle: {
        fontWeight: 'bold',
        color: '#616161'
    },
    selector: {
        '& .MuiInputBase-root': {
            height: '40px',
            backgroundColor: '#ccc',
            borderColor: '#fff',
            width: '700px',
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            width: '700px',
            transform: 'translate(0, 16px) scale(1)',

        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#43b02a'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#43b02a',
        },
    },
    selectorContainer: {
        height: '100px',
        width: '825px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 50px 30px 50px',
        gap: '10px',
        marginBottom: '20px'
    },
    selectorTitle: {
        fontSize: '15px',
        color: '#ccc'
    },
    checkoutList: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px'
    },
    titleList: {
        display: 'flex',
        justifyContent: 'space-between'
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
            maxHeight: '40px',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#fd661ddd',
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
    sidebar: {
        backgroundColor: '#fff',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        position: 'sticky',
        top: '20px'
    },
    summary: {
        marginBottom: '20px',
    },
    itemsPrice: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgb(110,110,110, 0.5)',
        paddingBottom: '10px',
        marginBottom: '40px'
    },
    totalPriceSub: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#000',
    },
    itemsCount: {
        color: '#ccc',
    },
    totalPriceMain: {
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#000'
    },
    checkoutButton: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '18px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '250px',
            maxHeight: '40px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#43b02a',
            padding: '5px 20px',
            color: '#fff',
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
    checkBoxGiftCard: {
        padding: '40px',
        border: 'unset',
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: '#fff',
    },
    inputGiftCardContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '60px',

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f6f5f5',
        width: '700px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
    },
    giftCardInfoSubtitle: {},
    giftCardInfoTitle: {
        marginBottom: '10px'
    },
    commentButton: {
        color: '#000',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&:disabled': {
            color: 'grey.500',
        },
        border: 'unset',
        borderColor: 'transparent',
        borderRadius: '50%',
        padding: '0',
        boxShadow: 0,
        transition: 'none',
    },
    commentIcon: {
        fontSize: '18px'
    },
    commentTitle: {
        fontSize: '18px',
        color: 'rgba(0,0,0,0.72)'
    },
    textArea: {
        width: '700px',
        height: '100px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'none',
        fontSize: '16px',
        color: '#333',
        outline: 'none',
        '&:hover': {
            borderColor: '#888',
        },
        '&:focus': {
            borderColor: '#42af2a',
            boxShadow: '0 0 0 3px #43b02a',
        },
        '&:disabled': {
            backgroundColor: '#f5f5f5',
            color: '#aaa',
        },
        '&::placeholder': {
            color: '#aaa',
            opacity: 1,
        },
        '&.error': {
            borderColor: '#f5222d',
        },
    },
    priceStrike: {
        fontSize: '18px',
        color: '#ccc',
        height: '10px'
    },

    totalPriceOriginalMain: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#ccc)',
        height: '30px'
    }

}
