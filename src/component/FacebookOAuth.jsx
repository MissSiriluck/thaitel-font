import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class FacebookOAuth extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      eamil: response.email,
      picture: response.picture.data.url,
    });
  };
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="934707233799748"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
