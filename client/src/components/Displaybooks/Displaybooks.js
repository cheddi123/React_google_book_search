import React from "react";

function Displaybooks({ title, description, imageLinks, authors, infoLink, onClick }) {
   
    return (
      
            <div  className="container bg-secondary  " >
                <div className="row">
                    <div className="col-sm-12">
                        <h4 > Title :  {title} </h4>
                        <h5 > Author :  {authors} </h5>
                    </div>
                </div>

                <div className="row">

                    <div className="col-sm-3 ">

                        <img className="imagesize" src={imageLinks.thumbnail !== undefined ? imageLinks.thumbnail : ''} alt="bookimage" />
                        <div >
                            <a href={infoLink} target="blank">  <button className="btn-info m-2"> more info</button>  </a>
                            <button onClick={onClick} className="btn-info m-2"> save</button>
                        </div>

                    </div>

                    <p className="col-sm-9 searchresults "> {description}</p>
                </div> <hr />

            </div>
       

    )
}

export default Displaybooks