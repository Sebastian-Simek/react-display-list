import ComposerItem from './ComposerItem';


export default function ComposerList({ composers }) {
  return (
    <div>
      {
        composers.map((composer, i) => <ComposerItem key={composer.name + i} {...composer}/>)
      }
    </div>
  );
}
