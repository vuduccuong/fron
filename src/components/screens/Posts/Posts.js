import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Posts = ()=>{
    const [loading, setLoading] = useState(true);
    const [listPost, setListPost] = useState([]);

    useEffect(()=>{
        console.log("EEE");
        axios.get('https://intagram-apiv1.herokuapp.com/posts').then(data=>{
            setListPost(data.data.post);
            setLoading(false);
        });
    },[]);

    return(
        loading === 0 ? <em style={{textAlign: 'center'}}>Loading...</em> : 
       
            listPost.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                )
            })
        
    );
}

export default Posts;