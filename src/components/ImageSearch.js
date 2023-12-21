import React,{useState, useEffect} from "react"; 
import axios from "axios";


const ImageSearch=({setImages})=>{
 
    const [searchTerm,setSearchTerm]=useState('')


    useEffect(()=>{
        fetchImages(null, "random")
    },[])
   

// todo:  remove access key from here and put it in .env file
    async function fetchImages(e, initialSearch){
       if(e){
        e.preventDefault()
       }

       try{
            const response =  await axios.get("https://api.unsplash.com/search/photos",{
                    headers: {
                        "Accept-Version": "v1",
                            "Authorization" : "Client-ID gS4NKYe1wB8XQiaqXxA9ewOXdrpkfw7iOElpuvtS5R0"
                    },
                    params: {
                            query: searchTerm || initialSearch
                    }
                })
                console.log(response.data.results)
                setImages(response.data.results)
        }
        catch(error){
            console.log(error)
        }
    }




    return(
        <div>
            <form onSubmit={fetchImages} className="form-details">
                <input type="text" placeholder="Enter search ..."
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch;

