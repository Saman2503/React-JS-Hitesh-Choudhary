import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/78bc33d5fe0d431da9b57750/latest/${currency}`)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo