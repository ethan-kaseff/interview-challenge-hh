from app.models import db, Color


def seed_colors():

    color1 = Color(
        hex_code="#FF0066",
    )
    color2 = Color(
        hex_code="#CCFF66",
    )
    color3 = Color(
        hex_code="#CC9966",
    )
    color4 = Color(
        hex_code="#CC00CC",
    )
    color5 = Color(
        hex_code="#CC66CC",
    )
    color6 = Color(
        hex_code="#660099",
    )
    color7 = Color(
        hex_code="#66FFFF",
    )
    color8 = Color(
        hex_code="#003300",
    )

     
  
  
#   
#   
#   
#   "#003300",
#   "#006633",

    db.session.add(color1)
    db.session.add(color2)
    db.session.add(color3)
    db.session.add(color4)
    db.session.add(color5)
    db.session.add(color6)
    db.session.add(color7)
    db.session.add(color8)

    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
