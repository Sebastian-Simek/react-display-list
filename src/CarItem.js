
export default function CarItem({ name, manufacturer, country }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Country of Origin: {country}</p>        
    </div>
  );
}
