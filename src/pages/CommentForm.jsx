import React, { useEffect, useState } from "react";

import { Button, Form } from "semantic-ui-react";
import CommentService from "../services/CommentService";

function CommentForm(props) {
  const { userId, userName, userTitle, userText, refreshComments,updateCommentList} = props;

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [isSent, setIsSent] = useState(false);

  const saveComment = () => {
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          "Authorization": localStorage.getItem("tokenKey"),
      },
      body: JSON.stringify({
        title: title,
        user_id: userId,
        text: text,
        id: 0
      }),
    })
      .then((res) => res.json())
      .then(result => {
          props.updateCommentList();
      })
      .catch((err) => console.log(err));
      console.log("Hey Post");
  };

  const handleSubmit = () => {
    console.log("hoi nadleSubmit");
    saveComment();
    setIsSent(true);
    setTitle("");
    setText("");
    
  };

  const handleTitle = (value) => {
    setTitle(value);
    setIsSent(false);
  };

  const handleText = (value) => {
    setText(value);
    setIsSent(false);
  };
  // setIsSent(false);

  return (
    <div>
      <Form className="ui form">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="title"
            value={title}
            onChange={(i) => handleTitle(i.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Text</label>
          <input
            placeholder="text"
            value={text}
            onChange={(i) => handleText(i.target.value)}
          />
        </Form.Field>

        <Button onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default CommentForm;
