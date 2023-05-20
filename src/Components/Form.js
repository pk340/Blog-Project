import { useState , useRef, useEffect, useReducer } from 'react';
import {db} from './firebaseInit';
import Styles from '../CSS/from.module.css';


import { collection, addDoc, getDocs } from "firebase/firestore"; 



export default function Form(){
    // const [name, setName] = useState("");
    // const [blogContent, setblogContent] = useState("");

    const[formData , setFormData] = useState({title : "" , content : ""});

    // let [blogs, setBlog] = useState([]); 
    function reducer(state, action){
       // console.log(action);
       switch(action.type){
         case "ADD":
            return [action, ...state];
         case "REMOVE":
            return state.filter((blog, index) => index!==action.index);
         default : 
            return [];   
       }
    }

    const[blog, dispatch] = useReducer(reducer, []);

    const titleRef = useRef(null);
    //console.log(blog);
    
    useEffect(()=>{
        if(blog.length && blog[0].data.title){
            document.title = blog[0].data.title;
        }else{
            document.title = 'No-Blog!!'
        }
    }, [blog]);
    
    useEffect(() =>{
        titleRef.current.focus();
    }, []);

    useEffect(() =>{

        async function callFromDB(){
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const blogs = querySnapshot.docs.map((doc) => {
                // doc.data() is never undefined for query doc snapshots
                 return {
                    id : doc.id,
                    ...doc.data()

                 }

              });
              console.log(blogs);
            //   setBlog(blogs);
        }
        callFromDB();

    }, [])

    async function handleSubmit(e){
        e.preventDefault();
        
        // setBlog([{title : formData.title , content : formData.content}, ...blog]);
        dispatch({type : "ADD" , data : {title : formData.title , content : formData.content} })
        // setName("");
        // setblogContent("");
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "blog"), {
            title: formData.title,
            content: formData.content,
            createdOn : new Date()
        });
        console.log("Document written with ID: ", docRef.id);

        titleRef.current.focus();
        setFormData({title : "" , content : ""});
        console.log(blog);
        
    }

    

    function deleteBlog(i){
        // setBlog(blog.filter((blog, index) => index !== i));
        dispatch({type : "REMOVE", index : i})
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <label className={Styles.labels}> Text </label><br/>
                <input onChange={(e) => setFormData ({title : e.target.value , content :  formData.content})} 
                className={Styles.inputField} 
                type="text" ref={titleRef}
                value={formData.title} placeholder="Name" /><br/>
                <hr />

                <label className={Styles.labels}> Content </label><br/>
                <textarea onChange={(e) => setFormData ({title : formData.title, content : e.target.value})} 
                className={Styles.textArea} type="text"  
                value={formData.content} placeholder="Add here ..." />
                <hr />
                <button className={Styles.btn}>Submit</button>
            </form>

            <div >
                {blog.map((blog , i) => (
                    
                    <div className={Styles.post} key = {i}>
                        <div>
                            <h2>{blog.data.title}</h2>
                            <p>{blog.data.content}</p>
                        </div>
                        <div className={Styles.deleteButton}>
                            <button onClick={() => deleteBlog(i)}>Delete</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </>
    )
}