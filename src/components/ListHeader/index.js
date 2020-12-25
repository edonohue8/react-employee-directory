import React from "react";
import Card from "../Card";
import "./style.css";

// Importing React, Card, and css files

// Extending React.Component class so ListHeader gets its functionality
class ListHeader extends React.Component {
    // Setting initial state
    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    // When component mounts, renders updated state
    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    // Not for initial render.  Invokes after update occurs
    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    // Function to sort employees by Name
    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    // Mapped over this.state.sortedEmployees to render a Card component for each employee object
    render() {
        return (

            <div>
                <div className="header">
                    <div>Photo</div>
                    {/* Using Red Triangle Pointed Down emoji to emphasize sorting option */}
                    <div><p onClick={this.sortName} className="name">Name🔻</p> </div>
                    <div>Gender</div>
                    <div>Age</div>
                    <div>Phone</div>
                    <div>E-mail</div>
                </div>

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (

                        <Card
                            image={item.picture.large}
                            first={item.name.first}
                            last={item.name.last}
                            title={item.name.title}
                            gender={item.gender}
                            age={item.dob.age}
                            phone={item.cell}
                            email={item.email}
                        />
                    ))
                }
            </div>
        );
    }
}

export default ListHeader;