// This is for easily exporting all img assets
import logo from './logo.jpg';
import banking from './banking.jpg';
import cardpaying from './cardpaying.jpg';
import gifts from './gifts.jpg';
import sale from './sale.jpg';
import paymentCards from './payment.png';

const imgs = [banking, cardpaying, gifts, sale];

const iconHover =
  'hover:text-skin-prime_yellow hover:scale-150 duration-300 cursor-pointer';
export { logo, imgs, paymentCards, iconHover };
