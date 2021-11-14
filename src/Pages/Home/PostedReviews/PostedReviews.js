import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const PostedReviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return (
        <div>
            <h3>What Our Customers Say</h3>
            <div className="container row row-cols-2 row-cols-md-4 g-4 ">
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