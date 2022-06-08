import ComposerItem from './ComposerItem';


export default function ComposerList({ composers }) {
  return (
    <div className='composer-list'>
      {
        composers.map((composer, i) => <ComposerItem key={composer.name + i} {...composer}/>)
      }
    </div>
  );
}
