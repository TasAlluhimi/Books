import axios from 'axios'
import React from 'react'

function Faivorate() {

    // const [postedBook, setPostedBook] = React.useState([]);

    // React.useEffect(() => {
    //   // Retrieve the posted book information from local storage
    //   const storedPostedBook = JSON.parse(localStorage.getItem('f_rank'));
    //   if (storedPostedBook) {
    //     setPostedBook(storedPostedBook);
    //   }
    // }, []);
  

    const [data, setData] = React.useState([]);
    // const [postedBook, setPostedBook] = React.useState([]);
  
    // const f_rank = localStorage.getItem('f_rank');
    // const userId = localStorage.getItem('userId');
  
    // React.useEffect(() => {
    //   axios
    //     .get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=O0xna1C3cYGLSFxgFX2IZaZx3SaJIKeg')
    //     .then((response) => {
    //       console.log(response.data.results.books);
    //       setData(response.data.results.books);
    //     })
    //     .catch((error) => {
    //       console.error('Error', error);
    //     });
    // }, []);
  
    // const filteredFaiv = data.find((item) => item.rank === f_rank);
    // console.log('filteredFaiv ' + filteredFaiv);
  
    // React.useEffect(() => {
    //   if (filteredFaiv) {
    //     axios
    //       .put('https://657174c0d61ba6fcc012974a.mockapi.io/faiv-readed', {
    //         faiv: true,
    //         book_id: filteredFaiv.rank,
    //         user_id: userId,
    //         title: filteredFaiv.title,
    //         book_image: filteredFaiv.book_image,
    //         author: filteredFaiv.author,
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //         setPostedBook(res.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error posting book', error);
    //       });
    //   }
    // },);
    

  return (
    <>
        {/* {postedBook ? (
        <div>
          {}
          <p>Title: {postedBook.title}</p>
          <p>Author: {postedBook.author}</p>
          {}
        </div>
      ) : (
        'Loading...'
      )} */}
    </>
  )
}

export default Faivorate