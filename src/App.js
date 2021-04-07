import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "b58607a343c1b2aa59b29cb6dd60d7e52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        //prettier-ignore
        if (command === 'newHeadlines') {
          
            setNewArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Nihal's News App</h1>
      <p>Click the microphone button and say "Get news from BBC-news"</p>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
