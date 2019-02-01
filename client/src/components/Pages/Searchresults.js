import React from "react";
import axios from "axios";
import './searchresults.css';

import Displaybooks from "../Displaybooks/Displaybooks"
import Nav from "../Nav/Nav"
import Header from "../Header/Header"
import API from "../../utils/API"

export default class Searchresults extends React.Component {
    state = {
        names: '',
        title: "",
        authors: "",
        description: "",
        infoLinks: "",
        imageLinks: "",
        booksarray: []
    };


    loadBooks = () => {
        console.log(" I need to save this book")
        this.setState({
            names: ""
        })

    }

       savebook = (info) => {

        console.log(info)
        API.saveBook({

            title: this.state.title + info.title,
            authors: this.state.authors + info.authors,
            description: this.state.description + info.description,
            infoLinks: this.state.infoLinks + info.infoLink,
            imageLinks: this.state.imageLinks + info.imageLinks.thumbnail,

        })
            .then(res => {
                alert("you have saved this book")
                console.log(info.title)
            })

            .catch(err => console.log(err));
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,

        })

    }


    handleSearch = event => {
        event.preventDefault();

        let query = {
            names: this.state.names,
        };
        // const link = "https://www.googleapis.com/books/v1/volumes?q"
        if (query.names) {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.names}`)

                .then(res => {
                    this.setState({
                        booksarray: res.data.items,
                        names: ""
                    })


                    // let names = this.state.items
                    console.log(this.state.booksarray)
                    // console.log(this.state.names)

                }
                )
                .catch(err => console.log(err));
        } else console.log("type an author name")

    }

    render() {
        const { booksarray } = this.state

        return (
            <div  >
                <Nav />
                <Header />

                <form className="p-4 " onSubmit={this.handleSearch}>
                    <input className="form-control mb-2" type="text" name="names" value={this.state.names} onChange={this.handleChange} placeholder="search for a  book" />

                    <button className="btn btn-info" type="submit"   > Search</button>
                </form>
                <span> {booksarray.map((book) => {
                    let { title, description, imageLinks, authors, infoLink } = book.volumeInfo
                    // console.log("The item id are " + item.id)
                    return (
                        <div key={book.id}>
                            <Displaybooks title={title} description={description} imageLinks={imageLinks} authors={authors} infoLink={infoLink}
                                onClick={() => {
                                    console.log("you clicked me ")
                                     
                                    this.savebook(book.volumeInfo)
                                    // console.log(infoLink)

                                }}
                            />
                        </div>

                    )

                }
                )}
                </span>


            </div>
        )
    }

}
//
