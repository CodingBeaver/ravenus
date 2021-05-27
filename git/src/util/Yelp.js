const apiKey="EnGLDcmXqLzOqRW1ygq0c3OJqDFURcrTxDF5nNZ4BXlfKHQj86ilUGxHBkLc5W7h2gYwPRKAhU7Vy-ViSx5PJENkZC6JPKISz8OnqtJhvqh-E7f672wGBEk4whDZX3Yx";

const Yelp={
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }));
          }
        });
      }
    };
  

export default Yelp;
