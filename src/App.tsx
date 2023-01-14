import { useState, useEffect } from 'react';
import './App.css';
import Products from './components/Products';
import Loading from './components/Loading';
import Search from './components/Search';
import Modal from './components/Modal';
import { Pagin } from './components/Pagin';

function App() : JSX.Element {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [notFound, setNotFound] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false);  
  const [selected, setSelected] = useState('');

  async function fetchMetaData() {
    const response = await fetch(`https://reqres.in/api/product?per_page=5&page=${currentPage}`)
    let { data, total_pages } = await response.json();
    setLoading(false);
    if(response.ok){
      setItems(data);
      setTotalPages(total_pages)
      }
    if(response.status >= 500 && response.status <= 599){
      setItems([]);
      setServerError(true);
    }
    if(response.status === 404){
      setItems([]);
      setNotFound(true);
    }
    }
  useEffect(() => {
    fetchMetaData()
  }, [currentPage])
  const prevPage = () => {
    if(currentPage === 1){
      return;
    }  
    setCurrentPage(previousPage => previousPage - 1)
  };
  const nextPage = () =>{ 
    if(currentPage === totalPages){
      return;
    }
    setCurrentPage(previousPage => previousPage + 1)
  };
  const searchById = (e: React.ChangeEvent<HTMLInputElement>) => {
    async function fetchElementsById(e: React.ChangeEvent<HTMLInputElement>) {
      const response = await fetch(`https://reqres.in/api/product?id=${e.target.value}`);
      let { data } = await response.json();
      if(response.ok){
      setItems([data]);
      }
      if(response.status === 404){
        setItems([]);
        setNotFound(true)
      }
      if(response.status >= 500 && response.status <= 599){
        setItems([]);
        setServerError(true);
      }
    } 
    if(e.target.value === ''){
      fetchMetaData()
    } else {
      fetchElementsById(e)
    }
  }

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {   
    setIsOpen(true);
    fetch(`https://reqres.in/api/products?id=${e.currentTarget.id}`).then(res => res.json()).then(data => setSelected(data.data))
  }
  return (
    <div className="App">
      <Search searchById={searchById}/>
      {items.length > 0 ? (
        <div>
        <table className='table'>
          <thead>
            <tr className='tableRows'>
             <th className='tableHead'>ID</th>
             <th className='tableHead'>Name</th>
             <th className='tableHead'>Year</th>
            </tr>
          </thead>
            <Products openModal={openModal} items={items}/>
        </table>
        <Pagin prevPage={prevPage} nextPage={nextPage}/>
        </div>
        ) : (<Loading notFound={notFound} serverError={serverError} loading={loading} />)}
        <Modal isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        selected={selected}/>
    </div>
  )
}

export default App



