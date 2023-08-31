import styles from './IngregientsInConstructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../services/actions/constructor';

const IngregientsInConstructor = ({ingredient}) => {

    const dispatch = useDispatch()

    return (
        <div className={`${styles.container}`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => dispatch(deleteIngredient(ingredient, ingredient._id))}
            />
        </div>
    )
}

IngregientsInConstructor.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}

export default IngregientsInConstructor