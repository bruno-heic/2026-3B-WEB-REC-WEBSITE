export default function Contacts() {
  return (
    <div>
      <div className="info-container">
        <div style={{ paddingLeft: 180 }}>
          <div>
            <h1 className="title-contact">Contact</h1>
            <h1 className="title-contact-1">Information</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 50,
              marginTop: 34,
            }}
          >
            <div>
              <h4 className="title-info">Company name</h4>
              <p className="info">1234 Sample Street Austin Texas 76401</p>
            </div>
            <h4 className="title-info">512.333.2222</h4>
            <p className="info">sampleemail@gmail.com</p>
          </div>
          <div className="contact-link">
            <p>CONTACT US</p>
          </div>
        </div>
        <img src="src\assets\location.png" alt="" srcset="" />
      </div>
    </div>
  );
}
