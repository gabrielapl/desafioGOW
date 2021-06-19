import '../styles/global.css';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ListPhotos } from '../components/ListPhotos';
import { ListPosts } from '../components/ListPosts';
import { ListUsers } from '../components/ListUsers';

interface Photos{
    id: number,
    title:string,
    url: string,
}

interface Post{
  title: string,
  body: string
}
interface Users{
  name: string;
  username: string;
  email: string;
  address:{
    street: string;
    city:string;
    zipcode: string;
  }
}

function App() {
  
  const [photos,setPhotos] = useState<Photos[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Users[]>([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos/?_sort=title&_limit=5", {
      method:"get"
      
    }).then(response => response.json()).then(data => setPhotos(data))
    fetch("https://jsonplaceholder.typicode.com/posts/?_sort=title&_limit=6", {
      method:"get"
      
    }).then(response => response.json()).then(data => setPosts(data))
    fetch("https://jsonplaceholder.typicode.com/users/?_sort=title&_limit=6", {
      method:"get"
      
    }).then(response => response.json()).then(data => setUsers(data))
  },[])


  return (
    <div className="Container">
      <Header/>
      <h2>Algumas Fotos...!</h2>
      <div className="listWrapper">
        {
            photos.map(item => (
              <ListPhotos data={item}  />
            ))
          }
      </div>
      <h2>Posts Aleatórios...!</h2>
      <div className="listWrapperPost">
        {
            posts.map(item =>(
            <ListPosts data={item} />
            ))
          }
      </div>
      <h2>Users...!</h2>
      <div className="listWrapperUsers">
        <ul>

      {

            users.map(item =>(
             <ListUsers data={item} />
            ))
      }
        </ul>
      </div>
    </div>
    
  );
}

export default App;
