import {useEffect, useState} from "react";

type FetchHook<T> = {
    data: T[] | null
};

export default function useFetch<T>(url: string): FetchHook<T> {
    const [data, setData] = useState<T[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, {cache: "force-cache"});
            if (response.ok) {
                const data: T[] = await response.json();
                setData(data);
            }
        };
        fetchData();
    }, []);

    return {data};
}
