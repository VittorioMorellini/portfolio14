"use client"
import { IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Post } from "../../models/post";
import { Edit, Delete } from '@mui/icons-material'
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
    const onConfirm = useRef<() => void>(() => {});
    const messageDelete = "Do you confirm deleting post?";
    
    // handler to assign the function on the confirm method
    const confirmDelete = (id: string | number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      //console.log('Execute delete confirm')
      setOpen(true)
      onConfirm.current = () => executeDelete(id);
    }

    //Function that execute fisically the Delete Operation calling server action
    const executeDelete = async (id: string | number) => {
        //console.log('deleteing id: ' + id)
        await deletePost(id as number)
        toast.success("Successfully deleted")          
    }
    
    const editPost = (id: number) => router.push('/post/' + id)
    return (
        <div className="flex flex-col">
            <ListItem key={post.id} className="px-5">
                <ListItemText style={{width: '20rem'}}>
                    {post.content ? post.content?.substring(0, 100) + '...' : ''}
                </ListItemText>
                <ListItemIcon>
                    <IconButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => editPost(post.id)} title="Edit">
                        <Edit />
                    </IconButton>
                </ListItemIcon> 
                <ListItemIcon>
                    <IconButton onClick={confirmDelete(post.id)} title="Delete">                    
                        <Delete />
                    </IconButton>
                </ListItemIcon> 
            </ListItem>
            <Confirm
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={onConfirm.current!}
                message={messageDelete}
            />
        </div>
    );
}
export default PostItem;