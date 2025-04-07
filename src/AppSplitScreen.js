import { SplitScreen } from "./SplitScreen";


const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'yellow' }}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'violet' }}>{message}</p>;
}
function AppSplitScreen() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Shiv" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
  );
}

// export default AppSplitScreen;
