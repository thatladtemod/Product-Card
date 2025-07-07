import cartIcon from "./assets/icon-cart.svg";

export default function Section() {
    return (
        <section className="product-info">
            <p className="product-type">PERFUME</p>
            <h1 className="product-name">Gabrielle Essence Eau De Parfum</h1>
            <p className="product-description">
                A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="price">
                <span className="current-price">$149.99</span>
                <span className="previous-price">$169.99</span>
            </div>
            <button className="add-to-cart">
                <span className="cart-icon"><img src={cartIcon} alt="cart icon for the button" /></span>
                Add to Cart
                </button>
        </section>
    )
}