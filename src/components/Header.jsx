/* eslint-disable react/prop-types */
export default function Header({ conditions }) {
  return (
    <h1>
      {conditions.condition} Temperature: {conditions.temperature}
    </h1>
  );
}
