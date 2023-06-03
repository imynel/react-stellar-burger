import styles from './IngregientsInConstructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const IngregientsInConstructor = (props) => {
    const [name, image, price] = props
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

export default IngregientsInConstructor