
export default function Page({ params }: { params: { id: string } }) { 
    return (
        <div>
            <h2>Blog Post ID: {params.id}</h2>
        </div>
    )
}