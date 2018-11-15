import React from "react"
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBzqHiK1b8pJfOR2aQpoxGVzLKDEBsdoNs&v=3." +
		"exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{height: `100%`}}/>,
		containerElement: <div style={{height: `500px`, width: '100%'}}/>,
		mapElement: <div style={{height: `100%`}}/>,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap defaultZoom={17} defaultCenter={{lat: 47.074892, lng: 37.508204}}
	>
		{props.isMarkerShown && <Marker position={{lat: 47.074892, lng: 37.508204}} onClick={props.onMarkerClick}/>}
	</GoogleMap>
);

class MyFancyComponent extends React.PureComponent {
	state = {
		isMarkerShown: false,
	};
	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({isMarkerShown: true})
		}, 1000)
	};
	handleMarkerClick = () => {
		this.setState({isMarkerShown: false});
		this.delayedShowMarker()
	};

	componentDidMount() {
		this.delayedShowMarker()
	}

	render() {
		return (
			<MyMapComponent
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}
}

export default MyFancyComponent;