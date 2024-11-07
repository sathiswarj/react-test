import React, { useState, useMemo } from 'react';
import UseFetch from '../../Custom-hooks/useFetch/UseFetch';

const UseMemo = () => {
    const [flag, setFlag] = useState(false);
    const { data, loading } = UseFetch("https://dummyjson.com/products");

    // Memoize filtered products regardless of loading state
    const memoizedValue = useMemo(() => {
        return data?.products?.length > 0 
            ? data.products.filter((SingleItem) => SingleItem.price > 10) 
            : [];
    }, [data?.products]);

    if (loading) return <h1>Loading Please wait</h1>;
    console.log(data);

    const handleClick = () => {
        setFlag(!flag);
    };

    return (
        <>
            <h1>UseMemo</h1>
            <button onClick={handleClick}>Toggle</button>
            <ul style={{ display: flag ? 'block' : 'none' }}>
                {memoizedValue.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
};

export default UseMemo;
