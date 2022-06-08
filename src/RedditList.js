import RedditItem from './RedditItem';

export default function RedditList({ reddit }) {
  return (
    <div className='reddit-list'>
      {
        reddit.data.children.map((redd, i) => <RedditItem 
          key={i}
          {...redd.data}/>)
      }
    </div>
  );
}
