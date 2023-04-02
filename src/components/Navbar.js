const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="img/logo.png" alt="" />
      </div>
      <div className="mini-logo">
        <img src="img/mini_logo.png" alt="" />
      </div>
      <ul>
        <li>
          <a href="#1">
            <i className="fa fa-home"></i> <em>Home</em>
          </a>
        </li>
        <li>
          <a href="#2">
            <i className="fa fa-user"></i> <em>About</em>
          </a>
        </li>
        <li>
          <a href="#3">
            <i className="fa fa-pencil"></i> <em>Entries</em>
          </a>
        </li>
        <li>
          <a href="#4">
            <i className="fa fa-image"></i> <em>Work</em>
          </a>
        </li>
        <li>
          <a href="#5">
            <i className="fa fa-envelope"></i> <em>Contact</em>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;