import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{
    
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data)=>{
        if(err) return err;
        if(data.length) return res.status(409).json("User already exists");

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `password`) VALUES (?)";
        const values = [req.body.username, hash];

        db.query(q, [values], (err, data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        });

    });
};

export const login = (req, res) =>{
    
    // CHECK USER
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if(err) return err;
        if(data.length === 0) return res.status(404).json("User doesn't exist");

        // CHECK PASSWORD
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        // "data" is an object that stores a "user" in it. data[0] returns the "user".

        if(!isPasswordCorrect) return res.status(400).json("Wrong password");

        const token = jwt.sign({id:data[0].id}, "jwtkey");
        // To seperate the password from user's other information
        const {password, ...other} = data[0];
        res.cookie("access_token", token, {
            // Any scripts and applications from the browser cannot reach the cookie directly and
            // this cookie will be used when we make only api requests
            httpOnly: true
              
        }).status(200).json(data[0])
    })

};

export const logout = (req, res) =>{

    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
};