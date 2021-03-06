import React, { useState } from 'react'
import {FaEdit, FaTimes} from "react-icons/fa"
import {db} from "../firebase"
import {deleteDoc, updateDoc, doc} from "firebase/firestore"

const SpiritResult = ({id, name, price}) => {

    //  delete items 
    const deleteItem = async () => {
        await deleteDoc(doc(db, 'wine', id))
    }

    //  update the items
    const [newName, setNewName] = useState(name)
    const [newPrice, setnewPrice] = useState(price)
    const updateitems = async (e)=> {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'wine', id), {name: newName, price: newPrice});
        } catch (error) {
            alert(error)
        }
    }
    //  open and close edit 
    const [open, setOpen] = useState(false);
    const onClickFaedit = () => {
        setOpen(setOpe => {
            return !setOpe
        })
    }

    //  open and close font awesome
    const [show, setShow] = useState(false);
    const showFontAwesomes = () => {
        setShow(setSho=> {
                return !setSho
        })
    }
  return (
    <div>
        <div onDoubleClick={showFontAwesomes} className='resultFromFirebase'>
            <p>{name}</p>
            <span>{price}</span>
            <div className={ show === true ? 'fontAwesome' : 'hideFontAwesome' }>
                <FaEdit onDoubleClick={onClickFaedit} style={{color: 'white', fontSize: '20px'}}/>
                <FaTimes onClick={()=>deleteItem(id) } style={{color: 'red', fontSize: '20px'}}/>
            </div>
        </div>
        <div className={ open === true ? 'updateformOpen' : 'updateform' }>
            <FaTimes onClick={onClickFaedit} style={{position: 'absolute', top: '10px', right: '10px', color: 'red', fontSize: '25px'}}/>
            <form onSubmit={updateitems}>
                <input type='text' onChange={(e)=> {setNewName(e.target.value)}} value={newName} />
                <input type='text' onChange={(e)=> {setnewPrice(e.target.value)}} value={newPrice}/>
                <button onClick={onClickFaedit} type='submit'>EDIT</button>
            </form>
        </div>
    </div>
  )
}

export default SpiritResult