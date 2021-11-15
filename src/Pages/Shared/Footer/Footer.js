import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-evenly mt-5">

                <div>
                    <h6>ABOUT US</h6>
                    <p>ASAP Wheels is one of the largest website about motorcycle in <br/> Bangladesh. We have started our journey since 25th January 2018. <br/> We have experienced and hard working team and our <br/> prime goal is to provide motorcycle related necessary <br/> information to the visitors in easy way.</p>
                </div>
                <div>
                    <h6>AUTO ENTHUSIASTS</h6>
                    <p>News <br/> Reviews <br/> Forum <br/> Autogasm <br/> Gallery</p>
                </div>
                <div>
                    <h6>RESEARCH</h6>
                    <p>New <br/> CarsNew <br/> BikesUsed <br/> CarsSell <br/> CarCompare <br/> CarsCompare Bikes</p>
                </div>
            </div>
            <p className="d-flex justify-content-center"><small>Copyright © 2018-2021 All Rights Reserved.</small></p>

        </div>
    );
};

export default Footer;