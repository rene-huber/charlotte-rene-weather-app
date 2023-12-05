/* eslint-disable react/prop-types */
export default function Header({ condition, temperature }) {
  return (
    <h1 className="header">
    {condition} {temperature}°C
    </h1>
  );
}
