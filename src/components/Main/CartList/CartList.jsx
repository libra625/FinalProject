import CartItem from "../../UI/cards/CartItem";
import {Box, Button, Container, IconButton, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import routerNames from "../../../router/routes/routerNames.js";
import {getProductList, removeAllProducts, setProductList} from "../../../redux/slices/localStorageSlice.js";
import {useSnackbar} from "notistack";
import ModalDeleteAllProducts from "../../ModalsProduct/ModalDeleteAllProducts/index.js";

const CartList = () => {
    const {enqueueSnackbar} = useSnackbar();

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal)
    };

    const {orderList} = useSelector(state => state.localStorage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    const getTotalPrice = (products) => {
        const priceTotal = products.reduce((totalPrice, product) => {
            return {
                price: totalPrice.price + product.price * product.amount,
                quantity: totalPrice.quantity + product.amount
            }
        }, {price: 0, quantity: 0});
        return {price: parseFloat(priceTotal.price.toFixed(2)), quantity: priceTotal.quantity};
    }

    const handleBackClick = () => {
        navigate(-1);
    }

    const handleQuantityCount = (id, newAmount) => {
        const productIndex = orderList.findIndex(product => product.id === id)
        if (productIndex !== -1) {
            const updatedProduct = {
                ...orderList[productIndex],
                amount: newAmount
            }

            const updatedList = [
                ...orderList.slice(0, productIndex),
                updatedProduct,
                ...orderList.slice(productIndex + 1)
            ]
            dispatch(setProductList(updatedList))
        }
    }


    const handleDeleteAll = () => {
        dispatch(removeAllProducts())
        enqueueSnackbar('All products have been removed!', {variant: 'error'});
        navigate(routerNames.pageMain)
    }

    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <Box className={'flex flex-row items-center pt-6 mb-4'}>
                    <IconButton onClick={handleBackClick}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography
                        variant='h5'
                        component={'p'}
                        className={'pl-7'}
                        sx={styles.titleBack}
                    >
                        Cart
                    </Typography>

                    {orderList.length > 0 && (
                        <Typography
                            variant='span'
                            component={'p'}
                            className={'pl-7'}
                            sx={styles.titleCount}
                        >
                            {`${getTotalPrice(orderList).quantity} 
                            ${getTotalPrice(orderList).quantity < 2 ? getTotalPrice(orderList).quantity === 1 ? 'item' : 'items' : 'items'} `}
                        </Typography>
                    )}
                </Box>

                <div style={styles.wrapper}>
                    <List sx={styles.productsList}>
                        <ListItem className={'bg-white'}>
                            <ModalDeleteAllProducts
                                button={
                                    <Button
                                        variant='outlined'
                                        startIcon={<DeleteForeverIcon color='disabled' fontSize='large'/>}
                                        sx={styles.deleteButton}
                                    >
                                        Delete All
                                    </Button>}
                                open={openModal}
                                onClose={handleOpenCartSide}
                                onDelete={handleDeleteAll}
                            />

                        </ListItem>
                        {orderList.length > 0 && orderList.map((product) => (
                            <CartItem
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                                count={product.count}
                                amount={product.amount}
                                onQuantityChange={handleQuantityCount}
                            />
                        ))}
                    </List>

                    <Box sx={styles.placeOrder}>
                        <List>

                            {(<ListItem sx={styles.sideBar}>

                                    <Button
                                        sx={styles.loginButton}
                                        variant='outlined'
                                        endIcon={<ArrowCircleRightIcon color='success'/>}
                                    >
                                        Log in
                                    </Button>

                            </ListItem>)}
                            <ListItem className={'flex flex-col'} sx={styles.sideBar}>
                                <Link to={routerNames.pageCheckout}>
                                    <Button
                                        sx={styles.buttonPlaceOrder}
                                        variant='outlined'
                                    >
                                        Place order
                                    </Button>
                                </Link>
                                <List className={'flex flex-col gap-5'}>
                                    <ListItem sx={styles.totalPrice}>
                                        {orderList.length > 0 && (
                                            <>
                                                <Typography>
                                                    {`${getTotalPrice(orderList).quantity}
                                                    ${getTotalPrice(orderList).quantity < 2 ? getTotalPrice(orderList).quantity === 1 ? 'item' : 'items' : 'items'} for `}
                                                </Typography>
                                                <Typography sx={styles.totalPriceSub}>
                                                    $ {getTotalPrice(orderList).price}
                                                </Typography>
                                            </>
                                        )}
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography>Discount</Typography>
                                        {orderList.length > 0 && (
                                            <Typography sx={styles.totalPriceSub}>- ${(getTotalPrice(orderList).price *
                                                0.1).toFixed(2)}</Typography>)}
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography
                                            variant='h6'
                                            component={'span'}
                                        >
                                            Total:
                                        </Typography>
                                        {orderList.length > 0 && (
                                            <Typography
                                                sx={styles.totalPriceSub}
                                                variant='h6'
                                                component={'span'}
                                            >
                                                $ {(getTotalPrice(orderList).price * 0.9).toFixed(2)}
                                            </Typography>
                                        )}
                                    </ListItem>
                                </List>
                            </ListItem>
                        </List>
                    </Box>
                </div>
            </Container>
        </section>
    )
}

export default CartList;
