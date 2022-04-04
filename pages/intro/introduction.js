import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import Header from "../../components/Header/Header"

export default function Introduction() {
    return (<Header />)
    // return (
    //     <Layout>
    //         <Head>
    //             <title>Introduction</title>
    //         </Head>
    //         <h1>Introduction</h1>
    //         <h2>
    //             <Link href="/">
    //                 <a>Back to home</a>
    //             </Link>
    //         </h2>
    //     </Layout>
    // )
}