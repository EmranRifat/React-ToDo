import React, { useEffect, useState } from "react";
// import Friend from './Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  useEffect(() => {
    fetch("http://task.atiar.info/api/todo")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h3> All todo data are:{friends.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Details</th>
              <th></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {
            friends.map((f) => (
            
            ))
            } */}
              <tr>
                <th>tilte</th>
                <td>Cy Ganderton</td>
                <td> blue</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>tilte</th>
                <td>Cy Ganderton</td>
                <td> blue</td>
                <td>Blue</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Friends;
