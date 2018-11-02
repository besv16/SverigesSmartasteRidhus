import React, { Component } from 'react'
import io from 'socket.io-client'
import Dashboard from './components/Dashboard'
import Api from './components/Api'
import Contact from './components/Contact'
import './App.css'

const socketURL = 'https://159.65.94.112/api/v1/sensors';

class App extends Component {

    state = {
        renderContent: 'Dashboard',
        socket: null,
        isLoading: '',
        sensors: []
    }

    renderContent(e) {
        this.setState({
            renderContent: e
        })
    }

    componentWillMount() {
        //this.initSocket()
    }

    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_EXJOBB_API_KEY;
        const apiUrl = 'http://159.65.94.112/api/v1/sensors';

        fetch(apiUrl, {
            method: 'GET',
            withCredentials: true,
            // credentials: 'include',
            // headers: {
            //   'Authorization': auth,
            // }
        })
            .then(data => data.json())
            .then((json) => {
                this.setState({
                    sensors: json,
                })
            })
            .catch(error => this.setState({
                message: 'Something bad happened ' + error
            }));

        console.log(this.state.sensors);
        console.log(this.state.isLoading);

    }

    // initSocket = () => {
    //   const socket = io(socketURL)
    //   console.log(socket)
    //   console.log(this.state)
    //   socket.on('connect', () => {
    //     console.log("Connected!")
    //   })
    //   this.setState({socket})
    // }

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <div className="menuItems">
                        <div className={"menuItem " + (this.state.renderContent === 'Dashboard' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Dashboard')}>
                            <div className="iconContainer">
                                <div className="icon"></div>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Api' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Api')}>
                            <div className="iconContainer">
                                <div className="icon"></div>
                            </div>
                            <p>API</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Kontakt' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Kontakt')}>
                            <div className="iconContainer">
                                <div className="icon"></div>
                            </div>
                            <p>Kontakt</p>
                        </div>
                    </div>
                </div>
                <div className="dashboardContainerFull">
                    {this.state.renderContent === 'Dashboard' && (<Dashboard />)}
                    {this.state.renderContent === 'Api' && (<Api />)}
                    {this.state.renderContent === 'Kontakt' && (<Contact />)}
                </div>
            </div>
        );
    }
}

export default App;
