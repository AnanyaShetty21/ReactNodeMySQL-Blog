import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(()=>{

        const fetchData = async () => {
            try{
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);

            }catch(err){
                console.log(err);
            }
        };

        fetchData()

    },[cat]) // Empty array to ensure the effect runs only once


    // const posts =[
    //     {
    //         id: 1,
    //         title: "Title 1",
    //         desc: "Description 1",
    //         img: pic1 //img: {pic} is wrong
    //     },
    //     {
    //         id: 2,
    //         title: "Title 2",
    //         desc: "Description 2",
    //         img: pic2
    //     },
    //     {
    //         id: 3,
    //         title: "Title 3",
    //         desc: "Description 3",
    //         img: pic3
    //     }
    // ]
    return(
            <div className="home">
                <div className="posts">
                    {posts.map((post)=>(
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt=""/>
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
    )
}

export default Home;
