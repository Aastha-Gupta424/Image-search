import React, { Component } from 'react';
import { Container } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <center>
                    <div className="Jumbotron">
                        <h1 className="center">Search Photos</h1>
                        <form className="center">
                            <input
                                type="text"
                                id="search"
                                name="s"
                            />
                            <button type="submit" class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </center>
            </Container>
        )
    }

}
export default SearchBar;