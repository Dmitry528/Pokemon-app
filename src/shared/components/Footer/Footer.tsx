import footerStyles from 'shared/components/Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
