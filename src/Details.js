import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  //   constructor() {
  //     super();
  //     this.state = { loading: true };
  //   }

  state = { loading: true, ShowModal: false };

  async componentDidMount() {
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await result.json();
    // console.log(this.props.match.params.id);
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ ShowModal: !this.state.ShowModal });

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    // throw new error("hi");
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    // console.log(this.state);
    const { animal, breed, city, state, description, name, images, ShowModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}-{city}-{state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {/* <button> Adopt {name}</button> */}
          <p>{description}</p>
          {ShowModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>yes</button>
                  <button onClick={this.toggleModal}>no</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
