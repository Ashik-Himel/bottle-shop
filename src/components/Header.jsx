const Header = () => {
  
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center gap-8">
        <a href="#" className="text-3xl font-semibold">Bottle Shop</a>
        <ul className="flex items-center gap-6">
          <li><a href="#">Home</a></li>
          <li><a href="#"><i className="fa-solid fa-cart-shopping text-2xl"></i></a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;