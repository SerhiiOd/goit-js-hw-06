const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgSet = document.querySelector('.gallery');
console.log(imgSet);

imgSet.style.display = 'flex';
imgSet.style.justifyContent = 'center';
imgSet.style.gap = '40px';

const imgItem = images
  .map(function ({ url, alt }) {
    let img;
    return (img = `<li style = 'list-style: none': none'><img src=${url} alt=${alt} style = 'width: 150px; height: 100px'></li>`);
  })
  .join('');

imgSet.insertAdjacentHTML('beforeend', imgItem);
