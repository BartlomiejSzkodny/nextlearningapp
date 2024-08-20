export default function ProductDetailPage({
    params,
}:{
    params:{productid:string}
}) {
    return (
        <div>
            <p>Product nr {params.productid} Detail Page</p>
        </div>
    );
}