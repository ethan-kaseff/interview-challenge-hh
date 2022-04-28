from app.models import db
from flask import Flask
from flask_migrate import Migrate
import os
from .seeds import seed_commands

# Initialize App
app = Flask(__name__)

# Config 
app.config.from_mapping({
    'SQLALCHEMY_DATABASE_URI': os.environ.get('DATABASE_URL'),
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})

# Give us seed command
app.cli.add_command(seed_commands)

# Connect App with database
db.init_app(app)

# Migrate using Flask/Alembic
Migrate(app, db)