import React, { Component } from 'react';
import Photos from './PhotoComponent';
import SearchBar from './Header';


class Main extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <SearchBar />
                <Photos />
            </div>
        )
    }
}
export default Main;