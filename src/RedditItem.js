

export default function RedditItem({
  author,
  subreddit,
  title,
  selftext,
  num_comments,

}) {
  return (
    <div className="reddit">
      <p>{author}</p>
      <p>{subreddit}</p>
      <p>{title}</p>
      <p>{selftext}</p>
      <p>{num_comments}</p>

    </div>
  );
}
