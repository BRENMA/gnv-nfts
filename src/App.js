import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          good news ventures
        </h1>

        <iframe          
          className="claimNft"
          title="claim"
          src="https://gateway.ipfscdn.io/ipfs/QmbqEq5EQLx1aPurZFreM246fsKeawfpKDT8uzguAHAikr/erc721.html?contract=0x4AE3e24548d7eB4F4e0F722D594E9A68737b60c5&chainId=137&theme=system&primaryColor=blue"
        ></iframe>
      </main>
    </div>
  );
}
