function search(platform) {
  let query = "";

  switch (platform) {
    case "google":
      query = document.getElementById("google-query").value;
      window
        .open(
          `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          "_blank"
        )
        .focus();
      break;
    case "duckduckgo":
      query = document.getElementById("duckduckgo-query").value;
      window
        .open(
          `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
          "_blank"
        )
        .focus();
      break;
    case "amazon":
      query = document.getElementById("amazon-query").value;
      window
        .open(
          `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}`,
          "_blank"
        )
        .focus();
      break;
    case "youtube":
      query = document.getElementById("youtube-query").value;
      window
        .open(
          `https://www.youtube.com/results?search_query=${encodeURIComponent(
            query
          )}`,
          "_blank"
        )
        .focus();
      break;
    case "github-repo":
      query = document.getElementById("github-repo-query").value;
      window
        .open(
          `https://github.com/search?q=${encodeURIComponent(
            query
          )}&type=repositories`,
          "_blank"
        )
        .focus();
      break;
    case "chatgpt":
      query = document.getElementById("chatgpt-query").value;
      window.open(
        `https://chat.openai.com/?q=${encodeURIComponent(query)}`,
        "_blank"
      );
      break;
    default:
      console.error("Unknown platform");
  }
}
