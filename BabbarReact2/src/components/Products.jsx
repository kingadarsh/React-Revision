import './Products.css';
import Card from './Card';
import Name from './Name';

function Products(props){

    return(
        <Card className='products'>

            {props.Items.map(item => (

                <Name
                    key={item.id}
                    title={item.title}
                    date={item.date}
                />

            ))}
            

        </Card>
    );
}

export default Products;