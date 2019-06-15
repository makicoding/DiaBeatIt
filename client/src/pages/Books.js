import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Nav from "../components/Nav";

class Books extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
      <div>

        {/* Navbar imported from components folder */}
        <Nav />

        <div className="container">

          <div className="row">
            <div className="col-md-6">
              
              <div className="jumbotron">
                <h1>What Books Should I Read?</h1>
              </div>
              
              <form>
                <div className="form-group">
                  <input className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title (required)">
                  </input>
                </div>

                <div className="form-group">
                  <input className="form-control" value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Author (required)">
                  </input>
                </div>

                <div className="form-group">
                  <textarea className="form-control" rows="10" value={this.state.synopsis} onChange={this.handleInputChange} name="synopsis" placeholder="Synopsis (optional)">
                  </textarea>
                </div>

                { /* User input authentication with multiple mandatory required input fields */ }
                <button disabled={!(this.state.title && this.state.author)} onClick={this.handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit Book
                </button>

              </form>

            </div>



            <div className="col-md-6">

              <div className="jumbotron">
                <h1>Books On My List</h1>
              </div>
              
              {/* Ternary operator (if/else statement short hand version) */}
              {this.state.books.length ? (
                <div className="list-overflow-container">
                  <ul className="list-group">
                    {this.state.books.map(book => (
                      <li className="list-group-item" key={book._id}>
                      
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>

                        <span className="delete-btn" onClick={() => this.deleteBook(book._id)} role="button" tabIndex="0">✗</span>

                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}

            </div>

          </div>

        </div>

      </div>
    );
  }

}

export default Books;
