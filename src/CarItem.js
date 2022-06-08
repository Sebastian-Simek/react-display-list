
export default function CarItem({ name, manufacturer, country }) {
  return (
    <div className='car'>
      <p>Name: {name}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Country of Origin: {country}</p>        
    </div>
  );
}
