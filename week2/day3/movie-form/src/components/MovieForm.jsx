import React, { useState } from 'react';


{/* Dont hesitate to look at the platform and / or assignments to help you with this task (use your resources)*/ }
{/* Create a form to submit a new movie. The form should have 4 labels and inputs (title, genre, release date and box office sales*/ }
{/* Set up your useState hook(s) to keep track of the inputs */ }

{/* Bonus, if you get time. Handle submitting the form with an onSubmitHandler that handler should just console.log the new movie */ }
{/* Extra bonus if you have time. Add front end validations to display error messages. Title and genre must be 3 or more characters, release date and box office sales cannot be blank   */ }

const MovieForm = (props) => {
    const [movie, setMovie] = useState({
        title:'',
        genre:'',
        releaseDate:'',
        boxOfficeSales:0
    })

    const handleInputChange = (e) =>{
        setMovie({...movie, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(`New Movie: ${JSON.stringify(movie)}`)
        setMovie({
            title:'',
            genre:'',
            releaseDate:'',
            boxOfficeSales:0
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title:</label>
                <input type="text" onChange={handleInputChange} name='title' value={movie.title}/>

                {
                    movie.title.length < 3?
                    <p>Title must be 3 or more characters</p>:
                    null
                }

                <label htmlFor="genre">Genre:</label>
                <input type="text" onChange={handleInputChange} name='genre' value={movie.genre}/>

                {
                    movie.genre.length < 3?
                    <p>Genre must be 3 or more characters</p>:
                    null
                }

                <label htmlFor="releaseDate">Release Date:</label>
                <input type="date" onChange={handleInputChange} name='releaseDate' value={movie.releaseDate}/>

                
                {
                    movie.releaseDate.length <= 0?
                    <p>Must put a release date</p>:
                    null
                }

                <label htmlFor="boxOfficeSales">Box Office Sales:</label>
                <input type="number" onChange={handleInputChange} name='boxOfficeSales' value={movie.boxOfficeSales}/>

                {
                    movie.boxOfficeSales <= 0?
                    <p>Cannot be blank or negative</p>:
                    null
                }

                <button>Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm;


