import "./Certificates.css";
import CertificateCard from "./CertificateCard";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";

const certificates = [
  { image: pic1, title: "Innovation Ambassador Training - Advanced Level" },
  { image: pic2, title: "Innovation Ambassador Training - Reskilling" },
  { image: pic3, title: "Innovation Ambassador Training - Foundation Level" },
  { image: pic4, title: "React Bootcamp" },
  { image: pic5, title: "Develop a URL Shortener using Node.js" },
  { image: pic6, title: "Excel Bootcamp" },
  { image: pic7, title: "HTML & CSS Bootcamp" },
  { image: pic8, title: "Node.js Bootcamp" },
  { image: pic9, title: "Generative AI" },
  { image: pic10, title: "Nestle E-learning" },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            image={certificate.image}
            title={certificate.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
