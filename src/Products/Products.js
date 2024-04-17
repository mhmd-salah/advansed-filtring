import { ShoppingBagIcon, StarIcon } from "@heroicons/react/16/solid";
import "./Products.css"

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="this imag"
          />
          <div className="card-details"> 
          <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <StarIcon className="icon " />
              <StarIcon className="icon " /> 
              <StarIcon className="icon " />
              <StarIcon className="icon " />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del> $200
              </div>
              <div className="bag">
                <ShoppingBagIcon className="icon"/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products
