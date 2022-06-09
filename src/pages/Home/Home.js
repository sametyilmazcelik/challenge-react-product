import { useEffect, useState } from "react";
import "./Home.scss";
import CardList from "../../components/CardList/CardList";
import ProductsData from "../../data/products.json";
import { useSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchField, setSearchField] = useState("");
  let title = searchParams.get("title");

  const searchIt = (title) => {
    const filteredProductsArray = products.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );
    return filteredProductsArray;
  };

  useEffect(() => {
    const rawCats = ProductsData.products.map((product) => product.category);
    setCategories([...new Set(rawCats)]);
    setProducts(ProductsData.products);

    return () => {
      setProducts([]);
      setCategories([]);
    };
  }, [searchParams]);

  const onChange = (event) => {
    setSearchField(event.target.value);
  };

  const onKeyDown = () => {
    navigate({ pathname: "/search", search: `?title=${searchField}` });
  };

  const filterByCats = (event) => {
    const filteredByCats = ProductsData.products.filter((product) =>
      product.category
        .toLowerCase()
        .includes(event.target.innerText.toLowerCase())
    );
    setProducts(filteredByCats);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="header__container">
          <h1 className='header__title'>Tech App</h1>
          <input
            className='header__searchField'
            type='search'
            placeholder='Ara: Iphone, Samsung, Oppo'
            onChange={onChange}
            onKeyDown={(e) => (e.key === "Enter" ? onKeyDown() : null)}
          />
        </div>
      </div>
      <div className='row'>
        <div className="category-filter">
          <h3>Kategoriler</h3>
          <ul>
            <li onClick={() => setProducts(ProductsData.products)}>Hepsi</li>
            {categories.map((category) => (
              <li key={category} onClick={filterByCats}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <CardList products={title ? searchIt(title) : products} />
      </div>
    </div>
  );
};

export default Home;
