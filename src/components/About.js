import React from 'react'

const About = () => {
    return (
        <>
            <div id="hero">
                <div className='texture'>
                    Your Profile
                </div>
                <div className='caption'>
                    <h1>You have 5 tokens.</h1>
                    <input type="text" placeholder="Where do you want to go?" />
                    <h2>Alternatively, share your favorite spots with us</h2>
                </div>
            </div>
        </>
    )
}

export default About;