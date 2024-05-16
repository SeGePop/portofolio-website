import React from "react";
import "./styles.css";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random number generator
function getRandomColor() {
  const colors = [
    "#FFC0CB", // Pink
    "#FFD700", // Gold
    "#00FFFF", // Cyan
    "#FFA07A", // Light Salmon
    "#87CEFA", // Light Sky Blue
    "#FF69B4", // Hot Pink
    "#00FF7F", // Spring Green
    "#ADD8E6", // Light Blue
    "#F08080", // Light Coral
    "#90EE90", // Light Green
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// get random color code

const quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
];

class RandomQuoteGenerator_App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
    if (quotes.length === 0) {
      this.state = {
        quote: quotes[0].quote,
        author: quotes[0].author,
      };
    } else {
      const x = getRandomNumber(0, quotes.length);
      this.state = {
        quote: quotes[x]?.quote || quotes[0]?.quote,
        author: quotes[x]?.author || quotes[0]?.quote,
      };
    }
  }

  handleChange = () => {
    let x = getRandomColor();
    document.documentElement.style.setProperty("--background-color", x);
    const randomNumber = getRandomNumber(0, quotes.length);
    if (randomNumber >= quotes.length) {
      this.setState({
        quote: quotes[0].quote,
        author: quotes[0].author,
      });
    } else {
      this.setState({
        quote: quotes[randomNumber]?.quote || "No quotes available",
        author: quotes[randomNumber]?.author || "Unknown",
      });
    }
  };

  render() {
    return (
      <div className="RandomQuoteGenerator_App">
        <div className="quote-box" id="quote-box">
          <div className="social-media-buttons">
            
          </div>
          <div className="text" id="text">
            {this.state.quote}
          </div>
          <div className="author" id="author">
            {this.state.author}
          </div>
          <button
            className="new-quote"
            id="new-quote"
            onClick={this.handleChange.bind(this)}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
export default function RandomQuoteGenerator() {
  return <RandomQuoteGenerator_App />;
}
