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

    db.session.add(color1)
    db.session.add(color2)
    db.session.add(color3)
    db.session.add(color4)
    db.session.add(color5)
    db.session.add(color6)
    db.session.add(color7)
    db.session.add(color8)

    color_list = [
        '#567b2b',
        '#4f0150',
        '#1d7621',
        '#64260e',
        '#e00503',
        '#55020f',
        '#089142',
        '#a33b6d',
        '#863a4b',
        '#6d1ff2',
        '#8ee832',
        '#f96bb7',
        '#a4f621',
        '#72ce09',
        '#c1f0b4',
        '#483cb2',
        '#7df242',
        '#bce1a3',
        '#bc90d3',
        '#3b7723',
        '#85b030',
        '#85e2ef',
        '#a35578',
        '#89c16d',
        '#2af5cc',
        '#c9ebcc',
        '#d56295',
        '#dd3de5',
        '#68b7ad',
        '#bdbef8',
        '#176b3f',
        '#e0e672',
        '#07acc8',
        '#7517ce',
        '#206402',
        '#b44a08',
        '#fa70ca',
        '#5bd7ed',
        '#f97276',
        '#3fde7c',
        '#d13e64',
        '#b4bfe3',
        '#dbb86c',
        '#2169d0',
        '#104d27',
        '#a7fac8',
        '#5d1fed',
        '#b7482e',
        '#91302f',
        '#5b49c4',
        '#4b0b83',
        '#71f979',
        '#5a1a3e',
        '#c1fb84',
        '#0a9a27',
        '#9ae2de',
        '#845534',
        '#f7e6ba',
        '#ab9137',
        '#7d6e2f',
        '#559bd3',
        '#430d8c',
        '#dba82e',
        '#f369ab',
        '#ef7ca2',
        '#372e2b',
        '#efd1e7',
        '#88db14',
        '#ace281',
        '#3652a2',
        '#ecbe72',
        '#dc2b32',
        '#c146bc',
        '#df9bc0',
        '#38d466',
        '#1208b8',
        '#4e6313',
        '#fedd82',
        '#c15d19',
        '#f71c79',
        '#20cd2c',
        '#557ee2',
        '#689ee1',
        '#8feada',
        '#828c8d',
        '#3bff2f',
        '#5884c7',
        '#50d1cd',
        '#0451a6',
        '#e811a8',
        '#02185a',
        '#ee9234',
        '#ae7570',
        '#2ce04d',
        '#1b0f35',
        '#7a597d',
        '#37dffb',
        '#dcbda9',
        '#fe5408',
        '#047bfb',
    ]

    for color in color_list:
        color_el = Color(hex_code=color)
        db.session.add(color_el)


    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
