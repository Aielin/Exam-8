import React from 'react';

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
            <button
              style={{ fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
