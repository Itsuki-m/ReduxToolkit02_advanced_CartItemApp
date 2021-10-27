import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 8,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  },
  {
    id: 'p3',
    price: 12,
    title: 'My Third Book',
    description: 'The third book I ever wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((price) => {
          return (
            <ProductItem
              key={price.id}
              id={price.id}
              title={price.title}
              price={price.price}
              description={price.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
