import React, { FC } from 'react';

import { Carousel } from './component';

const images = [
  {
    src:
      'https://i2.wp.com/writesomething.org.au/wp-content/uploads/2017/01/no.jpg?fit=1024%2C768&ssl=1',
    alt: 'yoda',
  },
  {
    src: 'https://www.w3schools.com/w3css/img_lights.jpg',
    alt: 'northern lights',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    alt: 'asdfa',
  },
];

export const BasicCarousel: FC = () => (
  <>
    <Carousel draggable>
      {images.map((image, i) => (
        <img
          key={i + image.alt}
          draggable={false}
          alt={image.alt}
          src={image.src}
          style={{ width: '100%', height: 866 }}
        />
      ))}
    </Carousel>
  </>
);
