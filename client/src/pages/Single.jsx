import React from "react";
import contentimg from "../img/content.jpg";
import userimg from "../img/user.png";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import {Link} from "react-router-dom";
import Menu from "../components/Menu";

const Single = () =>{
    return(
        <div className="single">
            <div className="content">
                <img src={contentimg} alt=""/>
            <div className="user">
                <img src={userimg} alt=""/>
            <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to="/write?edit=2">
                <img src={Edit} alt=""/>
                </Link>
                <img src={Delete} alt=""/>
            </div>
            </div>
                <h1>Sample Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id magna purus. Ut turpis felis, mattis posuere tortor et, varius tincidunt ex. Pellentesque in odio pretium, condimentum elit et, finibus ex. Integer at cursus purus. Morbi vitae purus placerat, interdum tortor sed, tristique leo. Mauris sed facilisis lectus. Duis pellentesque vel magna quis mattis. Sed egestas quam ut fringilla sagittis. Praesent nec odio eget quam cursus consequat et finibus purus. In rhoncus mauris quis nibh placerat mollis. Morbi vitae neque non magna fermentum venenatis.

Nullam bibendum id purus non scelerisque. Nunc ut suscipit est. Donec lobortis, augue in volutpat posuere, nisi dui pretium leo, id suscipit turpis nulla vitae libero. Vivamus eu mollis arcu, nec tristique nulla. Phasellus vel sem sed risus fermentum malesuada at vulputate tellus. Proin malesuada, orci consectetur cursus dictum, velit turpis lacinia nisi, vitae luctus justo enim et magna. Donec fermentum, eros eget viverra interdum, lorem tortor placerat nisl, vitae porttitor diam augue sed odio. Etiam laoreet ullamcorper arcu auctor sagittis. Nulla dapibus id libero nec laoreet. Curabitur sit amet euismod metus. Nulla facilisi.</p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single;