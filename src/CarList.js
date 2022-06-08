import CarItem from './CarItem';

export default function CarList({ cars }) {
  return (
    <div>
      {
        cars.map((car, i) => <CarItem key={car.name + i} {...car}/>)  
      }
    </div>
  );
}

