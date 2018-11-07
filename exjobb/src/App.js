import React, { Component } from 'react'
import io from 'socket.io-client'
import Dashboard from './components/Dashboard'
import Api from './components/Api'
import Contact from './components/Contact'
import './App.css'
import dashboardIconActive from './icons/dashboard_active.svg'
import dashboardIconInactive from './icons/dashboard_inactive.svg'
import apiIconActive from './icons/api_active.svg'
import apiIconInactive from './icons/api_inactive.svg'
import contactIconActive from './icons/contact_active.svg'
import contactIconInactive from './icons/contact_inactive.svg'

const socketURL = 'https://159.65.94.112/api/v1/sensors';

class App extends Component {

    state = {
        renderContent: 'Dashboard',
        socket: null,
        isLoading: '',
    }

    renderContent(e) {
        this.setState({
            renderContent: e
        })
        console.log(this.state.renderContent);
    }

    componentWillMount() {
        //this.initSocket()
    }

    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_EXJOBB_API_KEY;
        const apiUrl = 'http://159.65.94.112/api/v1/sensors';
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
                              <img src={(this.state.renderContent === 'Dashboard' ? dashboardIconActive : dashboardIconInactive)}></img>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Api' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Api')}>
                            <div className="iconContainer">
                              <img src={(this.state.renderContent === 'Api' ? apiIconActive : apiIconInactive)}></img>
                            </div>
                            <p>API info</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Kontakt' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Kontakt')}>
                            <div className="iconContainer">
                              <img src={(this.state.renderContent === 'Kontakt' ? contactIconActive : contactIconInactive)}></img>
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
