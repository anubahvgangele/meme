import { useEffect, useState } from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


 function Hook(tag){
    const RandomUrl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const[gif , setGif] = useState(''); 

    const[loading,setloading] = useState(true);

    /* Fetch API */
    async function fetchdata() {
        
        try{
            setloading(true);

            const {data} = await axios.get(tag ? tagUrl : RandomUrl);

            const imageSource = data?.data?.images?.downsized_large?.url;
            
            setGif(imageSource);
        }
        catch(error){
            console.log(error.message);
        }
        finally{
        setloading(false);
        }
        
    }

    useEffect(() => {
    fetchdata();
}, [fetchdata]);

    return{
        gif,loading,fetchdata
    }; 

 }
 export default Hook;