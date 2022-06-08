

export default function ComposerItem({ name, era, hits }) {
  return (
    <div className='composer'>
      <h3>{name}</h3>
      <p>{era}</p>
      {
        hits.map((hit, i) => <div key={hit.Classification + i}>{hit.pieceName}: {hit.Classification}</div>)
      }
        
    </div>
  );
}
