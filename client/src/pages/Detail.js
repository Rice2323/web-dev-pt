import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import { TextArea, FormBtn } from "../components/Form";
import moment from "moment";
// import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
// const db = require("../../../models/blog");

class Detail extends Component {
  state = {
    responseText: "",
    responseName: "",
    blog: [],
    loadresponse: [],
    userName: [],
    time: "",
    responseTime: []
  };

  componentDidMount() {
    this.loadBlog();
  }

  loadBlog = () => {
    API.getBlog(this.props.match.params.id)
      .then(res => {
        console.log("DATA: ", res.data);
        console.log("responsesText: ", res.data.responses.responseText);
        console.log("responsesName: ", res.data.responses.responseName);
        console.log("userTime", res.data.responses.userTime);

        let time = moment(res.data.date).format("LLL");

        console.log("SynoposisTime" + time);

        // res.data.date.toDateString()
        // console.log(date)
        this.setState({
          blog: res.data,
          responseTime: res.data.responseDate,
          loadresponse: res.data.responses.responseText,
          userName: res.data.responses.responseName,
          timearray: res.data.responses.userTime,
          time: moment(res.data.date).format("LLL")
        });
      })
      .catch(err => console.log(err));
  };

  handleResponseChange = event => {
    const { name, value } = event.target;

    // let value = event.target.value;
    this.setState({
      [name]: value
      // responses: value,
      // responseName:value//
    });
  };

  Submitresponse = event => {
    event.preventDefault();
    console.log("submit!!!!");
    console.log("this is the usertime" + this.state.timearray);
    console.log(this.state.blog._id);
    console.log(this.state.responseText);
    console.log(this.state.responseName);
    let responseText = this.state.responseText;
    let responseName = this.state.responseName;
    const id = this.state.blog._id;
    //   let  responses: [{ response_body: this.state.responses }],
    console.log(id);
    if (this.state.blog._id) {
      API.updateBlogResponse({
        id,
        responseText,
        responseName
      })

        .then(res => {
          console.log(res.data);
          console.log("I ma trying");
          console.log("this is the usertime " + this.state.timearray);
          this.setState({
            responseText: "",
            responseName: ""
          });
          this.loadBlog();
        })

        .catch(err => console.log(err));
    }
  };

  render() {
    const userdata = this.state.blog;

    const { topic, author, synopsis } = userdata;

    return (
      <div style={{ height: "100%" }}>
        <Container>
          <Row>
            <Col size="md-12">
              <h1 style={{ color: "whitesmoke" }}>
                {topic} by {author} created at{" "}
                <span className="text-success"> {this.state.time}</span>
              </h1>
            </Col>
          </Row>

          <Row className="">
            <Col size="md-10 md-offset-1">
              <article>
                <span style={{ color: "red", fontSize: "30px" }}>
                  {" "}
                  Synopsis :
                </span>
                <span className="font-italic font-weight-bold p-2  ">
                  {synopsis}
                </span>
              </article>
            </Col>
          </Row>

          <form className="form-wrapper">
            <input
              value={this.state.responseName}
              onChange={this.handleResponseChange}
              name="responseName"
              placeholder="Your name"
            />

            <TextArea
              value={this.state.responseText}
              onChange={this.handleResponseChange}
              name="responseText"
              placeholder="Enter your response"
            />
            <FormBtn
              disabled={!(this.state.responseName && this.state.responseText)}
              onClick={this.Submitresponse}
            >
              Submit response
            </FormBtn>
          </form>

          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Bloggers</Link>
            </Col>
          </Row>
        </Container>

        <Container>
          <List>
            {this.state.loadresponse.map((item, i) => (
              // console.log(item)
              <ListItem key={i}>
                <span className="font-weight-bold">{item} </span>
                <div>
                  <span className="font-italic">by </span>{" "}
                  <span className="p-1 text-uppercase font-weight-bold text-success ">
                    {this.state.userName[i]}{" "}
                  </span>
                  posted at
                  <span className="text-danger p-2">
                    {moment(this.state.responseTime[i].date).format("LLL")}{" "}
                  </span>
                </div>
              </ListItem>
            ))}{" "}
          </List>
        </Container>
      </div>
    );
  }
}

export default Detail;
