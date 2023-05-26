"use client"
import { Button, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Container } from "../container";
import { Post } from "../../models/post";
import { PostAddSharp, Delete } from '@mui/icons-material'
//import { useToasts } from "react-toast-notifications";
import Confirm from "../../utils/ui/confirm";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

interface PostProps {
  posts: Post[];
}

{/* <ToastProvider autoDismiss={true} 
autoDismissTimeout={6000} 
placement="top-center"
//components={{ Toast: CustomToast }}
>        */}

function PostIndex({posts}: PostProps) {
    const router = useRouter();
    //const { addToast } = useToasts()
    //for confirm delete
    const [open, setOpen] = useState(false);
    const onCancel = () => { setOpen(false) };
    const onConfirm = useRef<() => void>();
    const message = useRef<string | JSX.Element | undefined>();
    console.log('sono sul client: ', posts)
    
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
            router.push('/post');
            //router.refresh()
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
    return (
        <div className="flex flex-col">
          <Container>
          <div className="flex flex-col items-center mb-4 md:flex-row">
              <div>
                  <Button variant="outlined" className="w-32" onClick={() => {    
                      router.push('post/0')
                  }}>
                      Add post
                  </Button>
              </div>
              <div className="text-center w-full">
                <h1 className="text-3xl font-black text-center">Tell me what do you think about my blog and articles</h1>
              </div>
          </div>
          {/*YYYY-MM-DDTHH:mm:ss.sssZ  post.Date.toString() */}
          {/* format(new Date(parseISO(post.Date).valueOf() + date.getTimezoneOffset() * 60 * 1000), "yyyy-MM-dd'T'HH:mm:ss") */}
          </Container>
          <div>
            <Container>
              <div className='bg-cyan-300 text-center'>
                {posts?.map((post: Post, index: number) => {
                  //To manage the timezone in formatting date
                  //const date = new Date()
                  return <ListItem key={index} className="px-5">
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
                  })}
              </div>
            </Container>
          </div>
          <Confirm
              open={open}
              onCancel={onCancel}
              onConfirm={onConfirm.current!}
              message={message.current}
          />
        </div>  
    );
}
export default PostIndex;