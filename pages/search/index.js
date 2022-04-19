import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';


import Header from "../../components/common/Header/Header";
import SearchBox from "../../components/common/SearchBox";
import BodyFrame from "../../components/common/BodyFrame";

function Search() {
    const router = useRouter();
    const { value } = router.query;
    console.log({ value })

    useEffect(async () => {
        const res = await axios.get(`/api/v1/search?keyword=${value}`)
        console.log("res: ", res.data)

    }, [])
    return (
        <>
            <Header />
            <BodyFrame>
                <h3>{value}</h3>
                <SearchBox />
            </BodyFrame>
        </>
    )
}

export default Search;