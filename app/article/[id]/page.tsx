import { getArticlesMeta, getArticleByName } from "@/lib/articleSupport"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css'
import getFormattedDate from "@/utils/utils"
import { MDXRemote } from 'next-mdx-remote/rsc';
import PageTransition from "@/components/pageTransition"

export const revalidate = 86400

type Props = {
    params: Promise<{ id: string }>
}
export async function generateStaticParams() {
    const articles = await getArticlesMeta() //deduped!

    if (!articles) return []

    return articles.map((article) => ({
      id: article.id
    }))
}

export async function generateMetadata({ params } : Props) {
    const id = (await params).id
    const article = await getArticleByName(`${id}.mdx`) //deduped!
    if (!article) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: article.meta.title,
    }
}

export default async function Article({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const article = await getArticleByName(`${id}.mdx`) //deduped!

    if (!article) notFound()

    const { meta, content } = article

    const pubDate = meta.date ? getFormattedDate(meta.date) : ''

    const tags = meta?.tags?.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <PageTransition>  
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">
                {pubDate}
            </p>
            <article>
                {content}
                {/* <MDXRemote source={article} /> */}
            </article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
                <Link href="/article">← Back to List</Link>
            </p>
        </PageTransition>  
     )
}