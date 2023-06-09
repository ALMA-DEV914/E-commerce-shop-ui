import React from "react";
import trending from "../../data/Trending";

function TrendingProducts() {
  return (
    <>
   
    <div className="container mt-4">
    <h2>Trending Best Sellers on Amazon</h2>
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              <>
                {trending.map((trending) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={trending._id}
                  >
                    <div className="border-trending">
                      <a href={trending.link}>
                        <div className="trendBack">
                          <img src={trending.image} alt={trending.name} />
                        </div>
                      </a>

                      <div className="shoptext">
                        <p>
                          <a href="https://amzn.to/3qDHvY1">
                            {trending.name}
                          </a>
                        </p>
                        <p className="trendDes">{trending.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TrendingProducts;
