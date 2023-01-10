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
    parsedPosts: null,
    filterdPosts: null,
    selectedPlatform: null,
  };

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map((file) => fetch(file.default).then((res) => res.text()))
    ).catch((err) => console.error(err));
    this.setState((state) => ({ ...state, posts }));

    // parse md to frontmatter (data and content)
    const parsedPosts = posts && posts.map((p) => matter(p));
    this.setState((state) => ({ ...state, parsedPosts }));
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

  filterPosts = (pp) => {
    return this.state.selectedPlatform
      ? pp.filter((p) => p.data.platform === this.state.selectedPlatform)
      : pp;
  };

  render() {
    const { parsedPosts } = this.state;
    const filteredPosts = this.filterPosts(parsedPosts);
    // console.log("Posts: ", parsedPosts, filteredPosts)

    let allPlatforms = [];
    console.log("Platforms: ", allPlatforms);
    parsedPosts &&
      parsedPosts.forEach((p) => {
        if (allPlatforms.indexOf(p.data.platform) === -1) {
          allPlatforms.push(p.data.platform);
        }
      });
    // console.log("Platforms: ", allPlatforms);

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

          <section className="tickerFilter">
            <Row>
              <Col sm="4" className="colTitle" />
              <Col className="colContent">
                <span>Filter by platform</span>
                {allPlatforms.map((p, j) => {
                  const isActive = this.state.selectedPlatform === p;
                  return (
                    <button
                      onClick={() =>
                        isActive
                          ? this.setState({ selectedPlatform: null })
                          : this.setState({ selectedPlatform: p })
                      }
                      key={`platform-filter-${j}`}
                      isActive={isActive}
                      className={isActive ? "tag active" : "tag"}
                    >
                      {p}
                      {isActive && closeIcon}
                    </button>
                  );
                })}
              </Col>
            </Row>
          </section>

          <section className="tickerSection">
            {filteredPosts &&
              filteredPosts.length > 0 &&
              filteredPosts.map((post, id) => (
                <Row key={id}>
                  <div id={post.data.slug} className="jumper" />
                  <Col sm="4" className="colTitle">
                    <h2 onClick={() => this.copyText(post.data.slug)}>
                      {Moment(post.data.date).format("DD MMM YYYY")}
                      {linkIcon}
                    </h2>
                    <p>
                      {post.data.platform}
                      – {post.data.policy}
                    </p>
                  </Col>
                  <Col className="colContent">
                    <ReactMarkdown
                      source={post.content}
                      renderers={this.renderers}
                    />
                    <p class="author">[{post.data.author}]</p>
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

const linkIcon = (
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
);

const closeIcon = (
  <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="10px"
        width="10px"
        version="1.1"
        viewBox="0 0 460.775 460.775"
      >

          <path stroke-linecap="round" stroke-linejoin="round" fill="white" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />{" "}

      </svg>
  </i>
);
