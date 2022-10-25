import buildImg1 from '../../public/assets/boxImages/img-1.jpg';
import buildImg2 from '../../public/assets/boxImages/img-2.jpg';
import buildImg3 from '../../public/assets/boxImages/img-3.jpg';
import buildImg4 from '../../public/assets/boxImages/img-4.jpg';
import buildImg5 from '../../public/assets/boxImages/img-5.jpg';

const infoHome = [
    {
      title: 'Development company',
      description: 'Forward-thinking real estate developer,  owner and investor with a reputation',
      links: [
        { name: 'Services', path: '/services', },
        { name: 'About the company', path: '/about', },
      ],
      images: [
        {name: 'img1', path: buildImg1},
        {name: 'img2', path: buildImg2},
        {name: 'img3', path: buildImg3},
        {name: 'img4', path: buildImg4},
        {name: 'img5', path: buildImg5},
      ],
    }
  ];
  
  export default infoHome;