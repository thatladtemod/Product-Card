import Perfume from "./assets/image-product-mobile.jpg";

export default function Header() {
    return (
        <header>
            <img className="product-image" src={Perfume} alt="the image of the product" />
        </header>
    )
}