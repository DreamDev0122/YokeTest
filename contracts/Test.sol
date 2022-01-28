// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract YokeNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    uint256 private maxSupply = 20;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("YokeNFT", "YOKE") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmRAr1bnM31kKLu6z8JcHpXj8owVknfCUWaLxtpr8S4ewy/";
    }

    function mint(address to) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId < maxSupply, "Max Limit");
        _safeMint(to, tokenId);
    }
    
    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return string(abi.encodePacked(super.tokenURI(tokenId), ".json"));
    }
}