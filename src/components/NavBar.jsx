import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "../slices/cartSlice";

const Navbar = () => {
  // const { cartItems } = useSelector((state) => state.cart);
  const cart = useSelector(selectAll);

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link to="/" className="cursor-pointer">
          <h1 className="flex no-underline">
            <span className="text-xl font-primary font-bold tracking-tight pt-1">
              فروشگاه استیکر
            </span>
          </h1>
        </Link>
        <div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
