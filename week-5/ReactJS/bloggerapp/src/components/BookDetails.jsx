function BookDetails(){

    const books = [
        {
            id:1,
            name:"Java",
            author:"James Gosling"
        },
        {
            id:2,
            name:"React",
            author:"Facebook"
        }
    ];


    return (

        <div>

            <h2>Book Details</h2>


            {
                books.map(book => (

                    <div key={book.id}>

                        <h3>{book.name}</h3>

                        <p>
                            Author: {book.author}
                        </p>

                    </div>

                ))
            }


        </div>

    );

}


export default BookDetails;