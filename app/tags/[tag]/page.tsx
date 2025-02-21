import { getArticlesMeta } from "@/lib/articleSupport"
import ListItem from "@/app/(components)/article/ListItem"
import Link from "next/link"

export const revalidate = 86400

type Props = {
    params: Promise<{tag: string}>
}
export async function generateStaticParams() {
    const articles = await getArticlesMeta() //deduped!

    if (!articles) return []

    const tags = new Set(articles.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}
export async function generateMetadata({ params }: Props) {
    const tag = (await params).tag
    return {
        title: `Posts about ${tag}`
    }
}
export default async function TagPostList({ params }: Props) {
    const tag = (await params).tag
    const articles = await getArticlesMeta() //deduped!

    if (!articles) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = articles.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagPosts.map(article => (
                        <ListItem key={article.id} meta={article} />
                    ))}
                </ul>
            </section>
        </>
    )
}