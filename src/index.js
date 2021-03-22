import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Loader from './components/Loader';
// css
import './index.css';


class MainApp extends React.Component{
    
    state={lat:null, long:null,errorMessage:""};
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
        position=>this.setState({lat: position.coords.latitude,long:position.coords.longitude}),
        err=>this.setState({errorMessage:err.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat)
        return <><h2>Error: {this.state.errorMessage} </h2></>
        if(!this.state.errorMessage && this.state.lat)
        return <SeasonDisplay lat={this.state.lat} />
        return <Loader Message="Please accept the location request."/>
    }

    render(){
            return(
                <div className="redBorder">
                    {this.renderContent()}
                </div>
            );
    };
};



ReactDOM.render(<MainApp/>,document.querySelector('#root'));