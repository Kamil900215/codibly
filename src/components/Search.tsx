import React from 'react'

interface SearchProps {
  searchById: React.ChangeEventHandler<HTMLInputElement>;
}

const Search : React.FC<SearchProps> = ({searchById}) => { 
  return (
    <div className='search'>
        <span>Search by ID number: </span>
        <input className='input' type='number' placeholder='Search by id' 
        onChange={searchById}/>
    </div>
  )
}

export default Search