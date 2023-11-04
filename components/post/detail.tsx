"use client"
import { Button, TextField, TextareaAutosize } from '@mui/material';
import format from 'date-fns/format';
//import parseISO from 'date-fns/parseISO';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Post } from '../../models/post';
//import { useToasts } from 'react-toast-notifications';

interface PostDetailProps {
    post: Post | null,
    onSave?: (id: number) => void
}
function PostDetail({post, onSave}: PostDetailProps) {
    const router = useRouter()
    console.log('Post in client page', post)        
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(0)
    //const { addToast } = useToasts()

    const showToast = () => {
        // addToast("Succesfully updated", {
        //     appearance: 'info',
        //     autoDismiss: true,
        // })        
    }

    const savePost = async (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('save post in my portfolio: ' + text);
        fetch(`/api/post/${post?.id}`, {
            method: 'POST',
            body: JSON.stringify({contentText: text, author: author, id: post?.id ? post.id : 0, 
                insertDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), 
                updateDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), 
                title: title}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            //showToast()
            alert('Succesfully updated')
            if (post?.id === 0)
                router.push('/post');
            })
        .catch(err => {
            // addToast(err, {
            //     appearance: 'error',
            //     autoDismiss: true,
            // })  
            alert('Error: ' + err)
        })        
    }

    useEffect(() => {
        console.log('First load fill the data')
        if (post) {
            setText(post?.contentText ? post.contentText : '')
            setAuthor(post?.author ? post.author : '')
            setId(post?.id);
            setTitle(post?.title ? post.title : '')
        }
    }, [])

    return (
        <>
        <div className='flex relative max-w-full'>
            <div className="w-1/5">
                {/* <Link prefetch={false} href="/post" passHref className='text-black hover:text-blue-500'>Back
                </Link> */}
                <Button onClick={() => { router.push('/post'); router.refresh()}} className='text-black hover:text-blue-500'>Back
                </Button>
            </div>
            <div className="flex flex-col items-center w-4/5">
                <div className="text-center mb-4">
                    <h3>Post Id: {post?.id}</h3>
                </div>
                <div>
                    <label className='italic' htmlFor='title'>Title</label>
                    <TextField type="text" className='w-full border-gray-400 border-solid bg-gray-200' id="title" value={title} size='small' placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='block'>
                    <label className='italic'>Content</label>
                    <TextareaAutosize
                        className='w-full border-gray-400 border-solid bg-gray-200'
                        cols={250}  
                        minRows={15}                      
                        maxRows={50}                         
                        value={text}                        
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Text"                         
                    />                
                </div>
                <div className='mt-8 block'>
                    <label className='italic'>Author</label>
                    <TextareaAutosize
                        className='bg-gray-200 w-full border-gray-400 border-solid'
                        cols={250}
                        placeholder="Author" 
                        maxRows={1}                         
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)}                         
                    />
                </div>
                <div>
                    <Button
                        variant="outlined"
                        onClick={savePost}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
        </>    
    )
}

export default PostDetail;