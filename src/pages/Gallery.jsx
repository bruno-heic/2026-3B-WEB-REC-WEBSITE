import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.png";
import photo8 from "../assets/photo8.png";
import photo9 from "../assets/photo9.png";
import photo10 from "../assets/photo10.png";

const photos = [
  {
    id: 1,
    src: photo1,
  },
  {
    id: 2,
    src: photo2,
  },
  {
    id: 3,
    src: photo3,
  },
  {
    id: 4,
    src: photo4,
  },
  {
    id: 5,
    src: photo5,
  },
  {
    id: 6,
    src: photo6,
  },
  {
    id: 7,
    src: photo7,
  },
  {
    id: 8,
    src: photo8,
  },
  {
    id: 9,
    src: photo9,
  },
  {
    id: 10,
    src: photo10,
  },
];
export default function Gallery() {
  return (
    <div style={{ paddingLeft: 180, paddingRight: 240 }}>
      <div>
        <h1 className="title-contact">Photo</h1>
        <h1 className="title-contact-1">Gallery</h1>
      </div>
      <div className="photo-container">
        {photos.map((photo) => {
          return (
            <div className="photo" key={photo.id}>
              <img src={photo.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
