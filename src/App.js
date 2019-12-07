import React, { Component } from "react";
import Searchbar from "./component/Searchbar";
import Listmovie from "./component/Listmovies";
import Addnewmovies from "./component/Addnewmovies";

export default class App extends Component {
  state = {
    listmovie: [
      {
        titel: "god of wars",
        link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
        rates: 1
      },
      {
        titel: "fast and furious 9",
        link:
          "http://fr.web.img5.acsta.net/c_215_290/pictures/19/06/13/16/39/3685647.jpg",
        rates: 4
      },
      {
        titel: "Rod of wars",
        link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
        rates: 2
      },
      {
        titel: "Mod of wars",
        link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
        rates: 3
      }
    ],
    searchinput: "",
    serchrate: 0,
    filteredMovies: []
  };

  //Handlers

  barsearchhanderl = e => this.setState({ searchinput: e.target.value });
  rateSearchHandler = rates => this.setState({ serchrate: rates });
  addNewMovie = newMovie =>
    this.setState({
      ...this.state,
      listmovie: [...this.state.listmovie, newMovie]
    });
  flterd = e => {
    this.setState({
      filteredMovies: this.state.listmovie.filter(el =>
        el.titel.toLowerCase().includes(this.state.searchinput.toLowerCase())
      )
    });
  };

  // filterrates = rates => {
  //   this.setState({
  //     serchrate: this.state.listmovie.filter(
  //       el => el.rates >= this.state.serchrate
  //     )
  //   });
  // };

  render() {
    return (
      <div class="container ">
        <Searchbar
          changesearchbar={this.barsearchhanderl}
          filterrates={this.flterd}
          rates={this.state.serchrate}
          rateChange={this.rateSearchHandler}
          // filterrates={this.filterrates}
        />
        <Listmovie
          itemmovies={
            this.state.searchinput
              ? this.state.listmovie.filter(el =>
                  el.titel
                    .toLowerCase()
                    .includes(this.state.searchinput.toLowerCase())
                )
              : this.state.listmovie.filter(
                  el => el.rates <= this.state.serchrate
                )
          }
          // listmovie={this.listmovie}
        />
        <Addnewmovies addNewMovie={this.addNewMovie} />
      </div>
    );
  }
}
