import { useParams } from 'react-router-dom';
import stylePopupInfo from './IngredientDetails.module.css';
import { useSelector } from '../../services/hooks/hooks';

const IngredientDetails = (): JSX.Element => {
  const ingredients = useSelector((store) => store.ingredientsReducer.allIngredients);
  const { id } = useParams();
  const ingredient = ingredients.find((elm) => elm._id === id);

  return (
    <>
      {ingredient ? (
        <div className={stylePopupInfo.page}>
          <h3 className={`${stylePopupInfo.title} mt-10 text text_type_main-large`}>
            Детали ингредиента
          </h3>
          <img className={stylePopupInfo.image} src={ingredient.image} alt={ingredient.name} />
          <p className="mt-4 mb-8 text text_type_main-medium">{ingredient.name}</p>
          <div className={`${stylePopupInfo.info}`}>
            <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>
              Каллории, ккал {ingredient.calories}
            </div>
            <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>
              Белки, г {ingredient.proteins}
            </div>
            <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>
              Жиры, г {ingredient.fat}
            </div>
            <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>
              Углеводы, г {ingredient.carbohydrates}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};


export default IngredientDetails;
