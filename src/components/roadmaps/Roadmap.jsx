import "./roadmap.scss";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="left">
        <div className="img">
          <div className="horizon"></div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="img">
          <div className="horizon"></div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="img">
          <div className="horizon"></div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="img">
          <div className="horizon"></div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="horizon-d"></div>
      </div>

      <div className="right">
        <div className="card">
          <div className="head">PHASE 1</div>
          <div className="body">
            <ul>
              <li>Community Engagement (Telegram, Twitter)</li>
              <li>Website Launch</li>
              <li>Airdrop activities</li>
              <li>Fair launch of ASI Core Token</li>
              <li>Listing of DEX (Icecreamswap, Shadowswap,Lfgswap)</li>
              <li>Liduidity provider and locking</li>
              <li>Burning of 192Billion (32%)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">PHASE 2</div>
          <div className="body">
            <ul style={{ listStyle: "disc !important" }} className="list">
              <li>Applying for CoinGecko and coinmarketcap listing</li>
              <li>Smart Contract Auditing</li>
              <li>Burning of 192Billion (32%)</li>
              <li>Marketing</li>
              <li>Staking Launch</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="head">PHASE 3</div>
          <div className="body">
            <ul>
              <li>Partnership Announcement</li>
              <li>Centralized exchange listing</li>
              <li>More advertisment and promotion</li>
              <li>ASI Core NFT Launch</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="head">PHASE 4</div>
          <div className="body">
            <ul>
              <li>More Centralized exchange listing</li>
              <li>Roadmap review</li>
              <li>And many more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
