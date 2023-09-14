import PropTypes from 'prop-types';

const Card = ({card}) => {
  const {img, name, ratings, price} = card;
  const arr = [];
  const arr2 = [];
  let i = 0;
  for (; i < ratings; i++) arr.push(i);
  for (; i < 5; i++) arr2.push(i);

  return (
    <div className='border border-gray-300 rounded-lg'>
      <img className='w-full rounded-s-lg rounded-r-lg' src={img} alt="Bottle Image" />
      <div className='p-4'>
        <h2 className='text-xl font-medium mb-1'>{name}</h2>
        <div className='mb-1'>
          {
            arr.map(key => <i className="fa-solid fa-star text-orange-500" key={key}></i>)
          }
          {
            arr2.map(key => <i className="fa-regular fa-star text-orange-500" key={key}></i>)
          }
        </div>
        <span className='block text-2xl font-bold mb-4'>${price}</span>
        <a href="#" className="btn btn-primary text-base normal-case text-white h-auto min-h-[40px]">Add to Cart</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;