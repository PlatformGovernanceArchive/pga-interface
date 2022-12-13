import React from "react";
import Moment from "moment";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// Importing bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as Strings from "../constants";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("../posts", false, /\.md$/))
  .sort()
  .reverse();

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
class Ticker extends React.Component {
  state = {
    posts: null,
  };

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map((file) => fetch(file.default).then((res) => res.text()))
    ).catch((err) => console.error(err));
    this.setState((state) => ({ ...state, posts }));
  }

  renderers = {
    link: ({ href, children }) => {
      if (href.indexOf("http") === 0) {
        return (
          <a href={href} target="blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      } else {
        return <a href={href}>{children}</a>;
      }
    },
    heading: ({ level, children }) => {
      const HeadingTag = "h" + (level + 2);
      return <HeadingTag>{children}</HeadingTag>;
    },
  };

  copyText = (id) => {
    const url =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "#" +
      id;
    navigator.clipboard.writeText(url);
    console.log("Copied URL", url);
  };

  render() {
    const { posts } = this.state;

    const parsedPosts = posts && posts.map((p) => matter(p));
    // posts && console.log("posts", posts , parsedPosts);

    return (
      <main className="pageContent">
        <Container>
          <section id="about">
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.Intro_Ticker_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.Intro_Ticker_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>

          <section className="tickerSection">
            {parsedPosts &&
              parsedPosts.length > 0 &&
              parsedPosts.map((post, id) => (
                <Row key={id}>
                  <div id={post.data.slug} className="jumper" />
                  <Col sm="4" className="colTitle">
                    <h2 onClick={() => this.copyText(post.data.slug)}>
                      {Moment(post.data.date).format("DD MMM YYYY")}
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-link"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                            fill="white"
                          />
                          <path
                            d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </h2>
                    <p>{post.data.platform}</p>
                  </Col>
                  <Col className="colContent">
                    <ReactMarkdown
                      source={post.content}
                      renderers={this.renderers}
                    />
                  </Col>
                </Row>
              ))}
          </section>
        </Container>
      </main>
    );
  }
}
export default Ticker;
