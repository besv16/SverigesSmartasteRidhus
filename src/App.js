import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import Api from './components/Api'
import './App.css'

class App extends Component {

    state = {
        renderContent: 'Dashboard',
        isLoading: ''
    }

    renderContent(e) {
        this.setState({
            renderContent: e
        })
    }

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <div className="menuItems">
                        <div className={"menuItem " + (this.state.renderContent === 'Dashboard' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Dashboard')}>
                            <div className="iconContainer">
                                <img alt={this.state.renderContent} src={(this.state.renderContent === 'Dashboard' ? '/icons/dashboard_active.svg' : './icons/dashboard_inactive.svg')}></img>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <div className={"menuItem " + (this.state.renderContent === 'Api' ? 'active' : 'inactive')} onClick={(e) => this.renderContent('Api')}>
                            <div className="iconContainer">
                                <img alt={this.state.renderContent} src={(this.state.renderContent === 'Api' ? '/icons/api_active.svg' : './icons/api_inactive.svg')}></img>
                            </div>
                            <p>API</p>
                        </div>
                    </div>
                </div>
                <div className="dashboardContainerFull">
                    {this.state.renderContent === 'Dashboard' && (<Dashboard />)}
                    {this.state.renderContent === 'Api' && (<Api />)}
                </div>
            </div>
        );
    }
}

export default App;
