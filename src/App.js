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
    }

    componentWillMount() {
      this.initSocket()
    }

    initSocket = () => {
        const socket = io('ws://159.65.94.112/ws/rise_acreo_sensor_1');
        socket.on('connect', () => {
            console.log("Nu är vi uppkopplade!!");
            socket.on('message', (msg) => {
              console.log(msg);
            })
        });
    }

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <div className="menuItems">
                        <div className={"menuItem " + (this.state.renderContent === 'Dashboard' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Dashboard')}>
                            <div className="iconContainer">
                                <img alt={this.state.renderContent} src={(this.state.renderContent === 'Dashboard' ? dashboardIconActive : dashboardIconInactive)}></img>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Api' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Api')}>
                            <div className="iconContainer">
                                <img alt={this.state.renderContent} src={(this.state.renderContent === 'Api' ? apiIconActive : apiIconInactive)}></img>
                            </div>
                            <p>API info</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Kontakt' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Kontakt')}>
                            <div className="iconContainer">
                                <img alt={this.state.renderContent} src={(this.state.renderContent === 'Kontakt' ? contactIconActive : contactIconInactive)}></img>
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
