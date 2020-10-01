import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService.js";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { colName: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: null }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handlerRemoveMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const ind = movies.indexOf(movie);
    movies[ind] = { ...movie };
    movies[ind].liked = !movie.liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlerSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData() {
    const {
      movies,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(
      filtered,
      [sortColumn.colName],
      [sortColumn.order]
    );

    const moviesList = paginate(sorted, currentPage, pageSize);

    return { moviesList: moviesList, filteredData: filtered };
  }

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      genres,
      selectedGenre,
    } = this.state;

    const { moviesList, filteredData: filtered } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <span>{this.movieCount(filtered)}</span>
          <MoviesTable
            movies={moviesList}
            sortColumn={sortColumn}
            onClickLike={this.handleLike}
            onClickRemoveRowData={this.handlerRemoveMovie}
            onClickSort={this.handlerSort}
          />
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  movieCount(movies) {
    // const movieCount = this.state.movies.length;
    const { length: movieCount } = movies;
    return movieCount === 0 ? (
      <p>No Movies in Database</p>
    ) : (
      <p>Showing {movieCount} movies from the Database</p>
    );
  }
}

export default Movies;
