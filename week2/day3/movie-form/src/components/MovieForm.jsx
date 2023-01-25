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
    //     Getter (arr) Setter (function)
    const [movieList, setMovieList] = useState([])

    const handleInputChange = (e) =>{
        setMovie({...movie, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(`New Movie: ${JSON.stringify(movie)}`)

        // Check the values of the the movie object to make sure they all meet our validations 
        if(movie.title.length < 3 || movie.genre.length < 3 || movie.releaseDate.length <= 0 || movie.boxOfficeSales <= 0){
            return false
        }
        
        else{
            setMovieList([...movieList, movie])
            setMovie({
                title:'',
                genre:'',
                releaseDate:'',
                boxOfficeSales:0
            })

        }
        // if all validations are met do the following
        // If any of the validations are not met end the function and display the errors
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="title">Title:</label>
                <input className='form-control' type="text" onChange={handleInputChange} name='title' value={movie.title}/>

                {
                    movie.title.length < 3?
                    <p className='text-danger'>Title must be 3 or more characters</p>:
                    null
                }

                <label className='form-label' htmlFor="genre">Genre:</label>
                <input className='form-control'  type="text" onChange={handleInputChange} name='genre' value={movie.genre}/>

                {
                    movie.genre.length < 3?
                    <p className='text-danger'>Genre must be 3 or more characters</p>:
                    null
                }

                <label className='form-label' htmlFor="releaseDate">Release Date:</label>
                <input className='form-control'  type="date" onChange={handleInputChange} name='releaseDate' value={movie.releaseDate}/>

                
                {
                    movie.releaseDate.length <= 0?
                    <p className='text-danger'>Must put a release date</p>:
                    null
                }

                <label className='form-label' htmlFor="boxOfficeSales">Box Office Sales:</label>
                <input className='form-control'  type="number" onChange={handleInputChange} name='boxOfficeSales' value={movie.boxOfficeSales}/>

                {
                    movie.boxOfficeSales <= 0?
                    <p className='text-danger'>Cannot be blank or negative</p>:
                    null
                }
                <button className='btn btn-primary'>Add Movie</button>
            </form>
            {/* using {} with a return  */}

            {/* {
                movieList.map((movie) => {
                    return (
                        <div>
                            <p>Title: {movie.title}</p>
                            <p>Genre: {movie.genre}</p>
                            <p>Release Date: {movie.releaseDate}</p>
                            <p>Box Office Sales: {movie.boxOfficeSales}</p>
                        </div>
                    )
                })
            } */}

            {
                movieList.map((movie) => (
                    <div>
                        <p>Title: {movie.title}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Date: {movie.releaseDate}</p>
                        <p>Box Office Sales: {movie.boxOfficeSales}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieForm;


