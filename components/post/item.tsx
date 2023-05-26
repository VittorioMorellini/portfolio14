"use client"
import { Button, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Container } from "../container";
import { Post } from "../../models/post";
import { PostAddSharp, Delete } from '@mui/icons-material'
//import { useToasts } from "react-toast-notifications";
import Confirm from "../../utils/ui/confirm";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

interface PostItemProps {
  post: Post;
  onDelete?: (id: number) => void;
}

function PostItem({post}: PostItemProps) {
    const router = useRouter();
    //const { addToast } = useToasts()
    //for confirm delete
    const [open, setOpen] = useState(false);
    const onCancel = () => { setOpen(false) };
    const onConfirm = useRef<() => void>();
    const message = useRef<string | JSX.Element | undefined>();
    console.log('sono sul client: ', post)
    
    // handler to assign the function on the confirm method
    const confirmDelete = (id: string | number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Execute delete confirm')
      setOpen(true)
      onConfirm.current = () => executeDelete(id);
    }

    //Function that execute fisically the Delete Operation
    const executeDelete = (id: string | number) => {
        console.log('deleteing id: ' + id)
        fetch(`/api/post/${id}`, {
            method: 'DELETE',
            //body: Json
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            // addToast("Successfully deleted", {
            //   appearance: 'info',
            //   autoDismiss: true,
            // })  
            alert('Successfully deleted')
            router.refresh()
            setOpen(false);
        })
        .catch(err => {
          // addToast(err, {
          //   appearance: 'error',
          //   autoDismiss: true,
          // })          
          alert('Error ' + err)
          setOpen(false);
        })
    }
    
    const editPost = (id: number) => router.push('/post/' + id)
    //Initialize the message that does not change in its lifetime
    message.current = "Do you confirm deleting post?"
    //console.log({posts})
    //To manage the timezone in formatting date
    //const date = new Date()
    return (
        <div className="flex flex-col">
            <ListItem key={post.id} className="px-5">
                <ListItemText>
                    {post.contentText ? post.contentText?.substring(0, 100) + '...' : ''}
                </ListItemText>
                <ListItemButton onClick={(e: React.MouseEvent<HTMLDivElement>) => editPost(post.id)} className="justify-end">
                    <PostAddSharp />
                </ListItemButton> 
                <ListItemIcon>
                    <IconButton onClick={confirmDelete(post.id)}>                    
                        <Delete />
                    </IconButton>
                </ListItemIcon> 
            </ListItem>
            <Confirm
                open={open}
                onCancel={onCancel}
                onConfirm={onConfirm.current!}
                message={message.current}
            />
        </div>
    );
}
export default PostItem;