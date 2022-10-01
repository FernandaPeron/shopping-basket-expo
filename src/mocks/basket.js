import header from '../assets/images/header.png';
import farmLogo from '../assets/images/logo.png';
import tomato from '../assets/images/fruits/tomato.png';
import broccoli from '../assets/images/fruits/broccoli.png';
import potato from '../assets/images/fruits/potato.png';
import cucumber from '../assets/images/fruits/cucumber.png';
import pumpkin from '../assets/images/fruits/pumpkin.png';

export default {
  headerImage: header,
  name: 'Vegetables Basket',
  farmName: 'Jenny Jack Farm',
  farmLogo,
  description: 'A basket of carefully selected products from the farm straight to your kitchen',
  price: '$10.00',
  items: [
    {
      name: 'Tomato',
      image: tomato,
    },
    {
      name: 'Broccoli',
      image: broccoli,
    },
    {
      name: 'Potato',
      image: potato,
    },
    {
      name: 'Cucumber',
      image: cucumber,
    },
    {
      name: 'Pumpkin',
      image: pumpkin,
    },
  ]
};
