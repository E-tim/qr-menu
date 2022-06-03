import React,{useState, useEffect} from 'react'
import {db} from "../firebase";
import {onSnapshot, query, collection, Timestamp, orderBy, limit, addDoc} from "firebase/firestore"
import img1 from "../image/download.jpg"
import NonAlcoholicResult from './NonAlcoholicResult';

const NonAlcholic = () => {

  const [nonAlcohol, setNonAlcohol] = useState([])

  useEffect(()=>{
    let q = query(collection(db, 'nonAlcohol'), limit(50), orderBy('creatAt'));
    onSnapshot(q, (onSnapNonalcohol)=> {
      setNonAlcohol(onSnapNonalcohol.docs.map((doc)=> ({
        ...doc.data(), id: doc.id
      })))
    })
  },[])

  //  Adding new item

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addItems = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'nonAlcohol'), {
        name: name,
        price: price,
        creatAt: Timestamp.now()
      })
    } catch (error) {
      alert(error)
    }
    setName('');
    setPrice('');
  }



  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{width: '100%', margin: '10px'}} src={img1} alt='img'/>
      </div>
      <div className='myForm'>
        <form onSubmit={addItems}>
          <input type='type' placeholder='Name...' value={name} onChange={(e)=> {setName(e.target.value)}}/>
          <input type='type' placeholder='Price...' value={price} onChange={(e)=> {setPrice(e.target.value)}}/>
          <button type='submit'>ADD</button>
        </form>
      </div>

        {
          nonAlcohol.map(({id, price, name}) => {
            return <NonAlcoholicResult key={id} id={id} price={price} name={name}/>
          })
        }
    </div>
  )
}

export default NonAlcholic