import React from 'react'
import { ItemsType } from '../types/Items.types';

interface ItemProps {
    items: ItemsType[];
    openModal: any;
    id: number;
}

const FetchData : React.FC<ItemProps> = ({ items, openModal }) => { 
  return (
    <tbody>
      {items.map(item => (
        <tr id={item.id} onClick={(e) => openModal(e)} key={item.id} style={{background:`${item.color}`}}>
            <td className='tableData'>{item.id}</td>
            <td className='tableData'>{item.name}</td>
            <td className='tableData'>{item.year}</td>
        </tr>
      ))}
    </tbody>
    
  )
}

export default FetchData;