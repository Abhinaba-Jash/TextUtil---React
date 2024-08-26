import PropTypes from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let words = text.split(" ").filter((element) => {
    return element.length !== 0;
  }).length;
  let characters = text.length;
  let sentences = text.split(".").length - 1;
  let paragraphs;
  let speakingTime;
  let readingTime;
  let mode = props.mode;

  if (words == 1) {
    speakingTime = 0;
    readingTime = 0;
    paragraphs = 0;
  } else {
    speakingTime = words * 0.0067;
    readingTime = words * 0.0033;
    paragraphs = text.split("\n").filter((element) => {
      return element.length !== 0;
    }).length;
  }

  const onChange = (event) => {
    // console.log(event);
    setText(event.target.value);
  };
  const toUppercase = () => {
    if (text == "") {
      props.showAlert("Enter some text first.", "warning");
    } else {
      setText(text.toUpperCase());
    }
  };
  const toLowercase = () => {
    if (text == "") {
      props.showAlert("Enter some text first.", "warning");
    } else {
      setText(text.toLowerCase());
    }
  };
  const toClear = () => {
    if (text == "") {
      props.showAlert("Enter some text first.", "warning");
    } else {
      props.showAlert("All text is cleared.", "success");
      setText("");
    }
  };
  const toCopy = () => {
    if (text == "") {
      props.showAlert("Enter some text first.", "warning");
    } else {
      navigator.clipboard.writeText(text).then(() => {
        props.showAlert("Text copied to clipboard.", "success");
      });
    }
  };
  const toClearSpaces = () => {
    if (text == "") {
      props.showAlert("Enter some text first.", "warning");
    } else {

      setText(text.replace(/\s+/g,' '));
    }
  };

  return (
    <>
      <div className="container text-center" style={{marginTop: '80px'}}>
        <span>
          <h2>Enter some text below to analyze</h2>
        </span>
        <textarea style={{outline: 'none'}}
          onChange={onChange}
          value={text}
          rows="5"
          className="container my-2"
          name="text"
          id="text-area"
          placeholder="Enter your text here..."
        ></textarea>
        <button className="btn btn-primary" onClick={toUppercase}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={toLowercase}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary "
          style={{ marginRight: "4px" }}
          onClick={toClear}
        >
          Clear text
        </button>
        <button
          className="btn btn-primary mr-1"
          style={{ marginRight: "4px" }}
          onClick={toCopy}
        >
          Copy text
        </button>
        <button className="btn btn-primary" onClick={toClearSpaces}>
          Clear extra spaces
        </button>

        <h2 className="my-4">Your text summary</h2>
        <span>
          {words} words and {characters} characters. <br />
          {sentences} sentence and {paragraphs} paragraphs. <br />
          Speaking time: {speakingTime} minutes. <br />
          Reading time: {readingTime} minutes.
        </span>
        <h2 className="my-4">Preview</h2>
        <p>{text === "" ? "Enter your text to preview" : text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  title: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  title: "Enter text below",
};
