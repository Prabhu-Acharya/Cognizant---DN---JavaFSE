function BlogDetails(){

    const blogs = [

        {
            id:1,
            title:"React Conditional Rendering"
        },

        {
            id:2,
            title:"JavaScript ES6"
        }

    ];


    return (

        <div>

            <h2>Blog Details</h2>


            {
                blogs.map(blog => (

                    <div key={blog.id}>

                        <h3>
                            {blog.title}
                        </h3>

                    </div>

                ))
            }


        </div>

    );

}


export default BlogDetails;