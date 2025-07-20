import React from 'react';

const DynamicProductPage = async ({params, searchParams}) => {
    const productId = await params.productId;
    console.log(await searchParams)

    return (
        <div>
            <h2 className='text-2xl text-center pt-20'>This is Dynamic Product Page! <br/>Product Id: {productId}</h2>
        </div>
    );
};

export default DynamicProductPage;