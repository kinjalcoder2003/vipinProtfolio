import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button, Menu } from 'antd';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'experience', label: 'Experience' },
    { key: 'skills', label: 'Skills' },
    { key: 'education', label: 'Education' },
    { key: 'achievements', label: 'Achievements' },
    { key: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(id);
      setVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.key);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setCurrentSection(item.key);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-wrap">
            <div className="logo-circle">VR</div>
            <div className="logo-text-small">Vipin Rao</div>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="menu-desktop">
            {menuItems.map((item) => (
              <Button
                key={item.key}
                type="link"
                onClick={() => scrollToSection(item.key)}
                className={currentSection === item.key ? 'active-nav-item' : ''}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="menu-mobile">
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="mobile-menu-icon"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </nav>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={200}
        className="custom-drawer"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[currentSection]}
          onClick={(e) => scrollToSection(e.key)}
          items={menuItems}
          className="custom-menu"
        />
      </Drawer>
    </>
  );
};

export default Navbar;
