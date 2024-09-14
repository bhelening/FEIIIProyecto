const Footer = () => {
  return (
    <footer style={{ height: "60vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <p>Powered by</p>
      <img src="/images/DH.png" className="img-fluid" alt="DH logo" />
    </footer>
  );
};

export default Footer;