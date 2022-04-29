from app.models import db, Color
from flask import Flask
from flask_migrate import Migrate
import os
import re
from .seeds import seed_commands

# Initialize App
app = Flask(__name__)

# Config 
# uri = os.getenv("DATABASE_URL")  # or other relevant config var
# if uri.startswith("postgres://"):
#     uri = uri.replace("postgres://", "postgresql://", 1)
# rest of connection code using the connection string `uri`

app.config.from_mapping({
    'SQLALCHEMY_DATABASE_URI': os.environ.get('DATABASE_URL'),
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})

# Give us seed command
app.cli.add_command(seed_commands)

@app.route('/colors', methods=['GET'])
def get_colors():
    colors = Color.query.order_by(Color.hex_code).all()

    return { 'colors': [color.hex_code for color in colors]}

# Connect App with database
db.init_app(app)

# Migrate using Flask/Alembic
Migrate(app, db)