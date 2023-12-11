from flask import Flask, jsonify
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

# Definirea modelului de date
Base = declarative_base()

class CelestialObject(Base):
    __tablename__ = 'celestial_objects'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True, nullable=False)
    temperature = Column(Float)
    details = Column(String)
    speed = Column(Float)

# Configurarea conexiunii la baza de date (în acest caz, SQLite)
DATABASE_URL = "sqlite:///celestial_objects.db"
engine = create_engine(DATABASE_URL)

# Crearea tabelei în baza de date
Base.metadata.create_all(bind=engine)

# Crearea unei sesiuni pentru a interacționa cu baza de date
Session = sessionmaker(bind=engine)
session = Session()

# Ruta pentru a obține toate obiectele cerești
@app.route('/api/celestial_objects', methods=['GET'])
def get_celestial_objects():
    celestial_objects = session.query(CelestialObject).all()
    data = [
        {
            "id": obj.id,
            "name": obj.name,
            "temperature": obj.temperature,
            "details": obj.details,
            "speed": obj.speed
        }
        for obj in celestial_objects
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
