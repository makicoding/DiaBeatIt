import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div>

        {/* Navbar imported from components folder */}
        <Nav />

        <div className="container" fluid>
          
          <div className="row">
            <div className="col-md-12">

              <div className="jumbotron">
                <h1>
                  {this.state.book.title} by {this.state.book.author}
                </h1>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">

              <article>
                <h1>Synopsis</h1>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            
            </div>
          </div>

          <div className="row">
            <div size="col-md-2">
              <a href="/">← Back to Authors</a>
            </div>
          </div>

        </div>

      </div>

    );
  }

}

export default Detail;
