import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>👋 Food</li>
                    <li>🚀 Items</li>
                    <li>🗻 Log-in</li>
                    <li>&#128512; Search</li>
                    <li>👯 Cart</li>
                </ul>
            </div>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body-container">
            <div className="search">
                My Cloud Kitchen 😊
            </div>
            <div className="card">
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/c6f2885d-d74e-4de1-9273-dcaf75d6c1a3_690934.jpg" food_items = "Card Cart" rating = "🌏 4.3" para = "Hey how are you"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" food_items = "Swiggy" rating = "🥰 4.3" para = "Bevarages"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" food_items = "Zomato" rating = "😃 4.2" para = "Apple food delivert" />
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" food_items = "Card" rating = "🥰 4.0" para = "oh my god"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qsxwmsd6jysozzfmxexz" food_items = "FoodApp" rating = "🌏 5.0" para = "bulky food"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeednzto1jusnnhswke0" food_items = "Cafteria" rating = "😃 3.1" para = "Need to eat"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/d32dda02-869b-46d5-b16c-47c4c14314e2_643825.JPG" food_items = "cool coffee" rating = "😃 3.3" para = "Hey how are you"/>
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/e5e23da8-f5d8-4782-bbe2-a8b28f64cad0_681605.JPG" food_items = "Bevarage" rating = "🥰 4.3" para = "Hey how are you" />
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" food_items = "Bevarage" rating = "😃 4.3" para = "Hey how are you" />
                <Reusablecard img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" food_items = "Bevarage" rating = "🌏 4.3" para = "Hey how are you" />
            </div>
        </div>
    );
};
const Reusablecard = (props) => {
    return (
        <div className="card-container">
            <img src={props.img} alt="" />
            <h3>{props.food_items}</h3>
            <h3>{props.rating}</h3>
            <p>{props.para}</p>
        </div>
    );
};
const Footer = () => {
    return (
        <div className="foot-container">
            <div className="para">
                <p>For better experience,download the Swiggy app now</p>
            </div>
            <div className="image">
                <img className='image1' width={130} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                <img  className='image2'width={120} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)