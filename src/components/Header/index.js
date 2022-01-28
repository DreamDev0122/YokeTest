import React, { useEffect, useState } from "react";
import "./css/Header.css";
import Fortmatic from "fortmatic";
import Web3 from "web3";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
    const [address, setAddress] = useState();

    useEffect(() => {
        walletConnect();
    }, []);

    const walletConnect = () => {
        const customNodeOptions = {
            rpcUrl: 'https://rpc-mumbai.maticvigil.com/v1/0df9f3ce1a0a2ae7273814360d18ed041149d518', // your own node url
            chainId: 80001
        }
        const fm = new Fortmatic('pk_test_17BB7A45E7859720', customNodeOptions);
        window.web3 = new Web3(fm.getProvider());
        window.web3.eth.getAccounts((error, accounts) => {
            if (error) throw error;
            let account = accounts[0].slice(0, 7) + "..." + accounts[0].slice(-4);
            setAddress(account);
        });
    }

    return (
        <>
            <div className="PageHeader1">
                <div className="w-100 d-flex justify-content-center">
                    <div className=" w-spec d-flex py-4 px-4">
                        <div className="PageLogo">
                            <img className="" src="assets/Logo.svg" alt="" />
                        </div>
                        <span className="SpinFlex"></span>
                        <div className="PageHeaderItems d-flex justify-content-center align-items-center text-white">
                            <span>HOME</span>
                            <span>ABOUT</span>
                            <span>FAQ</span>
                        </div>
                        <span className="SpinFlex"></span>
                        <div className="">
                            <button className="WalletBtn p-2" onClick={() => walletConnect()}>{address ? address : "Connect Wallet"}</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="PageHeader2">
                <div className="PageHeader w-100 d-flex justify-content-center">
                    <span className="SpinFlex" />
                    <button type="button" className="TogglesBtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><AlignRightOutlined className="ToggleBtn text-white" /></button>
                    <div className="offcanvas offcanvas-end bg-black" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="text-white ToggleCloseBtn" data-bs-dismiss="offcanvas" aria-label="Close"><CloseOutlined className="text-white h1" /></button>
                        </div>
                        <div className="ToggleDrop offcanvas-body d-flex flex-column align-items-end gap-5">
                            <div className="ToggleItem gap-3 d-flex flex-column align-items-end">
                                <span>
                                    HOME
                                </span>
                                <span>
                                    ABOUT
                                </span>
                                <span>
                                    FAQ
                                </span>
                            </div>
                            <button className="ToggleWallet py-2" onClick={() => walletConnect()}>{address ? address : "Connect Wallet"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;