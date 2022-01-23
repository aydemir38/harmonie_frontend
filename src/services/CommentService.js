import React, { useEffect, useState } from 'react'
import CommentForm from '../pages/CommentForm';
import { Form } from "semantic-ui-react";




function CommentService(){
    const [error,setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commentList,setCommentList] = useState ([]);

    const refreshComments = () =>{
        
        if (!isLoaded) {
        fetch("/comments")
        .then(res =>res.json())
        .then (
            (result) => {
                setIsLoaded(true);
                setCommentList(result)
                console.log("joi");
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
                console.log("err");
            }
        )
        }
    
    }

    const updateCommentlist = () => {
        setIsLoaded(false);
        refreshComments();
    } 
    
    // einmal aufrufen bei start!
    useEffect(() => {
        refreshComments()
    })

    if(error) {
        return <div>Error !!!</div> ;

    }else if ( !isLoaded){
        return <div>Loading...</div>;
    }else {
        //commentList.map (comment => (
            
         //   console.log(comment.userId + " "+ comment.text +" --")
        //))
        return (
            <div>
                
               
                <Form className="ui form">
                <Form.Field  >
                {localStorage.getItem("currentUser") == null? "":<CommentForm userId={localStorage.getItem("currentUser")}
                 userName = {localStorage.getItem("userName")} updateCommentlist={()=>{updateCommentlist()}}/> }
                {commentList.map (comment => (
                    // <li>{comment.username} {comment.password}</li>
                    
                       

                      <label key={comment.id}>{comment.title} {comment.text} </label>

                     
                    // <CommentForm>  {comment.username} {comment.password} </CommentForm>

                ))}
                </Form.Field>
                 </Form>
            </div>
        );
    }

}

export default CommentService;


