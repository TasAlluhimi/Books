import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavPar from '../Componenets/NavPar';
import axios from 'axios';

function BookDetails() {

    const [book, setBook] = useState({});
    const { id } = useParams();

  const api_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=O0xna1C3cYGLSFxgFX2IZaZx3SaJIKeg`;

  useEffect(()=>{

    axios
      .get(api_url)
      .then((res) => {
        console.log(res.data.results.books);
        setBook(res.data.results.books.find((item) => item.rank == id));

      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [])
    
  
    
  return (
    <>

        <div className='bg-[#EAEAF5]'>
        <NavPar />
        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#35297B] rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8 '
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: ' 0.1' }}
          >
            <rect x='159.52' y='175' width='152' height='152' rx='8' transform='rotate(-45 159.52 175)' fill='white' />
            <rect y='107.48' width='152' height='152' rx='8' transform='rotate(-45 0 107.48)' fill='white' />
          </svg>
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
              <div className='flex w-full justify-between'></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default BookDetails;
