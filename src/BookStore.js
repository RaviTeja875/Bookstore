import React from 'react'
import './index.css'
const FirstBook ={
    title:"The Art of Impossible",
    author: "Steven Kotler",
    img: "https://images-eu.ssl-images-amazon.com/images/I/51445enmt9S._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
}
const SecondBook ={
    title:"Winning the War in Your Mind",
    author: "Craig Groeschel",
    img: "https://images-na.ssl-images-amazon.com/images/I/41vNBA+VAtS._SX331_BO1,204,203,200_.jpg",
}
const ThirdBook ={
    title:"Do It Today",
    author: "Darius Foroux ",
    img: "https://images-na.ssl-images-amazon.com/images/I/41W-o6xu2bL._SX323_BO1,204,203,200_.jpg",
}
function Bookstore(){
    return (
        <section className="booklist" >
            <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />
            {/*we have passed data in the object through the component using props*/}
            <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author} />
            <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author} />

       
         
         </section>
        )    }

const Book = (props) => {
    return <article className='book'>
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        </article>
}

export default Bookstore