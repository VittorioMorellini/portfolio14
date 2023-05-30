import { getArticlesMeta } from "@/lib/articleSupport";
import { Meta } from "@/types";
import ListItem from "./ListItem";


// export default async function Articles() {
//     let articles: Meta[] | undefined = await getArticlesMeta()
//     console.log({articles})
//     return (
//         <section className="mt-6 mx-auto max-w-2xl">
//             <h2 className="text-4x font-bold dark:text-white/90">Blog</h2>
//             <ul className="w-full">
//                 {articles && articles.map(a => (
//                     <ListItem key={a.id} article={a} />
//                 ))
//                 }

//             </ul>
//         </section>
//     )
// }