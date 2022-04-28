from flask.cli import AppGroup
from app.seeds.colors import seed_colors, undo_colors

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_colors()


@seed_commands.command('undo')
def undo():
    undo_colors()
