import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import {
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardImg, 
  Button
} from 'reactstrap';


const FriendShow = ({friends, deleteFriend}) => {
  const{id} = useParams()
  const navigate = useNavigate()
  const singleFriend = friends?.find(friend => {return friend.id == id})
  const handleDelete = () => {
    deleteFriend(id)
    navigate(`/friendindex`)
  }
  return (
    <>
    <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={singleFriend.img}
      style={{
        height: 500,
        width: 500
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {singleFriend.name}
      </CardTitle>
      <CardText>
        Species: {singleFriend.species}
        <br/>
        Age: {singleFriend.age} 
        <br/>
        Personality: {singleFriend.personality}
        <br/>
        Favorite Activities: {singleFriend.activities}
        <br/>
        Size Class: {singleFriend.size}
      </CardText>
    </CardBody>
      <Button onClick = {handleDelete}>
        Delete Profile
      </Button>
    
      <Button>
      <NavLink to={`/friendEdit/${singleFriend.id}`}>
      </NavLink>
        Edit {singleFriend.name}'s Profile
    
      </Button>

  </Card>
  </>
  )
}

export default FriendShow