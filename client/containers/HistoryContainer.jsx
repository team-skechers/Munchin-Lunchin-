import { gql } from 'apollo-boost'
import { graphql, compose } from 'react-apollo'
// import RestaurantComponent from '../components/RestaurantComponent'
import React from 'react';
import { cookieParser } from './../services/authenticate';
import StyledRestaurantCard from '../components/StyledRestaurantCard';


//Graphql query for restaurants our user has liked previously.
const myCookies = cookieParser(document.cookie);
const myUserId = myCookies.userId;
console.log('My cookies', myCookies);
console.log('My user ID:', myUserId);
const getLikesQuery = gql`
{
  user(_id: ${myUserId}) {
    username
    restaurants {
      name
      displayAddress
      price
      rating
      reviewCount
      imageURL
      _id
      latitude
      longitude
    }
  }
}
`;

const deleteLikeMutation = gql`
  mutation ($user_id: Int!, $rest_id: Int!) {
    deleteLike(user_id: $user_id, rest_id: $rest_id) {
      user_id
      rest_id
    }
  }
`;

const HistoryContainer = (props) => {
  // const [restaurantHistory, setRestaurantHistory] = useState([]);
  const getLikes = props.getLikesQuery;
  const deleteLikeMutation = props.deleteLikeMutation;
  const restaurantMapping = () => {
    if (getLikes.loading) {
      return <div>Loading</div>
    } else if (getLikes.error) {
       location.reload()
    } else {
      return getLikes.user.restaurants.map((rest) => (
        <StyledRestaurantCard
          {...rest}
          deleteLikeMutation={deleteLikeMutation}
          getLikesQuery={getLikesQuery}
          userId={myUserId}
          key={rest._id}
        />
      ));
    }
  }

  return (
    <div>
      <h2>Restaurants you’ve liked</h2>
      {restaurantMapping()}
    </div>
  )
};


//binds our query to the current container by adding the output to props.  The name property we assign determines the key in props  
//It's like redux when you use connect on map state to props and map dispatch to props
export default compose(
  graphql(getLikesQuery, { name: "getLikesQuery" }),
  graphql(deleteLikeMutation, { name: "deleteLikeMutation" }))
  (HistoryContainer);
