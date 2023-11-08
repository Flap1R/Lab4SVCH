import React, { Component } from 'react';
import './SearchResults.css'; // Импортируем CSS

class SearchResults extends Component {
  render() {
    return (
      <div className="row search-results"> {/* Добавляем класс search-results */}
        {this.props.results.map((photo) => (
          <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="card-img-top"
                onClick={() => this.props.onPhotoClick(photo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
