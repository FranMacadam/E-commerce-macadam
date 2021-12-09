import React from 'react';

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
  return (
    <div className='productContainer'>
        <p>{props.greeting}</p>
        {data.map(products =>{
            return <a href='a' className="products">{products.id}</a>
        })}
    </div>
  );
}

export default ItemListContainer;
