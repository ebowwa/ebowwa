from flask_login import current_user
from main import db

def load_user(user_id):
    return db.session.query(User).get(int(user_id))
