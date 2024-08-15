import image from './pattern-container0_5.jpeg';

export const styles = {
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderRadius: '50px',
        margin: '0 0 40px 0',
        fontWeight: 'bold',
        maxWidth: '250px',
        color: 'rgba(0,0,0,0.86)',
        '&:hover': {
            transition: '0.2s',
            backgroundColor: '#43b02a',
            color: '#fff',
        },
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e25c1d',
        backgroundImage: `url(${image})`,
        backgroundBlendMode: 'screen',
        backgroundRepeat: 'repeat',
        height: '900px',
    },
};
