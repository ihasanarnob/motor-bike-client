import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const PostedReviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fast-taiga-86694.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
        <div className="container">
            <h3 className="d-flex justify-content-center">What Our Customers Say</h3>
            <div className=" row row-cols-2 row-cols-md-4 g-4 ">
            {
                reviews.map(review => <Card key={review._id} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title> Reviewer : {review.name} </Card.Title>
                  <Card.Text>
                    {review.description}
                  </Card.Text>
                </Card.Body>
              </Card>  )
            }
            </div>
        </div>
    );
};

export default PostedReviews;