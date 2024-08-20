import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OverlayLoaderImage} from "./components/overlay_loaders/overlay_loader_image/overlay-loader-image";
import RouteDefinitions from "./components/routes/route-definitions";
import toastr from 'toastr';
import { OverlayLoaderBike } from "./components/overlay_loaders/overlay_loader_bike/overlay-loader-bike";
import { OverlayLoaderInfinity } from "./components/overlay_loaders/overlay_loader_infinity/overlay-loader-infinity";
import { OverlayLoaderShopping } from "./components/overlay_loaders/overlay_loader_shopping/overlay-loader-shopping";
import BasicNavbar from "./components/navbars/basic_navbar/basic-navbar";

function App() {

	useEffect(() => {
		toastr.error('Sıkıntı');
	  }, []);

	return (
		<>
			{/* Navbar */}
			<BasicNavbar fixed="top" sticky="top" backgroundColor={'blue'}  expand='xxl'  dataBsTheme="dark"/>
			{<OverlayLoaderImage imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"/> }
			 {/* <OverlayLoaderBike width='20em' />  */}
			{/* <OverlayLoaderInfinity /> */}
			{/* <OverlayLoaderShopping/> */}

			<RouteDefinitions />
			{/* Footer */}
		</>
	);
}

export default App;