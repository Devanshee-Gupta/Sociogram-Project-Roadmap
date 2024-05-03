import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetAllPostsService = (session,setPostData,setIsFetching) => {
    try {
        let session_key = session[1];
        axios
          .post("http://127.0.0.1:8000/getallposts/", {
            session_key: session_key,
          })
          .then((res) => {
            setPostData(res.data.Data);
            setIsFetching(false);
          });
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Something went wrong. Please try again.");
        setIsFetching(false);
      }
      
};

export default GetAllPostsService;
