import Image from './Image.js'
import Descriptionblock from './Descriptionblock.js'
import '../style/product.css'
import ben from '../imgs/ben.png'
import React from 'react'

const productitems = () => {
  return (
    <div>
     <div className="imgx">
        <img src={img} alt=''/>
     </div>
     <div className="des">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Button></Button>
    </div>
    </div>
  );
};

const data =[
    {
        img :ben ,
        heading:'mens wear' 
    }
]


function Producyblock () {
  return (
    <div className='prod'>
        {data.map(e) => (<productitems img={e.img})}
    </div>
  );
};

export default Producyblock