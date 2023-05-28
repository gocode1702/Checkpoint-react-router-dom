import React from "react";
import "./Contact.css";
import logo from "../../Media/img/profilforme.jpg";
import validate from "validate.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      startDate: new Date(),
      country: "",
      region: "",
      options: this.options,
      countryVal: null,
      phone: "",
      complete: "",
      displayComplete: "none",
      name: "",
      lastName: "",
      email: "",
      address: "",
    };

    this.flagsRef = React.createRef();
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleValidateName = this.handleValidateName.bind(this);
    this.handleValidateLastName = this.handleValidateLastName.bind(this);
    this.handlerValidateEmail = this.handlerValidateEmail.bind(this);
    this.handlerValidateAddress = this.handlerValidateAddress.bind(this);
    this.handlerComplete = this.handlerComplete.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
    this.completeForm = this.completeForm.bind(this);
  }

  changeHandler = (countryVal) => {
    this.setState({ countryVal });
  };

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleValidateName(e) {
    this.setState({ name: e.target.value });
    !e.target.value.match(/ñ/) === false || !e.target.value.match(/[\W0-9]/)
      ? (this.nameCircle.className = "circleValidate")
      : (this.nameCircle.className = "circleInvalidate");

    if (e.target.value === "") this.nameCircle.className = "";
  }
  handleValidateLastName(e) {
    this.setState({ lastName: e.target.value });
    !e.target.value.match(/ñ/) === false || !e.target.value.match(/[\W0-9]/)
      ? (this.lastNameCircle.className = "circleValidate")
      : (this.lastNameCircle.className = "circleInvalidate");

    if (e.target.value === "") this.lastNameCircle.className = "";
  }
  handlerValidateEmail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log(validate.validators.email.PATTERN);
    validate.validators.email.PATTERN.test(e.target.value)
      ? (this.emailCircle.className = "circleValidate")
      : (this.emailCircle.className = "circleInvalidate");
    if (e.target.value === "") this.emailCircle.className = "";
  }

  handlerValidateAddress(e) {
    this.setState({ address: e.target.value });
    e.target.value.match(/[*-+]/)
      ? (this.addressCircle.className = "circleInvalidate")
      : (this.addressCircle.className = "circleValidate");

    if (e.target.value === "") this.addressCircle.className = "";
  }
  handlerComplete(e) {
    if (
      this.state.countryVal !== null &&
      this.state.complete === true &&
      this.state.phone !== ""
    ) {
      this.setState({
        displayComplete: "flex",
      });
      window.scroll({
        top: this.complete.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      alert("You have not yet completed the form");
    }
  }
  handlerReset() {
    this.setState({
      startDate: new Date(),
      country: "",
      region: "",
      options: this.options,
      countryVal: null,
      phone: "",
      complete: "",
      displayComplete: "none",
      name: "",
      lastName: "",
      email: "",
      address: "",
    });
    this.nameCircle.className = "";
    this.lastNameCircle.className = "";
    this.emailCircle.className = "";
    this.addressCircle.className = "";
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  completeForm() {
    if (
      this.nameCircle.className === "circleValidate" &&
      this.lastNameCircle.className === "circleValidate" &&
      this.emailCircle.className === "circleValidate" &&
      this.addressCircle.className === "circleValidate"
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  }
  render() {
    const { country, region } = this.state;
    return (
      <div className="App" onChange={this.completeForm}>
        <div
          id="complete"
          style={{ display: this.state.displayComplete }}
          ref={(div) => (this.complete = div)}
        >
          <div>
            <p className="whiteLetter">
              The form has been successfully completed
            </p>
          </div>
          <button className="buttons" onClick={this.handlerReset}>
            Reset
          </button>
        </div>
        <h1 id="title" className="blackLetter">
          WELCOME "nice to meet you"
        </h1>
        <p id="description" className="blackLetter">
          Accurately place your data
        </p>
        <div className="perfectCentered">
          <div id="survey-form">
            <label id="name-label" htmlFor="name">
              Name
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handleValidateName}
            >
              <div id="nameCircle" ref={(div) => (this.nameCircle = div)} />
              <input
                id="name"
                maxLength="30"
                placeholder="write your name"
                pattern="[A-Za-z]"
                title="tiene que ser solo letras"
                className="styleInput"
                value={this.state.name}
                required
              />
            </div>
            <label id="lastName-label" htmlFor="Last name">
              Last Name
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handleValidateLastName}
            >
              <div
                id="lastNameCircle"
                ref={(div) => (this.lastNameCircle = div)}
              />
              <input
                id="lastName"
                maxLength="30"
                placeholder="write your last name"
                pattern="[A-Za-z]"
                value={this.state.lastName}
                className="styleInput"
                required
              />
            </div>
            <label id="email-label" htmlFor="email">
              Email
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handlerValidateEmail}
            >
              <div id="emailCircle" ref={(div) => (this.emailCircle = div)} />

              <input
                id="email"
                type="email"
                maxLength="50"
                placeholder="write your email"
                value={this.state.email}
                className="styleInput"
                required
              />
            </div>
            <label id="lastName-label" htmlFor="Address">
              Address
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handlerValidateAddress}
            >
              <div
                id="addressCircle"
                ref={(div) => (this.addressCircle = div)}
              />

              <input
                id="address"
                maxLength="50"
                placeholder="Write your address"
                value={this.state.address}
                className="styleInput"
                required
              />
            </div>
            <div className="marginBottom">
              <label id="number-label" htmlFor="number">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                className="marginBottom"
                value={this.state.phone}
                onChange={(phone) => this.setState({ phone })}
              />
            </div>
            <label id="lastName-label" htmlFor="country">
              Country
            </label>
            <div
              id="countryFlag"
              className="marginBottom"
              style={{ display: "flex", alignItems: "center", width: "70%" }}
            >
              <ReactCountryFlag
                countryCode={
                  this.state.countryVal ? this.state.countryVal.value : ""
                }
                svg
                cdnUrl=""
                cdnSuffix="svg"
                title={this.state.countryVal ? this.state.countryVal.value : ""}
              />
              <div
                style={{ marginLeft: "10px", color: "black", width: "100%" }}
              >
                <Select
                  isSearchable={true}
                  options={this.state.options}
                  value={this.state.value}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="marginBottom">
              <label id="Dateofbirth-label" htmlFor="Date of birth">
                Date of birth
              </label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
              />
            </div>
            <div>
              <p>Suggestions and comments</p>
              <textarea
                id="textarea"
                rows="10"
                className="marginBottom"
                placeholder="Write something here"
              />
            </div>
            <div className="perfectCentered">
              <button className="buttons" onClick={this.handlerComplete}>
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
        <div id="footer" className="perfectCentered">
          <div id="explanationPage">
            <h2>My form</h2>
            <p>forms validation</p>
          </div>
          <div id="contact">
            <h2>Contact</h2>
            <div id="">
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div id="madeBy">
            <p>Made By Wahid WBA</p>
            <p>CERIFICATE</p>
            <a href="/" target="_blank">
              <img src={logo} className="fadeinout" id="logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
