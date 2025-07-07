import Perfume from "./assets/image-product-mobile.jpg";
import PerfumeDesk from "./assets/image-product-desktop.jpg";

export default function Header() {
    return (
        <header>
            <img className="product-image" src={Perfume} alt="the image of the product" />
            <img className="product-image-desktop" src={PerfumeDesk} alt="the image of the product" />
        </header>
    )
}