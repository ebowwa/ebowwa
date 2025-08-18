import sqlite3
from datetime import datetime

class Blog:
    def __init__(self, db_path='blog.db'):
        self.conn = sqlite3.connect(db_path, check_same_thread=False)
        self.cursor = self.conn.cursor()
        self.create_table()

    def create_table(self):
        query = """
        CREATE TABLE IF NOT EXISTS Blog (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
        """
        self.cursor.execute(query)

    def create_post(self, title, content):
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = """
        INSERT INTO Blog (title, content, created_at, updated_at)
        VALUES (?, ?, ?, ?)
        """
        self.cursor.execute(query, (title, content, now, now))
        self.conn.commit()

    def get_all_posts(self):
        query = "SELECT * FROM Blog ORDER BY created_at DESC"
        return self.cursor.execute(query).fetchall()

    def get_post(self, id):
        query = "SELECT * FROM Blog WHERE id = ?"
        return self.cursor.execute(query, (id,)).fetchone()

    def update_post(self, id, title, content):
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = """
        UPDATE Blog
        SET title = ?, content = ?, updated_at = ?
        WHERE id = ?
        """
        self.cursor.execute(query, (title, content, now, id))
        self.conn.commit()

    def delete_post(self, id):
        query = "DELETE FROM Blog WHERE id = ?"
        self.cursor.execute(query, (id,))
        self.conn.commit()
