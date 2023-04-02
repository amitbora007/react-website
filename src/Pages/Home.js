const Home = () => {
  return (
    <div className="content first-content">
      <div className="container-fluid">
        <div className="col-md-3">
          <div className="author-image">
            <img src="img/author_image.png" alt="Author Image" />
          </div>
        </div>
        <div className="col-md-9">
          <h2>Mingalar par</h2>
          <p>
            Please take a look at{" "}
            <strong>
              <a rel="nofollow" href="https://www.toocss.com">
                Too CSS
              </a>
            </strong>{" "}
            to see free template collections for you. Lorem ipsum{" "}
            <em>dolor sit amet</em>, consectetur adipiscing elit.{" "}
            <em>Sed vehicula blandit augue,</em> eu maximus odio tempus vitae.
          </p>
          <div className="main-btn">
            <a href="#2">Read More</a>
          </div>
          <div className="fb-btn">
            <a rel="nofollow" href="https://fb.com/templatemo">
              Our FB Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;