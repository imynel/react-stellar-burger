import stylePopupInfo from './IngredientDetails.module.css'
import PropTypes from 'prop-types';


const IngredientDetails = (({ingredint}) => {
    return (
        <>
            <h3 className={`${stylePopupInfo.title} mt-10 text text_type_main-large`}>Детали ингредиента</h3>
            <img className={stylePopupInfo.image} src={ingredint.image} alt="" />
            <p className='mt-4 mb-8 text text_type_main-medium'>{ingredint.name}</p>
            <div className={`${stylePopupInfo.info}`}>
                <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Каллории, ккал {ingredint.calories}</div>
                <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Белки, г {ingredint.proteins}</div>
                <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Жиры, г {ingredint.fat}</div>
                <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Углеводы, г {ingredint.carbohydrates}</div>
            </div>
        </>    
    )
})

IngredientDetails.propTypes = {
    ingredint: PropTypes.object
}

export default IngredientDetails