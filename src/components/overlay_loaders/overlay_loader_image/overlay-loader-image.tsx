import "./overlay-loader.css";
import {useSelector} from "react-redux";

type Props = {
	imageUrl:string;
};

export const OverlayLoaderImage = (props: Props) => {
	const loadingState = useSelector((state: any) => state.loading);

	return (
		<>
			{
            loadingState.requestCount > 0 && 
                (
				<div className="overlay">
					<div className="overlay__inner">
						<div className="overlay__content">
							<img className="spinner" src={props.imageUrl}/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};