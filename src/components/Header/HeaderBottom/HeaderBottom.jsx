import {styles} from "./styles";
import {Box, Button, Container, Tooltip, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import CategoriesDropdown from "../../UI/CategoriesDropdown/index.js";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductList} from "../../../redux/slices/localStorageSlice.js";

const HeaderBottom = () => {
    const {orderList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const getTotalPrice = (products) => {
        const priceTotal = products.reduce((totalPrice, product) => {
            return {
                price: totalPrice.price + product.price * product.amount,
                quantity: totalPrice.quantity + product.amount
            }
        }, {price: 0, quantity: 0});
        return {price: parseFloat(priceTotal.price.toFixed(2)), quantity: priceTotal.quantity};
    }

    return (
        <section style={fixedHeader ? styles.fixedHeader : styles.header}>
            <Container sx={styles.container}>
                <CategoriesDropdown/>
                <div style={styles.wrapper}>
                    <ProductsSelect styles={styles.selector}/>
                </div>
                <div style={styles.wrapperButtonGroup}>

                        <Button sx={styles.buttonLogIn} variant="contained">
                        <LoginOutlinedIcon/>
                        <Typography variant='h6'>LogIn</Typography>
                        </Button>


                    <div className="w-[1px] h-9" style={styles.separator}/>

                    <Tooltip title={'View your favorites'}>
                        <Link to={routerNames.pageFavProducts}>
                            <Button sx={styles.buttonFav} variant="contained">
                                <FavoriteBorderIcon/>
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip title={orderList.length < 1 ? 'Add items to proceed to the cart!' : 'View your cart'}>
                        <Link to={orderList.length < 1 ? routerNames.pageMain : routerNames.pageCart}>
                            <Button sx={styles.buttonCart} variant="contained">
                                <ShoppingCartOutlinedIcon/>
                                {orderList.length !== 0 && (
                                    <span style={styles.cartItemCounter}>
                                        {getTotalPrice(orderList).quantity}
                                    </span>
                                )}
                                {orderList.length !== 0 ? (
                                    <Box className='flex flex-col'>
                                        <Typography variant='p'>Total</Typography>
                                        <span>${getTotalPrice(orderList).price}</span>
                                    </Box>
                                ) : (
                                    <Typography variant='h6'>Cart</Typography>
                                )}
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
            </Container>
        </section>
    )
}

export default HeaderBottom;
