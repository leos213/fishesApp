import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #0e8a8a;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

// function showCars() {
//   return getFishs();
// }

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Fishes App 🐠</h1>
      <Button>Click see all Fishes</Button>
    </div>
  );
};

export default Home;

// onClick={showCars()}
