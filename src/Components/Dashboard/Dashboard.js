import React, {Component} from 'react';


class Dashboard extends Component {
    render() {
        return(
            <div>
                <input placeholder='Search'/>
                <button>Search</button>
                <button>Reset</button>
                <input type='checkbox' label='My Posts'/>

            </div>
        )
    }
}

export default Dashboard;