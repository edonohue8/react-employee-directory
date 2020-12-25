import React from 'react';
import axios from "axios";
import SiteHead from './components/SiteHead';
import Navbar from './components/Navbar';
import './App.css';

// Importing React, axios, SiteHead, Navbar, and css files

// Extending React.Component class so App gets its functionality
class App extends React.Component {
  // Setting initial state
  state = {
    employees: [],
  };

  // When component mounts, renders updated state
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
      .then(res => {
        this.setState({ employees: res.data.results });
      });
  }

  // Render method returns JSX that should be rendered
  render() {
    return (
      <div className="App">
        <SiteHead />
        {this.state.employees.length > 0 &&
          <Navbar employees={this.state.employees} />
        }
      </div>
    );
  }
}

export default App;