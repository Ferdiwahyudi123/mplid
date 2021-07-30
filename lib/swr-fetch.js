import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
}

export const useDataMpl = () => {
     //url
     const url = "http://localhost:3000/api/data-mpl";
     //data dan error
     const { data, error } = useSWR(url, fetcher, {refreshInterval: 1000});

     return {data, error}
}