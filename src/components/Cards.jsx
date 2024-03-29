import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ plaj }) {
  return (
    <Col className="my-2">
      <Card className="h-100 border-0 shadow" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
        <Card.Img
          src={plaj.image}
          alt="..."
          position="top"
          className=""
          style={{ height: 250, borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#007bff" }}>{plaj.ADI}</Card.Title>
          <p className="text-muted">{plaj.MAHALLE}-{plaj.ILCE}</p>
          <Card.Text>
            <p style={{ color: "#6c757d" }}>Uzunluk: <span style={{ color: "#343a40" }}>{plaj.PLAJ_UZUNL}</span></p>
            <p style={{ color: "#6c757d" }}>Genişlik: <span style={{ color: "#343a40" }}>{plaj.ORTALAMA_G}</span></p>
            <p style={{ color: "#6c757d" }}>Soyunma Kabini: <span style={{ color: "#343a40" }}>{plaj.SOYUNMA_KA} adet</span></p>
            <p style={{ color: "#6c757d" }}>Duş: <span style={{ color: "#343a40" }}>{plaj.DUS_ADET} adet</span></p>
            <p style={{ color: "#6c757d" }}>Tuvalet: <span style={{ color: "#343a40" }}>{plaj.TUVALET_AD} adet</span></p>
            <p style={{ color: "#6c757d" }}>Otopark: <span style={{ color: "#343a40" }}>{plaj.OTOPARK_DU} adet</span></p>
          </Card.Text>
          <div className="w-100">
            <iframe
              frameBorder="0"
              style={{ border: 0, borderRadius: 10 }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCATKrqYuD0JSQA5_BvSIyh3hEXRM1oV9Y&q=${plaj.ADI}`}
              allowFullscreen>
            </iframe>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;

