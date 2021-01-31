import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsAction'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 395,
      minWidth: 100,
    },
    media: {
      height: 140,
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
    }
    
  });

function ProductsContainer ({ product, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, []);

   const classes = useStyles();

    return product.loading ? (
        <h2>loading</h2>
    ) : product.error ? (
        <h2>{product.error}</h2>
    ) : (
        <div>
            
            <div className={classes.flex}>
            {Object.keys(product).map(categoryTitle => 
            <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={product[categoryTitle][0].image} title="Category" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </div>
            )}
            
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
        product: state.products.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)