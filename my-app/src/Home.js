import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
        alt=""
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup The Lean StartupThe Lean StartupThe Lean Startup The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDash_TrafficDrivers_Desktop_DashboardCard_Single_379x304_1x._SY304_CB418931269_.jpg"
            price={11.99}
            rating={5}
          />
          <Product
            id="2"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
            price={11.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            price={11.99}
            rating={5}
          />
          <Product
            id="4"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            price={11.99}
            rating={3}
          />
          <Product
            id="5"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={11.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="realme 6 pro 128GB 16Ram"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDash_TrafficDrivers_Desktop_DashboardCard_Single_379x304_1x._SY304_CB418931269_.jpg"
            price={11.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
