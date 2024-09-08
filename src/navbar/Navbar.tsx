import './Navbar.scss';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

const collapse = (isClosing: boolean) => {
  const sidebar = document.getElementById('sidebar-mobile');
  const mobileMenuIcon = document.getElementById('menu-icon-mobile');
  const navbar = document.getElementById('navbar');

  if (!sidebar || !mobileMenuIcon || !navbar) return;

  if (isClosing) {
    navbar.classList.add('above-all');

    mobileMenuIcon.classList.remove('hide');

    sidebar.style.width = '0';
  } else {
    navbar.classList.remove('above-all');

    mobileMenuIcon.classList.add('hide');

    sidebar.style.width = `${document.body.clientWidth}px`;
  }
}

const links = [
      {uri: '', title: ''}
  // { uri: '', title: 'Início' },
  // { uri: 'events', title: 'Eventos' },
  // { uri: 'contact', title: 'Contato' },
  // { uri: 'about', title: 'Quem somos?' },
];

const onScroll = () => {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)
    navbar.classList.add('scrolled');
  else
    navbar.classList.remove('scrolled');
}

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('wheel', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onScroll);
    };
  }, []);

  return (
    <div id='navbars'>
      <div id='navbar' className='above-all'>
        <ul>
          {
            !isMobile && links.map((link) => 
              <li><a key={`li-${link.uri}`} href={`#${link.uri}`} title={link.title}>{ link.title }</a></li>
            )
          }
          {
            isMobile && 
              <li id='menu-icon-mobile'><a onClick={() => collapse(false)}><i className="fas fa-bars"></i></a></li>
          }
        </ul>
      </div>
      <div id="sidebar-mobile" className="sidebar">
        <a href="#" className="btn-close" onClick={() => collapse(true)}>
          <i className="fas fa-times"></i>
        </a>
        {
          links.map((link) => <a key={`li-${link.uri}-mobile`} href={`#${link.uri}`} title={link.title}>{ link.title }</a>)
        }
      </div>
    </div>
  );
}

export default Navbar;