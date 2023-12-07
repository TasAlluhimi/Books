import React from 'react'
import axios from 'axios'
import NavPar from '../Componenets/NavPar'
import { useNavigate, Link } from 'react-router-dom'
import Footer from '../Componenets/Footer'

function Books() {

    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')

    const [favList,setFavList] = React.useState([]);
    const [readList,setReadList] = React.useState([]);
    // const [prevList,setPrevList] = React.useState([]);

    const userId = localStorage.getItem('userId');
    

    const filtered = data.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))

    React.useEffect(()=>{
        
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=O0xna1C3cYGLSFxgFX2IZaZx3SaJIKeg')
    .then((response) => {

      console.log(response.data.results.books);
      setData(response.data.results.books);
      
    })
    .catch((error) => {
      console.error('Error', error);
    });

    }, [])

    const faiv =(rank)=>{
        // navigate('/Faivorate')
        // localStorage.setItem('f_rank', rank)

        const book = data.find((item) => item.rank === rank);
        if (book) {
          setFavList((prevList) => [...prevList, book]);
        // setFavouriteList([...prevList, book]);


        axios.put(`https://655239d55c69a7790329ba98.mockapi.io/BooksUsers/${userId}`, {
          faiv_list: [...favList,book],

          })
          .then(function (response) {
            alert("Added to favourite list successfully")
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }    
    
    const read =(rank)=>{
      // localStorage.setItem('r_rank', rank)
        // navigate('/Readed')

        const book = data.find((item) => item.rank === rank);
        if (book) {
            setReadList((prevList) => [...prevList, book]);

        axios.put(`https://655239d55c69a7790329ba98.mockapi.io/BooksUsers/${userId}`, {
            read_list: [...readList,book],
          })
          .then(function (response) {
            alert("Added to read list successfully")
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

  return (
    <>
    <div className='bg-[#EAEAF5]'>

<NavPar/>

<div className='flex flex-col items-center justify-center gap-9'>
<div className='text-center text-3xl mt-16 font-bold'>Books List</div>
<input 
type="search" 
name='search'
placeholder='search'
value={search}
onChange={(event) => setSearch(event.target.value)}
className=' rounded-md p-2'
/>
</div>

        <div className="flex flex-wrap items-center justify-center p-20">
        
      {filtered.length === 0 ? (
        <p className='text-2xl'>No results found :c</p>
      ) : (
        
        filtered.map((item, index)=>(
            
            <div 
            key={index}
            className="flex-shrink-0 m-6 relative overflow-hidden bg-[#35297B] rounded-lg max-w-xs shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8 " viewBox="0 0 375 283" fill="none"
            style={{transform: 'scale(1.5)', opacity:' 0.1'}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}>
            </div>

            <Link to={`/BookDetails/${item.rank}`}><img 
            className="min-w-32" 
            src={item.book_image} alt=""/></Link>

        </div>
        <div className="text-center text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{item.author}</span>
            <div className="flex flex-col justify-center items-center
            gap-3 p-3">
                <span className="block font-semibold text-xl">{item.title}</span>
                <div className='flex w-full justify-between'>
                    <button className="bg-white rounded-full 
                    text-purple-500 text-xs font-bold px-3 py-2 flex items-center z-10 hover:scale-105"
                    onClick={() => {faiv(item.rank)}}
                    >♡</button>
    
                    <button className="bg-white rounded-full text-purple-500 text-xs z-10 hover:scale-105 font-bold px-3 py-2 
                    flex items-center"
                    onClick={() => {read(item.rank);}}
                    >Mark Read</button>                   
                  
                </div>
                
            </div>
        </div>
        </div>
            
        )
    )
      )}      


</div>
</div>
<Footer/>
    </>
  )
}

export default Books