import React, {Component} from 'react';
import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    //Generic to handle instead of split below
    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    // nameChangedHandler =(event) => {
    //     this.setState({name: event.target.value})
    // }
    //
    // ageChangedHandler =(event) => {
    //     this.setState({age: event.target.value})
    // }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name"
                       name="name"
                       onChange={this.onChangeHandler}
                       value={this.state.name}/>
                <input type="number"
                       placeholder="Age"
                       name="age"
                        onChange={this.onChangeHandler}
                        value={this.state.age}/>
                <button onClick={() =>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;