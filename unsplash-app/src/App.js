import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PhotoDetail from './components/PhotoDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { searchPhotos, getPhoto } from './components/Unsplash';

class App extends Component {
  state = {
    results: [],
    selectedPhoto: null
  };

  handleSearch = async (query) => {
    const data = await searchPhotos(query);
    this.setState({ results: data });
  };

  handlePhotoClick = async (id) => {
    const photo = await getPhoto(id);
    this.setState({ selectedPhoto: photo });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container py-5">
          <SearchBar onSearch={this.handleSearch} />
          <SearchResults results={this.state.results} onPhotoClick={this.handlePhotoClick} />
          {this.state.selectedPhoto && <PhotoDetail photo={this.state.selectedPhoto} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
