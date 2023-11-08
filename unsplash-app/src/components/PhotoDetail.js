import React, { Component } from 'react';
import './PhotoDetail.css'; // Импортируем CSS

class PhotoDetail extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={this.props.photo.urls.regular}
          alt={this.props.photo.alt_description}
          className="img-fluid photo-detail" // Добавляем класс photo-detail
        />
      </div>
    );
  }
}

export default PhotoDetail;
