"use client"
import { Button, TextareaAutosize } from '@mui/material';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';
//import { useToasts } from 'react-toast-notifications';
//import { server } from '../../config/config';
import { Post } from '../../models/post';


function PostDetail({post}: { post: Post}) {
    const navigate = useRouter()
    console.log('post', post)        
    console.log('I am in detail page post')
    const [text, setText] = useState('');
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
        console.log('save post in my blog');
        const response = fetch(`/api/post/${post.id}`, {
            method: 'POST',
            body: JSON.stringify({contentText: text, author: author, id: post.id ? post.id : 0, PostDate: parseISO(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            showToast()
            if (post.id === 0)
                navigate.push('/post');
            })
        .catch(err => {
            // addToast(err, {
            //     appearance: 'error',
            //     autoDismiss: true,
            // })  
        })        
    }

    useEffect(() => {
        // console.log('First load fill the data')
        // console.log({post})
        if (post) {
            setText(post.contentText ? post.contentText : '')
            setAuthor(post.author ? post.author : '')
            setId(post.id);
        }
    }, [])

    return (
        <>
        <div className='flex relative max-w-full'>
            <div className="w-1/5">
                <Link href="/post" passHref className='text-black hover:text-blue-500'>Back
                </Link>
            </div>
            <div className="flex flex-col items-center w-4/5">
                <div className="text-center mb-4">
                    <h3>Post Id: {post?.id}</h3>
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

// export async function generateStaticParams() {
//     const data = await fetch(`/api/post`)
//     const posts: Post[] = await data.json();
//     console.log('Data fetched in server static params api id blog SSR', posts)
   
//     return posts.map((post: Post) => ({
//       id: post.id,
//     }));
// }

// export const getStaticProps = async ({params}: { params: { id: number }}) => {
//     //const idStr: string[] = params.id.split("-");
//     console.log('id server side', params.id)
//     const post: Post = {id: params.id, contentText: '', author: '', insertDate: '', updateDate: '', title: '' }
//     console.log('post server side', JSON.stringify(post))
//     return {
//       props: { post }
//       //revalidate: 3600,
//     };
//   };
  

// export async function getServerSideProps(context: any) {
//     //console.log('I am in server side props loading SSR')
//     const data = await fetch(`/api/post/${context.query.id}`)
//     const result: Post = await data.json();
//     console.log('Data fetched json() in server side props api id blog SSR', result)

//     return {
//       props: {
//         //post: JSON.parse(JSON.stringify(result))
//         post: result
//       }
//     }
// }
