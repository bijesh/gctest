import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Post from './Post'
const UserSearch=()=>{

    const [post,setPost] = useState([]);
    const [userid,setUserid] = useState("");
    const [users,setUsers] = useState([]);

   let userComponent = null;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => setUsers(response.data))
        .catch(console.error);
        
      },[]);

      const handleChange = event => {
        setUserid(event.target.value);
      }

      userComponent = (
        <select onChange={handleChange} value={userid}>
          {users.map((user, index) => (
            <option key={index} value={user.id}>{user.username}</option>
          ))}
        </select>
      );

     
    const handleSubmit = event => {
        event.preventDefault();

     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
      .then(response => setPost(response.data))
      .catch(console.error);
  }
    return(
        <form>
            {userComponent}
            <button onClick={handleSubmit}>Search</button>
            <div>
                {post!==null ? post.map((p,index)=>(<Post key={index} posts={p}/>))  : 'No Post'  }     
                
            </div>
        </form>
      
    );

   
};

export default UserSearch;