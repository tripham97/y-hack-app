import React from 'react';
import "../../css/Home.css";

const Home = () => {
    return (
        <>
            <div id="hero">
                <div className='texture'></div>
                <div className='caption'>
                    <h1>You have 5 tokens.</h1>
                    <input type="text" placeholder="Where do you want to go?" />
                    <h2>Alternatively, share your favorite spots with us</h2>
                </div>
            </div>
            {/* <div id="hero">
                <div className='texture'></div>
                <div className='caption'>
                    <h1>You have no tokens.</h1>
                    <input type="text" placeholder="Search" />
                    <h2>Start sharing or verify your own favorite spots</h2>
                </div>
            </div> */}
        </>
    )
}

export default Home;