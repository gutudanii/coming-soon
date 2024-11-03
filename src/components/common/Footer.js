const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="container px-6">
        <p>&copy; {currentYear} AddisFinancial. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
