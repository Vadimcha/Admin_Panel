import React from "react";
import axios from 'axios'
import {useState, useEffect} from "react";
import {User} from "../models/User";

const baseURL = "https://randomuser.me/api/?results=20&inc=name,phone,location&noinfo";

export function Users() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data["results"]);
        });
        }, []);
    let answer: User[] = [];
    if(post !== null)
        for (let i = 0; i < 20; i++) {
            let t: User = {
                id: i + 1,
                name: post[i]["name"]["first"] + " " + post[i]["name"]["last"],
                phone: post[i]["phone"],
                location: post[i]["location"]["country"] + ", " + post[i]["location"]["state"] + ", " + post[i]["location"]["city"],
                _cellProps: {id: {scope: 'row'}},
            };
            answer.push(t);
        }
    return answer
}
