import axios from "axios";

const API =`${import.meta.env.VITE_API_URL}/chat`;

export const sendMessage =
async (payload)=>{

 const { data } =
 await axios.post(
   API,
   payload
 );

 return data;
};