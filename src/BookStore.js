import react from 'react'
import './index.css'
function Bookstore(){
    return (
        <section className="booklist" >

         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         
         </section>
        )    }

const Book = () => {
    return <article>
        <Img />
        <Title />
        <Author />
        </article>
}
const Img = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/51445enmt9S._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""></img>
const Title = () => <h1 style={{color: '#617d58', fontSize:'1.75rem', marginTop:"0.25rem"}}>The Art of Impossible</h1>
const Author = ( ) => <h3 style={{color: '#617d98', fontSize:'0.75rem', marginTop:"0.25rem"}}>Steven Kotler</h3>
export default Bookstore