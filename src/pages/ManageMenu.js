import React, { useState, useEffect } from 'react';
import { API, day } from '../services/';
import { useParams } from 'react-router-dom';

const ManageMenuPage = () => {
  const dailyMenu = ['Breakfast', `${day} Evening`, `${day} Lunch`];
  const [menu, setMenu] = useState([]);
  //get method
  useEffect(() => {
    API.GET(`/menu`)
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);
  const params = useParams();
  return (
    <div>
      {menu &&
        menu
          .filter((item) => dailyMenu.includes(item.description))
          .map((item) => {
            const menuToShow = [
              {
                juices: [
                  { allergens: ['Sugar'], name: 'Orange Juice' },
                  { allergens: ['Sugar'], name: 'Apple Juice' },
                  {
                    allergens: ['Sugar', 'Sulphur Dioxide'],
                    name: 'Cranberry Juice',
                  },
                  {
                    allergens: ['Sugar', 'Sulphur Dioxide'],
                    name: 'Prune Juice',
                  },
                ],
                fruit: [
                  { name: 'Banana' },
                  { name: 'Apple' },
                  { allergens: ['Sulphur Dioxide'], name: 'Prunes' },
                ],
                cereals: [
                  { allergens: ['Sugar', 'Gluten'], name: 'Cornflakes' },
                  { allergens: ['Sugar', 'Gluten', 'Milk'], name: 'Special K' },
                  { allergens: ['Gluten', 'Sugar'], name: 'Rice Krispies' },
                  { name: 'Mixed Seeds' },
                  { allergens: ['Gluten'], name: 'Weetabix' },
                  { allergens: ['Sugar'], name: 'Cornflakes Gluten Free' },
                  { allergens: ['Gluten', 'Milk'], name: 'Porridge' },
                  { name: 'Porridge Gluten Free' },
                  { name: 'Porridge Dairy Free', allergens: ['Gluten'] },
                  {
                    allergens: ['Sugar', 'Milk', 'Sulphur Dioxide', 'Gluten'],
                    name: 'Muesli',
                  },
                ],
                hotbreakfast: [
                  { allergens: ['Sulphur Dioxide', 'Fat'], name: 'Bacon' },
                  {
                    allergens: ['Sulphur Dioxide', 'Gluten', 'Fat'],
                    name: 'Sausage',
                  },
                  { name: 'Tomato' },
                  { name: 'Mushroom', allergens: ['Fat'] },
                  { allergens: ['Milk', 'Egg'], name: 'Scramble Egg' },
                  { allergens: ['Fat', 'Egg'], name: 'Fried Egg' },
                  { allergens: ['Egg'], name: 'Poached Egg' },
                  { allergens: ['Egg'], name: 'Hard Boiled Egg' },
                ],
                breads: [
                  {
                    allergens: [
                      'Egg',
                      'Milk',
                      'Gluten',
                      'Soya',
                      'Tree Nuts',
                      'Sugar',
                    ],
                    name: 'Croissant',
                  },
                  {
                    allergens: ['Egg', 'Milk', 'Gluten', 'Tree Nuts', 'Soya'],
                    name: 'Brown Scone',
                  },
                  {
                    allergens: [
                      'Egg',
                      'Milk',
                      'Gluten',
                      'Tree Nuts',
                      'Soya',
                      'Sugar',
                    ],
                    name: 'Fruit Scone',
                  },
                  { allergens: ['Gluten', 'Soya'], name: 'White Toast' },
                  { allergens: ['Gluten', 'Soya'], name: 'Brown Toast' },
                  {
                    allergens: ['Soya', 'Gluten'],
                    name: 'Wholemeal Brown Bread',
                  },
                  { name: 'Gluten Free Bread' },
                ],
                spreads: [
                  { name: 'Marmalade', allergens: ['Sugar'] },
                  { name: 'Jam', allergens: ['Sugar'] },
                  { name: 'Honey', allergens: ['Sugar'] },
                  { name: 'Butter' },
                  { name: 'Flora' },
                  { name: 'Low Low' },
                ],
              },
            ];
            return (
              <p>
                Menu: {item.description}
                Items:{' '}
                {menuToShow.map((toShow) => (
                  <p>{JSON.stringify(toShow)}</p>
                ))}
              </p>
            );
          })}
    </div>
  );
};

export default ManageMenuPage;
