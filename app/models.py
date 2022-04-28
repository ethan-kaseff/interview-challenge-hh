from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Color(db.Model):
    __tablename__ = 'colors'

    id = db.Column(db.Integer, primary_key=True)
    hex_code = db.Column(db.String(7), nullable=False)