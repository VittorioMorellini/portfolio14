import { PrismaClient } from "@prisma/client";
import { Container } from "../../components/container";
import social from "../../public/data/social";
import { Post } from "@/models/post";
import Link from "next/link";

export default async function Contacts() {
  let prisma = new PrismaClient() 

  const posts: Post[] = await prisma.post.findMany();
  console.log({posts})
  return (
    <Container>
      <h1 className="text-4xl font-black">Let&apos;s connect!</h1>
      <div className="mt-12">
        Here&apos;s a list of things that I like to talk about:
          <ul className="list-disc list-inside mt-6">
            <li>Programming languages, frameworks, and tech stacks</li>
            <li>NFL, NBA, American sports</li>
          </ul>
      </div>
      <p className="mt-6">
        so feel free to reach out on any of the following channels!
      </p>
      <div className="mt-6">
        {social.map(({ name, url, Icon }) => (
          <Link
            key={name}
            href={url}
            className="inline-block mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-6 w-6 hover:text-gray-400" />
          </Link>
        ))}
      </div>
    </Container>
  );
}

// export async function getStaticProps() {
//   console.log('Sono in static props lato server')
//   let prisma = PrismaClient() 
//   const posts: Post[] = await prisma.post.findMany();
//     //where: { published: true },
//     // include: {
//     //   author: {
//     //     select: { name: true },
//     //   },
//     // },
//   //});
//   console.log('I have posts', posts)

//   return {
//     props: {
//       posts: posts ? posts : [],
//       revalidate: 360
//     }
//   }
// }
