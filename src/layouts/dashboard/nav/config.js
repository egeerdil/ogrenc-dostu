// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  /* {
    title: 'dashboard',
    path: '/dashboard/app',
  icon: icon('ic_analytics'),
    },
    */
  {
    title: 'Ev Arkadaşı',
    path: '/dashboard/evarki',
    icon: icon('ic_user'),
  },
  {
    title: 'Kullanıcı',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Evler',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Kendi',
    path: '/dashboard/Kendi',
    icon: icon('ic_user'),
  },
  {
    title: '2. el eşya',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Çıkış',
    path: '/login',
    icon: icon('ic_lock'),
  },
  /*
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  */
];

export default navConfig;
