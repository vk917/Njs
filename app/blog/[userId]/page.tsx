import axios from "axios";

export default async function({params}: any){
    const userId=(await params).userId;
    const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const data=res.data;
    return <>
        title-{data.title}
        <br/>
        body-{data.body}
    </>
}