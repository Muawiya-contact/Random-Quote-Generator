const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Do not let what you cannot do interfere with what you can do.",
    author: "John Wooden",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The ink of the scholar is more sacred than the blood of the martyr.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Acquire knowledge and teach it to the people.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Whoever shows you the best of manners, be kind to them in return.",
    author: "Imam Ali (AS)",
  },
  {
    text: "He who does not thank people has not thanked Allah.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Knowledge is the life of the heart.",
    author: "Imam Ali (AS)",
  },
  {
    text: "The best of people are those that bring most benefit to the rest of mankind.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "The seeking of knowledge is obligatory for every Muslim.",
    author: "Prophet Muhammad (PBUH)",
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = randomQuote.text;
  document.getElementById("author").innerText = `— ${randomQuote.author}`;
}

function copyQuote() {
  const quoteText = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(quoteText)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
}

function showDailyQuote() {
  const dailyQuote = quotes[0];  // Show the first quote of the list as "Inspiration of the Day"
  document.getElementById("daily-quote").innerText = `"${dailyQuote.text}" — ${dailyQuote.author}`;
}

// Call the daily quote function when the page loads
window.onload = showDailyQuote;
