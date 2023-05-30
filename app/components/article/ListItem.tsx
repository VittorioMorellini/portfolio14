import Link from "next/link"
import { Meta } from "@/types"
import getFormattedDate from "@/utils/utils"

type Props = {
    meta: Meta
}

export default function ListItem({ meta }: Props) {
    const { id, date, title } = meta
    console.log({date})
    console.log('id in list item: ', id)

    const formattedDate = date ? getFormattedDate(date) : ''

    return (
        <li className="mt-4 text-2xl dark:text-black">
            <Link className="underline hover:text-black dark:hover:text-blue" href={`/article/${id}`}>{id} - {title}</Link>
            <br />
            {/* <p className="text-sm mt-1">{id}</p>
            <p className="text-sm mt-1">{formattedDate}</p> */}
        </li>
    )
}