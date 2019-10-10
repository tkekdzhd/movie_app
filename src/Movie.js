import React, {Component} from 'react';
import './Movie.css'
import propTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';

// class Movie extends Component{
//     static propTypes = {
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }
//     render(){
//         // console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />   
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//     static propTypes = {
//         poster : propTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="" width="300"/>
//         )
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index}/>)}
                </div>
                <div>
                    <LineEllipsis 
                        text={synopsis}
                        maxLine='20'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title : propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

function MovieGenres({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenres.propTypes = {
    genre : propTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" width="300" />
    )
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired
}

export default Movie //다른 js파일에서 movie컴포넌트를 사용할 수 있도록 export