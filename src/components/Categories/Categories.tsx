import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Star Wars', 'Famous people', 'Saying', 'Humour', 'Motivational'];

  return (
    <div>
      <h3>Quotes Central</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/quotes/${category.replace(/\s+/g, '_').toLowerCase()}`}
              onClick={() => onSelectCategory(category)}
              style={{fontWeight: selectedCategory === category ? 'bold' : 'normal'}}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
