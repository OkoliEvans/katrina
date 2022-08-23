import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log('User:', address);

// check if a user is connected
if (!address) {
  return (
    <div className="landing">
      <h1>👋 Welcome to TranshumanCoin DAO</h1>
      <button onClick={connectWithMetamask} className='btn-hero'>
        Connect wallet
      </button>
    </div>
  )};

  return (
    <div className="landing">
      <h1>👋 Welcome to TranshumanCoin DAO</h1>
      <button className="btn-hero" onClick={useDisconnect}>
        Log out
      </button>
    </div>
  );
};

export default App;
