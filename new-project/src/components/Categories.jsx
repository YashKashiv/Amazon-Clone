import React from 'react'

function Categories() {
  const categories = [
    {
      title: 'Min. 40% Off',
      description: 'Toys for your little ones',
      image: 'https://m.media-amazon.com/images/I/51TnzgYWTaL._AC_UL320_.jpg',
    },
    {
      title: 'Small Businesses',
      description: 'Explore more from small businesses',
      image: 'https://m.media-amazon.com/images/I/81NoOY2gSdL._AC_UL320_.jpg',
    },
    {
      title: 'Revamp Your Home',
      description: 'Home decor and essentials',
      image: 'https://m.media-amazon.com/images/I/91rWEqqr9rS._AC_UL320_.jpg',
    },
    {
      title: 'Starting ₹149 | Headphones',
      description: 'Boat Headphones',
      image: 'https://m.media-amazon.com/images/I/51FNnHjzhQL._AC_UL320_.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4 cursor-pointer">
      {categories.map((cat, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <img src={cat.image} alt={cat.title} className="rounded-lg" />
          <h3 className="mt-2 font-bold">{cat.title}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories
