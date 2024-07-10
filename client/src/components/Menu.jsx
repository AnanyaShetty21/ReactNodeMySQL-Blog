import React from "react";
import {Link} from "react-router-dom";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";

const Menu = () =>{
    const posts =[
        {
            id: 1,
            title: "Title 1",
            desc: "Description 1",
            img: pic1 //img: {pic} is wrong
        },
        {
            id: 2,
            title: "Title 2",
            desc: "Description 2",
            img: pic2
        },
        {
            id: 3,
            title: "Title 3",
            desc: "Description 3",
            img: pic3
        }
    ]


    return(
        <div className="menu">
            
            <h1>Other posts you may like</h1>
            {posts.map((post)=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}


        </div>
    )
}

export default Menu;