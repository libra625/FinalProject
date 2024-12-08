import {Container, Typography} from "@mui/material";
import ProductInList from "../../UI/cards/ProductInList";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Jewelery = () => {
    const jewelery = useGetAllProductsByCategoryQuery({category: 'jewelery', limit: 4});
    return (
        <section style={styles.section}>
            <Container>
                <Link to={'/categories/jewelery'}>
                    <Typography
                        variant={'h4'}
                        component={'h4'}
                        sx={styles.title}>
                        Jewelery <ArrowForwardIcon color={'error'} fontSize={'30px'}/>
                    </Typography>
                </Link>


                <div style={{display: 'flex'}}>
                    {jewelery.data && jewelery.data.map((product, index) => {
                        return (
                            <ProductInList
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                itemId={product.id}
                                key={index}
                                rate={product.rating.rate}
                                count={product.rating.count}
                                description={product.description}
                            />
                        )
                    })}
                </div>

            </Container>
        </section>
    )
}

export default Jewelery;
