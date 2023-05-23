<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/spielerx/web3-backend">
    <img src="https://hardhat.org/_next/static/media/hardhat-logo-dark.484eb916.svg" alt="Logo" width="165" height="41">
  </a>

<h3 align="center">Web3 Backend with FundMe contract</h3>

  <p align="center">
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/spielerx/web3-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/spielerx/web3-backend/issues">Request Feature</a>
    <br />
    <br />
    <a href="https://github.com/spielerx/web3-client"><strong>Explore the client repo »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It is a GitHub project that includes fully tested smart contract on top of the hardhat development environment. It allows frontend application to interact with the FundMe contract, enabling seamless integration of fundraising capabilities into decentralized applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
* ![Chainlink](https://img.shields.io/badge/Chainlink-375BD2?style=for-the-badge&logo=Chainlink&logoColor=white)
* ![Chai](https://a11ybadges.com/badge?logo=chai)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites


Install yarn package manager globally
* yarn
  ```sh
  npm install yarn -g
  ```

### Installation

1. Register on Alchemy and get a Sepolia testnet rpc url [https://www.alchemy.com/](https://www.alchemy.com/)
2. Get a free ETHERSCAN api key [https://etherscan.io/](https://etherscan.io/)
3. Clone the repo
   ```sh
   git clone https://github.com/spielerx/web3-backend.git
   ```
4. Install node_modules
   ```sh
   yarn install
   ```
5. Create `.env` file with variables
   ```env
   SEPOLIA_RPC_URL=ENTER YOUR SEPOLIA RPC URL
   PRIVATE_KEY=ENTER YOUR METAMASK PRIVATE KEY
   ETHERSCAN_API_KEY=ENTER YOUR ETHERSCAN API KEY
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Run tests
```sh
yarn test
```

Deploy contracts
```sh
yarn hardhat deploy --tags all
```

Start node
```sh
yarn hardhat node
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Hardhat Simple Storage
- [ ] Hardhat Smart Contracts
    - [x] Fund Me
    - [ ] Lottery

See the [open issues](https://github.com/spielerx/web3-backend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Roman Kyryliuk - [@spieler_x](https://twitter.com/spieler_x)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Patrick Collins](https://www.youtube.com/c/patrickcollins)
* [freeCodeCamp.org](https://www.freecodecamp.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/spielerx/web3-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/spielerx/web3-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/spielerx/web3-backend.svg?style=for-the-badge
[forks-url]: https://github.com/spielerx/web3-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/spielerx/web3-backend.svg?style=for-the-badge
[stars-url]: https://github.com/spielerx/web3-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/spielerx/web3-backend.svg?style=for-the-badge
[issues-url]: https://github.com/spielerx/web3-backend/issues
[license-shield]: https://img.shields.io/github/license/spielerx/web3-backend.svg?style=for-the-badge
[license-url]: https://github.com/spielerx/web3-backend/blob/master/LICENSE.txt