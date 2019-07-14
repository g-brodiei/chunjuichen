import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({app}) => {
  app.AOS = new AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
  });
}