import styles from './IngregientsInConstructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const IngregientsInConstructor = (props) => {
    return (
        <div className={`${styles.container}`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    )
}

export default IngregientsInConstructor