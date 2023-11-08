"use client"
import { Button, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Post } from "../../models/post";
import { PostAddSharp, Delete } from '@mui/icons-material'
import Confirm from "../../utils/ui/confirm";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { deletePost } from "@/lib/actions";

interface PostItemProps {
  post: Post;
  onDelete?: (id: number) => void;
}

function PostItem({post}: PostItemProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const onCancel = () => { setOpen(false) };
    const onConfirm = useRef<() => void>();
    const message = useRef<string | JSX.Element | undefined>();
    //console.log('sono sul client: ', post)
    
    // handler to assign the function on the confirm method
    const confirmDelete = (id: string | number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      //console.log('Execute delete confirm')
      setOpen(true)
      onConfirm.current = () => executeDelete(id);
    }

    //Function that execute fisically the Delete Operation calling server action
    const executeDelete = async (id: string | number) => {
        console.log('deleteing id: ' + id)
        await deletePost(id as number)
        toast.success("Successfully deleted")  
        
        // fetch(`/api/post/${id}`, {
        //     method: 'DELETE',
        //     //body: Json
        //     headers: {'Content-Type': 'application/json'}
        // })
        // .then(res => {
        //     //alert('Successfully deleted')
        //     router.refresh()
        //     setOpen(false);
        // })
        // .catch(err => {
        //   toast.error(err)
        //   setOpen(false);
        // })
    }
    
    const editPost = (id: number) => router.push('/features/post/' + id)
    message.current = "Do you confirm deleting post?"
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