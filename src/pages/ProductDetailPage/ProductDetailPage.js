import { useLocation } from "react-router-dom";
import "./ProductDetailPage.scss";

const ProductDetailPage = () => {
  const { state } = useLocation();
  const { brand, description, images, title } = state;
  return (
    <div className='container'>
      <div className='product'>
        <img src={images[0]} alt='product' />
        <div className='details'>
          <span>{`${brand} ${title}`}</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
