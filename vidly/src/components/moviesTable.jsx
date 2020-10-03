import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      colName: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { colName: "genre.name", label: "Genre" },
    { colName: "numberInStock", label: "Stock" },
    { colName: "dailyRentalRate", label: "Rate" },
    {
      colName: "likes",
      content: (movie) => (
        <Like movie={movie} onClick={this.props.onClickLike} />
      ),
    },
    {
      colName: "action",
      label: "Action",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onClickRemoveRowData(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onClickSort, sortColumn } = this.props;
    const movieCount = movies.length;
    return movieCount === 0 ? null : (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onClickSort={onClickSort}
      />
    );
  }
}

export default MoviesTable;
