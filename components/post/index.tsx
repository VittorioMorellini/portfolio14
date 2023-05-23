"use client"
import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Container } from "../container";
import { Post } from "../../models/post";
import { PostAddSharp } from '@mui/icons-material'
//import { useToasts } from "react-toast-notifications";
import Confirm from "../../utils/ui/confirm";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

interface PostProps {
  posts: Post[];
}

function PostIndex({posts}: PostProps) {
    const navigate = useRouter();
    //const { addToast } = useToasts()
    //for confirm delete
    const [open, setOpen] = useState(false);
    const onCancel = () => { setOpen(false) };
    const onConfirm = useRef<() => void>();
    const message = useRef<string | JSX.Element | undefined>();
    //const posts: Post[] = await getPosts()
    console.log('sono sul client: ', posts)
    
    // handler to assign the function on the confirm method
    const confirmDelete = (id: string | number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true)
        onConfirm.current = () => executeDelete(id);
    }

    //Function that execute fisically the Delete Operation
    const executeDelete = (id: string | number) => {
        console.log({id})
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
            navigate.push('/post');
            setOpen(false);
        })
        .catch(err => {
          // addToast(err, {
          //   appearance: 'error',
          //   autoDismiss: true,
          // })          
          setOpen(false);
        })
    }
    
    const editPost = (id: number) => navigate.push('/post/' + id)  
    //Initialize the message that does not change in its lifetime
    message.current = "Do you confirm deleting post?"
    //console.log({posts})
    return (
        <div className="flex flex-col">
          <Container>
          <div className="flex flex-col items-center mb-4 md:flex-row">
              <div>
                  <Button variant="outlined" className="w-32" onClick={() => {    
                      navigate.push('post/0')
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
              {posts && posts?.map((post: Post, index: number) => {
                //To manage the timezone in formatting date
                //const date = new Date()
                return <ListItem key={index} className="px-5">
                  <ListItemText>
                    {post.contentText ? post.contentText?.substring(0, 100) + '...' : ''}
                  </ListItemText>
                  <ListItemButton onClick={(e: React.MouseEvent<HTMLDivElement>) => editPost(post.id)} className="justify-end">
                      <PostAddSharp />
                  </ListItemButton> 
                </ListItem>
              })}
            </div>
          </Container>
          </div>
          <Confirm
              open={false}
              onCancel={onCancel}
              onConfirm={onConfirm.current!}
              message={message.current}
          />
        </div>  
    );
}
export default PostIndex;

// export async function getStaticProps({ params }: { params: {} }) {
//   // const posts: Post[] = []
//   console.log('Sono in Static props')
//   let prisma = new PrismaClient() 
//   const postsFromDb = await prisma.post.findMany({
//     //where: { published: true },
//     // include: {
//     //   author: {
//     //     select: { name: true },
//     //   },
//     // },
//   });
//   const results: Post[] = []
//   postsFromDb.map((item) => {
//     let post: Post = {
//       insertDate: item.InsertDate.toString(),
//       updateDate: item.InsertDate.toString(),
//       id: item.Id,
//       author: item.Author,
//       title: item.Title,
//       contentText: item.ContentText
//     }
//     results.push(post)
//   });  
//   console.log('I have posts', results)

//   return {
//     props: {
//       posts: results
//     }
//   }

// }

// export const getStaticProps: GetStaticProps<{posts: Post[]}> = async () => {
//   const posts: Post[] = []
//   console.log('Sono in Static props')
//   // let prisma = new PrismaClient() 
//   // const posts: Post[] = await prisma.post.findMany();
//   //   //where: { published: true },
//   //   // include: {
//   //   //   author: {
//   //   //     select: { name: true },
//   //   //   },
//   //   // },
//   // //});
//   // console.log('I have posts', posts)
//   return {
//     props: {
//       posts: posts ? posts : []
//     }
//   }
// }
