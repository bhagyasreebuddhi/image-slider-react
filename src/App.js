import "./styles.css";
import ImageSlider from "./ImagesSlider";
export default function App() {
  const images = [
    { url: "./slide-1.jpg", title: "beach" },
    { url: "./slide-2.jpg", title: "Ocean" },
    { url: "./slide-3.jpg", title: "city" },
    { url: "./slide-4.jpg", title: "forest" },
    { url: "./slide-5.jpg", title: "sky" }
  ];
  return (
    <div className="App">
      <h1>Imageslider using React JS</h1>
      <div className="slider">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}
