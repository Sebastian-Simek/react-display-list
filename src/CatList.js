import CatItem from './CatItem';

export default function CatList({ cats }) {
  return (
    <div>
      {
        cats.map((cat, i) => <CatItem cat={cat} key={cat + i} />)
      }
    </div>
  );
}
