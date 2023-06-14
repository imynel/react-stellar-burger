import styles from './IngregientsInConstructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const IngregientsInConstructor = ({name, image, price}) => {
    return (
        <div className={`${styles.container}`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
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