import React from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBInput } from "mdbreact";

/**
 *
 * Class that represents the page that contains the ability to choose the scopes
 */
class Scopes extends React.Component {
  /**
   *
   * @param {*} props holds information about the scopes array
   * constructor for Scope
   */
  constructor(props) {
    super(props);
    this.state = {
      scopes: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   * @param {*} event
   * function to handle changes to the input
   */
  handleChange(event) {
    this.setState({ scopes: event.target.value.split(" ") });
  }

  /**
   *
   * @param {*} event
   * @return {*} string array with scopes in it
   */
  handleSubmit(event) {
    event.preventDefault();
    return this.state.scopes;
  }

  /**
   * @return {div} scopes component
   */
  render() {
    return (
      <div className="top">
        <div className="shadow-box-example z-depth-2">
          <MDBContainer>
            <form onSubmit={this.handleSubmit}>
              <MDBCol>
                {" "}
                <p className="h5 text-center mb-4">Enter scopes </p>
              </MDBCol>
              <MDBInput
                id="scopes-label"
                label="Scopes"
                size="lg"
                onChange={this.handleChange}
              />

              <div className="next">
                <MDBBtn outline color="info" type="submit">
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Scopes;
