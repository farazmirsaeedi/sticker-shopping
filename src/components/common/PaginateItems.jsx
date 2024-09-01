import { useState } from "react";


const PaginateItems = ({
    productsPerPage,
    products,
    isLoading,
    isSuccess,
    isError,
}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + productsPerPage;

    const currentProducts = products.slice(itemOffset, endOffset);
    console.log(`currentProducts: ${currentProducts}`);



    return (

    );
};

export default PaginateItems;
