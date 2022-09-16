import axios from 'axios';

const inspectUserUrl = "http://localhost:3000/api/user/";
const duelUsersUrl = "http://localhost:3000/api/users?";

export const inspectUser = async (username) => {
  // await response of fetch call
  let response = await axios.get(inspectUserUrl + username);
  // let response = await fetch(inspectUserUrl + username);
  // only proceed once promise is resolved
  let data = response.data;
  // let data = response.json();
  console.log(data);
  // only proceed once second promise is resolved
  return data;
};

export const duelUsers = async (user1, user2) => {
    // await response of fetch call
    let response = await axios.get(duelUsersUrl + `username=${user1}&username=${user2}`);
    // only proceed once promise is resolved
    let data = response.data;
    console.log(data);
    // only proceed once second promise is resolved
    return data;
  };