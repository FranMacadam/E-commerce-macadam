import React from 'react';
import { Link } from 'react-router-dom'

const CategoryWidget = ({ categories }) => {
    return <ul className="navLinks">
        {categories.map(category => {
            return (
                <li>
                    <Link to={`category/${category}`} >{category}</Link>
                </li>
            )
        })}
    </ul>;
};

export default CategoryWidget;

