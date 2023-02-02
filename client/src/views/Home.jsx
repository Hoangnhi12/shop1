import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-banner">
      {/* Layer */}
      <div className="bg-gradient-to-r from-black/100 to-black/0">
        {/* Container */}
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Layout */}
          <div className="flex justify-center items-center lg:justify-start h-banner">
            {/* Content Box */}
            <div className="text-white text-center lg:text-left">
              <div className="mb-6">
                <h1 className="font-bold text-4xl lg:text-6xl mb-4">
                  WELCOM TO SHOP
                  
                </h1>
                <p className="text-base lg:text-xl">
                  BUY 1 GET 1 :)
                </p>
              </div>

              {/* Shop button */}
              <Link to="/products" className="btn btn-primary btn-lg">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
