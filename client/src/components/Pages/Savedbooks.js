import React from "react";
import Nav from "../Nav/Nav"
import Header from "../Header/Header"
import API from "../../utils/API"
import { Link } from "react-router-dom";
// import Displaybooks from "../Displaybooks/Displaybooks"
//   window.location.reload(); 
export default class Savedbooks extends React.Component {
  
    state = {
        books: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
          .then(res =>API.getBooks()
          .then(res => this.setState({ books: res.data })) )
          .catch(err => console.log(err));
        //   this.setState({
        //     books: res.data
        //   })
      };

    render() {
        
        const { books } = this.state
        console.log(books)
        return (
            <div>
                <Nav />
                <Header />
                <span> {books.map((book) => {
                    let { title, description, imageLinks, authors, infoLinks } = book
                    console.log("images are " + imageLinks)
                    return (
                        <div key={book._id}>
                            <div className="container bg-secondary  " >
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 > Title :  {title} </h4>
                                        <h5 > Author :  {authors} </h5>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-sm-3 ">

                                        <img className="imagesize" src={imageLinks !== undefined ? imageLinks : ''} alt="bookimage" />
                                        <div >
                                            <a href={infoLinks} target="blank">  <button className="btn-info m-2"> more info</button>  </a>
                                            {/* <button onClick={onClick} className="btn-info m-2"> save</button> */}

                                           <button className="btn-dark"><Link to="/">← Back </Link>  </button> 
                                           <button className="btn-danger" onClick={() => this.deleteBook(book._id)} > Delete </button>   
                                        </div>

                                    </div>

                                    <p className="col-sm-9 searchresults "> {description}</p>
                                </div> <hr />

                            </div>
                        </div>

                    )

                }
                )}
                </span>

            </div>
        )

    }

}