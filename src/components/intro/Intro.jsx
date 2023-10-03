import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="bkImg">
        <div className="wrapper">
          <p>
            ASI is the <span>First Artificial Super Intelligence</span> token
            built on COREDAO and BINANCE Blockchain
          </p>

          <div className="img">
            <img src="/images/tree.png" alt="" className="tree" />

            <img src="/images/tree_part.png" alt="" className="tree_part" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
