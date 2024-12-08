import {Container, Typography} from "@mui/material";
import ProductInList from "../../UI/cards/ProductInList";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Electronics = () => {
    const electronics = useGetAllProductsByCategoryQuery({category: 'electronics', limit: 4});
    return (
        <section style={styles.section}>
            <Container>
                <Link to={'/categories/electronics'}>
                    <Typography
                        variant={'h4'}
                        component={'h4'}
                        sx={styles.title}>
                        Electronics <ArrowForwardIcon color={'error'} fontSize={'30px'}/>
                    </Typography>
                </Link>

                <div style={{display: 'flex'}}>
                    {electronics.data && electronics.data.map((product, index) => {
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

export default Electronics;
