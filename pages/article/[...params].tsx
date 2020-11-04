/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()

    const {params} = router.query


    return (
        <h1>Article id is {params}</h1>
    )
}
export default Page