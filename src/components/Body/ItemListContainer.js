import React from 'react';
import ItemCount from './ItemCount'

const data = [
  {
    id: 1,
    title: "example title1",
    content: "example content",
    image: "https://i.imgur.com/example.jpg"
  },
  {
    id: 2,
    title: "example title2",
    content: "example content",
    image: "https://i.imgur.com/example.jpg"
  },
  {
    id: 3,
    title: "example title3",
    content: "example content",
    image: "https://i.imgur.com/example.jpg"
  },
]


const ItemListContainer = (props) => {


  const addToCart = () => {
    console.log("I added the product to the cart!")
  }
  


  return (
    <div className='productContainer'>
      <p>{props.greeting}</p>
      {data.map(products => {
        return <ItemCount stock={10} initial={1} addToCart={addToCart} />
      })}
    </div>
  );

}

export default ItemListContainer;
