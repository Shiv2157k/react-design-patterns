// import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
// import { withUser } from "./withUser";
// import { UserInfoForm } from "./UserInfoForm";


// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
  return (
    // <UserInfoWrapped a={1} b="Hello" c={{ name: "Shiv" }}></UserInfoWrapped>
    // <UserInfoWithLoader />
    // <UserInfo />
    <>
      <UserInfo userId="123" />
      <ProductInfo productId="1234" />

    </>
  );

}

// export default App;
