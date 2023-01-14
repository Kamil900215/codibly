import React, {useState, useEffect} from 'react'
import { ItemsType } from '../types/Items.types';



const Modal : React.FC<ItemsType> = ({isOpen, onClose, selected}) => {
    if(!isOpen) return null;
  return (
    <div className='modalOverlay'>
    <div className='modalContainer' style={{background: `${selected.color}`}}>
       <div className='modalItem'>Id: {selected.id}</div>
       <div className='modalItem'>Name: {selected.name}</div>
       <div className='modalItem'>Year: {selected.year}</div>
       <div className='modalItem'>Color: {selected.color}</div>
       <div className='modalItem' >Pantone value: {selected.pantone_value}</div>
        <button className='closeBtn' onClick={onClose}>Close</button>
    </div>
    </div>
  )
}

export default Modal