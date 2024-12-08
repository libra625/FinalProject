import {Container, Typography} from "@mui/material";
import ProductInList from "../../UI/cards/ProductInList";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";

const ClothesFemale = () => {
    const clothesFemale = useGetAllProductsByCategoryQuery({category: 'women\'s clothing', limit: 4});
    return (
        <section style={styles.section}>
            <Container>
                <Link to={'/categories/women\'s%20clothing'}>
                    <Typography
                        variant={'h4'}
                        component={'h4'}
                        sx={styles.title}>
                        For her <ArrowForwardIcon color={'error'} fontSize={'30px'}/>
                    </Typography>
                </Link>

                <div style={{display: 'flex'}}>
                    {clothesFemale.data && clothesFemale.data.map((product, index) => {
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

export default ClothesFemale;
