import React from "react";
import ListHeader from "../ListHeader";
import "./style.css";

// Importing React, ListHeader, and css files

// Extending React.Component class so Navbar gets its functionality
class Navbar extends React.Component {
    // Setting initial state
    state = {
        searchTerm: "",
        filteredEmployees: []
    };

    // When component mounts, renders updated state
    componentDidMount() {
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }

    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        // Getting value and name of the input which triggers the change
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });
        // Updating the input's state
        this.setState({
            filteredEmployees: filteredList

        });
    }

    // Render method returns JSX that should be rendered
    // Giving input a `value`, `name`, and `onChange` prop
    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.searchTerm}
                        name="searchTerm"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search Name"
                    />
                </form>
                {this.state.filteredEmployees.length > 0 &&
                    <ListHeader empList={this.state.filteredEmployees} />
                }
            </div>

        );
    }
}

export default Navbar;