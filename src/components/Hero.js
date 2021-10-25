import venom from "../images/venom.jpg";
import logo from "../images/logo1.svg";

const Hero = ({ changeHandler }) => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="heroImg">
                <img src={venom} alt="hero" />
            </div>
            <div className="search">
                <input
                    className="search-term"
                    type="text"
                    placeholder="Search..."
                    onChange={changeHandler}
                />
            </div>
            <div className="htitle">ALL WHAT YOU WANT!</div>
        </div>
    );
};

export default Hero;
