import "./loading.scss";
import gif from "../../assets/food-tray.gif";

const Loading = () => {
  setTimeout(()=>{},5000)
  return (
    <div className="loading">
      <div className="img">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Loading;
