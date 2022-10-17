import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend ,setFriend]=useState({});
    useEffect(()=>{
       const  url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h2>Friends Detail page :{friendId}</h2>
            <h3>Name:{friend.name}</h3>
            <h5>Email Add:{friend.email}</h5>
            <h6>web:{friend.website}</h6>
        </div>
    );
};

export default FriendDetail;