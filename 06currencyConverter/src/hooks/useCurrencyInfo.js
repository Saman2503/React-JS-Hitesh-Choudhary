import { useState, useEffect } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/78bc33d5fe0d431da9b57750/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.conversion_rates) {
                    setData(res.conversion_rates)
                } else {
                    console.error('Conversion rates not found in the response');
                }
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
                setData({})
            })
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;