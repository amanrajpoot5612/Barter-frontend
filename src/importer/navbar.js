import Logo from '../assets/img/main-logo/barter-logo.jpeg'
const NavItems = [
  // logo item
  {
    key: 'logo',
    // label: Logo,
    icon: Logo,
    style: { fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary-dark)' },
  },

  // Home item
  {
    key: 'home',
    label: 'Home',
    // icon: <HomeOutlined />,
  },

  // About us item
  {
    key: 'about',
    label: 'About Us',
  },

  //what we do item
  {
    key: 'whatwedo',
    label: 'What We Do',
  },

  // founder's message item
  {
    key: 'foundersmessage',
    label: "Founder's Message",
  },

  // barter products item
  {
    key: 'barterproducts',
    label: 'Barter Products',
  },

  // national shows in barter item
  {
    key: 'nationalshows',
    label: 'National Shows',
  },

  // regional shows in barter item
  {
    key: 'regionalshows',
    label: 'Regional Shows',
  },

  // satisfactory client testimonials item
  {
    key: 'clienttestimonials',
    label: 'Client Testimonials',
  },
];
export {NavItems}