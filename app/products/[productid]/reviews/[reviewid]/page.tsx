export default function ReviewDetailPage({
    params,
}:{
    params:{productid:string,reviewid:string}
}) {
    return (
        <div>
            <p>Product nr {params.productid} Review nr {params.reviewid} Detail Page</p>
        </div>
    );
}