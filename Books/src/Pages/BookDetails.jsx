import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavPar from '../Componenets/NavPar';
import axios from 'axios';
import Footer from '../Componenets/Footer';

function BookDetails() {

    const [book, setBook] = useState({});
    const { rank } = useParams();
    const navigate = useNavigate()

  useEffect(()=>{

    axios
      .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=O0xna1C3cYGLSFxgFX2IZaZx3SaJIKeg`)
      .then((res) => {
        console.log(res.data.results.books);
        const result = res.data.results.books.find((item) => item.rank == rank)
        console.log(result);
        setBook(result);

      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [])
    
    
  return (
    <>

        <div className='bg-[#EAEAF5]'>
        <NavPar />


        <div className='flex items-center justify-center h-screen'>
            
        <div className='flex-shrink-0 m-6 overflow-hidden bg-[#35297B] rounded-lg max-w-xs shadow-lg'>
          {/* <svg
            className='absolute bottom-0 left-0 mb-8 '
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: ' 0.1' }}
          >
            <rect x='159.52' y='175' width='152' height='152' rx='8' transform='rotate(-45 159.52 175)' fill='white' />
            <rect y='107.48' width='152' height='152' rx='8' transform='rotate(-45 0 107.48)' fill='white' />
          </svg> */}
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: '0.2',
              }}
            ></div>

            <img className='min-w-32' src={book?.book_image} alt='' />
          </div>
          <div className='text-center text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>{book.author}</span>
            <div className='flex flex-col justify-center items-center gap-3 p-3'>

              <span className='block font-semibold text-xl'>{book?.title}</span>

              <span className='block font-semibold text-xl'>
               
                Amazon: <a href={book?.amazon_product_url}
                // className='z-[10]'
                target="_blank" 
                rel="noopener noreferrer">click me</a>
                </span>

                <button className="bg-white rounded-full text-purple-500 text-xs z-10 hover:scale-105 font-bold px-3 py-2 
                    flex items-center"
                    onClick={()=>{navigate('/Books')}}
                    >Back</button>  

              {/* <span className='block font-semibold text-xl'> buy {book?.amazon_product.url}</span> */}
              <div className='flex w-full justify-between'></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default BookDetails;
