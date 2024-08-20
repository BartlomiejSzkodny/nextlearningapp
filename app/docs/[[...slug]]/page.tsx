export default function DocsPage({
    params,

}:{
    params:{
        slug:string[];
    }
}) {
    if (params.slug?.length === 1) {
        return (
            <div>
                <p>Docs Home Page</p>
            </div>
        );
    }
    else if (params.slug?.length > 1 ){
        return (
            <div>
                <p>Docs {params.slug} Page</p>
            </div>
        );
    }
    return (
        <div>
            <p>Docs Page</p>
        </div>
    )

}