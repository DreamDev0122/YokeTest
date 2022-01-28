import MintJson from "../../ABI/Test.json";
import "./css/Mint.css";

const Mint = () => {

    const BuyNFT = async () => {

        if (window.web3.__isMetaMaskShim__) {
            alert("Please connect wallet!");
            return;
        }

        const networkId = await window.web3.eth.net.getId();
        const networkData = MintJson.networks[networkId];
        if (networkData) {
            const MintContract = new window.web3.eth.Contract(
                MintJson.abi,
                networkData.address
            );

            window.web3.eth.getAccounts().then((accounts, err) => {
                MintContract.methods.mint(
                    accounts[0]
                ).send({ from: accounts[0] })
                    .once('transactionHash', (hash) => { alert("Successfully minted!"); window.location.reload(); console.log(hash); })
                    .once('receipt', (receipt) => { console.log(receipt); })
                    .once('error', (error) => { window.location.reload(); console.log(error); });
            });
        }
    }

    return (
        <>
            <div className="w-100 pt-5 d-flex justify-content-center position-relative">
                <div className="PageMintMain d-flex justify-content-left ">
                    <div className="PageMintTitle col-6 d-flex flex-column gap-5">
                        <span className="MintTitle text-white">
                            Random NFT Name
                        </span>
                        <span className="MintSubTitle text-white">
                            This is a random message.
                        </span>
                        <button className="MintBtn text-white py-2 d-flex justify-content-center align-items-center" onClick={() => { BuyNFT() }}>
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="NFTView position-absolute d-flex justify-content-center align-items-center">
                    <span>Put your own NFT here</span>
                </div>
            </div>
        </>
    );
}

export default Mint;