from flask import Flask, send_from_directory, request, render_template, url_for, redirect, flash, jsonify
from flask_login import LoginManager, login_user, login_required, current_user, logout_user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from flask_seasurf import SeaSurf
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from datetime import datetime
from werkzeug.datastructures import FileStorage
import requests
import openai
import json
import warnings
from models import db, User, Message
from forms import EditMessageForm
from blog import Blog

warnings.filterwarnings("ignore", category=DeprecationWarning, module="sqlalchemy.orm.query")

app = Flask(__name__)
csrf = SeaSurf(app)
blog = Blog()
app.config['SECRET_KEY'] = 'dude'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///messages.db'

db.init_app(app)
with app.app_context():
    db.create_all()

login_manager = LoginManager(app)
login_manager.login_view = 'login'

def is_static_file_request():
    return (
        request.path.startswith('/static/') or
        request.path == '/manifest.json' or
        request.path == '/favicon.ico'
    )

def log_visit():
    if not is_static_file_request():
        log_entry = {
            "Timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "IP": request.remote_addr,
            "User-Agent": request.user_agent.string,
            "Method": request.method,
            "URL": request.url,
            "Referrer": request.referrer,
            "Session ID": request.cookies.get('session_id'),
        }
        with open("visit_log.txt", "a") as log_file:
            log_file.write(json.dumps(log_entry) + "\n")
        print("Visit logged with details: ", log_entry)

@app.before_request
def before_request():
    log_visit()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def index():
    log_visit()
    posts = blog.get_all_posts()
    print("All blog posts: ", posts)
    mp4_url1 = url_for('static', filename='img/replicate-prediction-ynt7ljeomvfa5ayn7lwqzss6iy.mp4')
    mp4_url2 = url_for('static', filename='img/replicate-prediction-vcv52ik7jfe2hisfw4bhtz64vm (2).mp4')
    return render_template('index.html', mp4_url1=mp4_url1, mp4_url2=mp4_url2, post=post)

@app.route('/login', methods=['GET', 'POST'])
@csrf.exempt
def login():
    if current_user.is_authenticated:
        return redirect('/dashboard')

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()

        if user is not None and check_password_hash(user.password_hash, password):
            login_user(user)
            print("User logged in: ", username)
            return redirect('/dashboard')
        else:
            flash('Invalid login credentials.')

    return render_template('login.html')

@app.route('/logout')
@login_required
@csrf.exempt
def logout():
    logout_user()
    print("User logged out")
    return redirect('/')

@app.route('/dashboard')
@login_required
def dashboard():
    if current_user.is_authenticated and current_user.is_admin:
        messages = Message.query.all()
        print("Accessed dashboard with messages: ", messages)
        return render_template('view_messages.html', messages=messages)
    else:
        flash('You are not authorized to access this page.')
        return redirect('/')

@app.route('/about')
def about():
    print("Accessed 'About' page")
    return render_template('about.html')

@app.route('/create', methods=['GET', 'POST'])
@login_required
@csrf.exempt
def create(id):
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')
        blog.create_post(title, content)
        print("Created a new post with title: ", title)
        return redirect(url_for('index'))
    return render_template('create.html')

@app.route('/post/<int:id>')
@login_required
@csrf.exempt
def post(id):
    post = blog.get_post(id)
    print("Accessed post with ID: ", id)
    return render_template('post.html', post=post)

@app.route('/update/<int:id>', methods=['GET', 'POST'])
@login_required
@csrf.exempt
def update(id):
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')
        blog.update_post(id, title, content)
        print("Updated post with ID: ", id)
        return redirect(url_for('post', id=id))
    post = blog.get_post(id)
    return render_template('update.html', post=post)

@app.route('/delete/<int:id>')
@login_required
@csrf.exempt
def delete(id):
    blog.delete_post(id)
    print("Deleted post with ID: ", id)
    return redirect(url_for('index'))

@app.route('/404_pic')
def error_pic():
    return send_from_directory('static', 'img/laptop.gif')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static/img', 'koko.jpg')

@app.route('/static/<path:filename>')
def serve_static_files(filename):
    response = send_from_directory('static', filename)
    response.headers['Cache-Control'] = 'public, max-age=604800'
    response.headers['Expires'] = 'Sun, 12 Jun 2023 00:00:00 GMT'
    return response

@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', error_code=404), 404

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/videos')
def videos():
    video_sources = [
        'static/img/trees.mp4',
        'static/img/ai-emergence.mp4',
        'static/img/3-screen-sun.mp4',
        'static/img/future.mp4',
        'static/img/kid.mp4',
        'static/img/peaceful_singularity.mp4',
        'static/img/scyfy.mp4',
        'static/img/simulation.mp4',
        'static/img/singularity.mp4',
        'static/img/spookyAI.mp4',
        'static/img/trees.mp4',
    ]
    print("Rendering videos page")
    return render_template('videos.html', video_sources=video_sources)

@app.route('/message', methods=['POST'])
@csrf.exempt
def message():
    name = request.form.get('name')
    email = request.form.get('email')
    message_text = request.form.get('message')

    message = Message(name=name, email=email, message=message_text)
    db.session.add(message)
    db.session.commit()

    print("Message sent by user: ", name)
    return 'Message sent!'

@app.route('/message/<int:id>/delete', methods=['POST'])
@login_required
@csrf.exempt
def delete_message(id):
    message = Message.query.get(id)
    if message:
        db.session.delete(message)
        db.session.commit()
        flash('Message deleted.')
        print("Message deleted with ID: ", id)
    else:
        flash('Message not found.')
    return redirect('/dashboard')

@app.route('/message/<int:id>/edit', methods=['GET', 'POST'])
@login_required
@csrf.exempt
def edit_message(id):
    message = Message.query.get(id)
    form = EditMessageForm(obj=message)
    if form.validate_on_submit():
        message.name == form.name.data
        message.email == form.email.data
        message.message == form.message.data
        db.session.commit()
        flash('Message updated.')
        print("Message updated with ID: ", id)
        return redirect('/dashboard')
    return render_template('edit_message.html', form=form, message=message)

@app.route('/view_messages')
@login_required
def view_messages():
    messages = Message.query.all()
    print("Viewed all messages")
    return render_template('view_messages.html', messages=messages)

@app.route('/robots.txt')
def serve_robots():
    return send_from_directory(app.static_folder, 'robots.txt')

@app.route('/sitemap.xml')
def serve_sitemap():
    return send_from_directory(app.static_folder,'sitemap.xml')

@app.route('/blogs')
def blogs():
    return render_template('blog.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
