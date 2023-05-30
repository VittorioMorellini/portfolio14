import MyProfilePic from "../components/article/MyProfilePic"
//import Articles from "../components/article/Articles"
import { Meta } from "@/types"
import { getArticlesMeta } from "@/lib/articleSupport"
import ListItem from "../components/article/ListItem"

//export const revalidate = 0

export default async function ArticleHome() {
  let metas: Meta[] | undefined = await getArticlesMeta()
  console.log({metas})
  
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-black">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          <span className="font-bold">Articles list</span>
        </span>
      </p>
      <section className="mt-6 mx-auto max-w-2xl">
        <h1 className="text-4x font-bold dark:text-black">Blog List</h1>
        <ul className="w-full">
            {metas && metas.map(m => (
                <ListItem key={m.id} meta={m} />
            ))
            }
        </ul>
      </section>
    </div>
    // <Articles />
  )
}