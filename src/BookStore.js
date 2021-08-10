import react from 'react'
function Bookstore(){
    return (
        <section>

         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         </section>
        )    }

const Book = () => {
    return <article><Img></Img>
    </article>

}
const Img =() => <img src="https://images-eu.ssl-images-amazon.com/images/I/51445enmt9S._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""></img>
export default Bookstore