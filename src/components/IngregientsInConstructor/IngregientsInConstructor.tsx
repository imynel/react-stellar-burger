import styles from './IngregientsInConstructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { func, number, object, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../services/actions/constructor';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TIngredient } from '../../services/types/types';

type props = {
  ingredient: TIngredient;
  key: string;
  index: number;
  swap: any;
}

const IngregientsInConstructor = ({ ingredient, key, index, swap }: props): JSX.Element => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'constructor',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'constructor',
    hover(item: any, monitor: any) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      swap(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div className={`${styles.container}`} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(deleteIngredient(ingredient, key))}
      />
    </div>
  );
};

IngregientsInConstructor.propTypes = {
  swap: func,
  ingredient: object,
  index: number,
  key: string,
};

export default IngregientsInConstructor;
