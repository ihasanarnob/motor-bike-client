import React from 'react';
import './Accessories.css';

import shop1 from '../../../Images/shop-1.jpg';
import shop2 from '../../../Images/shop-2.jpg';
import shop3 from '../../../Images/shop-3.jpg';
import shop5 from '../../../Images/shop-5.jfif';

const Accessories = () => {
    return (
        <div className="container my-3">
            <h2 className="mt-5 mb-3">Shop Accessories Item</h2>
            {/* ................ */}
            <div className="profile-area">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-4 g-4  ">
                        <div className="col">
                            <div className="card">
                                <div className="img1"><img src={shop2} className="card-img-top" alt="..." /></div>

                                <div className="main-text">
                                    <h3>Goggles & Gloves</h3>
                                    <h5> Price:$76</h5>
                                </div>


                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="img1"><img src={shop3} className="card-img-top" alt="..." /></div>

                                <div className="main-text">
                                    <h3>Canvas <br /> Shoes</h3>
                                    <h5>Price:$80</h5>
                                </div>


                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="img1"><img src={shop5} className="card-img-top" alt="..." /></div>

                                <div className="main-text">
                                    <h3>Mavericks Helmet</h3>
                                    <h5>Price:$90</h5>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="img1"><img src={shop1} className="card-img-top" alt="..." /></div>

                                <div className="main-text">
                                    <h3>Driving <br />  Jacket</h3>
                                    <h5>Price:$90</h5>
                                </div>
                            </div>
                        </div>
                        {/* ................. */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;