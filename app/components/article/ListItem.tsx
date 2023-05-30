import Link from "next/link"
import { Meta } from "@/types"
import getFormattedDate from "@/utils/utils"

type Props = {
    article: Meta
}

export default function ListItem({ article }: Props) {
    const { id, title, date } = article
    console.log({date})

    const formattedDate = date ? getFormattedDate(date) : ''

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}