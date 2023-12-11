from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Definirea modelului de date
Base = declarative_base()

class CelestialObject(Base):
    __tablename__ = 'celestial_objects'  # Fix the typo here
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

# Exemplu de adăugare a planetelor și soarelui în baza de date
celestial_objects_data = [
    {"name": "Mercury", "temperature": 167, "details": "Small rocky planet", "speed": 47.87},
    {"name": "Venus", "temperature": 464, "details": "Thick atmosphere, volcanic activity", "speed": 35.02},
    {"name": "Earth", "temperature": 15, "details": "Home planet", "speed": 29.78},
    {"name": "Mars", "temperature": -80, "details": "Red planet, thin atmosphere", "speed": 24.07},
    {"name": "Jupiter", "temperature": -145, "details": "Gas giant, largest planet", "speed": 13.07},
    {"name": "Saturn", "temperature": -178, "details": "Ringed planet", "speed": 9.68},
    {"name": "Uranus", "temperature": -224, "details": "Ice giant, tilted on its side", "speed": 6.80},
    {"name": "Neptune", "temperature": -218, "details": "Ice giant", "speed": 5.43},
    {"name": "Sun", "temperature": 5505, "details": "G-type main-sequence star", "speed": 0},
]

for obj_data in celestial_objects_data:
    celestial_object = CelestialObject(**obj_data)
    session.add(celestial_object)

session.commit()