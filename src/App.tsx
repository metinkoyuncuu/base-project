import {OverlayLoader} from "./components/overlay_loader/overlay-loader";
import RouteDefinitions from "./components/routes/route-definitions";

function App() {
	return (
		<>
			{/* Navbar */}
			<OverlayLoader />
			<RouteDefinitions />
			{/* Footer */}
		</>
	);
}

export default App;