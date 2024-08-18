import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layout";
import Home from "../pages/home";
import SingleProduct from "../pages/singleProduct";
import Cart from "../pages/cart";
import TrackOrder from "../pages/trackOrder";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signup";
import Shipping from "../pages/shipping";
import Payment from "../pages/payment";
import Confirmation from "../pages/confirmation";

const routerPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index Component={Home} />
            <Route path="/home/:productId" Component={SingleProduct}/>
            <Route path="/cart" Component={Cart} />
            <Route path="/trackOrder" Component={TrackOrder} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/shipping" Component={Shipping} />
            <Route path="/payment" Component={Payment} />
            <Route path="/confirmation" Component={Confirmation} />
        </Route>
    )
)
export default routerPaths;
