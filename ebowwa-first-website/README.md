# Personal Site v1

My first personal website built with Flask and Python. Originally developed on Replit and later migrated to GitHub.

## Overview

This is a full-featured Flask web application that served as my introduction to web development. It includes user authentication, a blog system, messaging functionality, and various multimedia features.

## Features

- **User Authentication**: Login/registration system with admin and regular user roles
- **Blog System**: Create, read, update, and delete blog posts
- **Message System**: Contact form with message storage and admin dashboard
- **Multimedia Content**: Video gallery and dynamic content rendering
- **Security**: CSRF protection, password hashing, and secure session management

## Tech Stack

- **Backend**: Flask (Python)
- **Database**: SQLite with SQLAlchemy ORM
- **Authentication**: Flask-Login
- **Forms**: Flask-WTF with CSRF protection
- **Frontend**: HTML templates with Jinja2
- **Additional**: QR code generation, OpenAI integration

## Project Structure

```
├── src/
│   ├── main.py          # Main Flask application
│   ├── models.py         # Database models
│   ├── forms.py          # Form definitions
│   ├── blog.py           # Blog functionality
│   ├── database.py       # Database configuration
│   └── qr.py             # QR code utilities
├── templates/            # HTML templates
├── static/               # Static assets (CSS, JS, images)
├── requirements.txt      # Python dependencies
└── error.tpl            # Error template (see note below)
```

## Installation

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run the application: `python src/main.py`
4. Access at `http://localhost:3000`

## Notes

### About error.tpl

The `error.tpl` file is a standalone HTML error page from the original Replit environment. It's not integrated with the Flask application because:

1. **Wrong location**: Flask expects templates in the `templates/` directory, not the root
2. **Wrong extension**: Flask typically uses `.html` files with Jinja2, not `.tpl` 
3. **Duplicate functionality**: The app already has `templates/error.html` for error handling
4. **Missing integration**: The Flask error handler at line 174-176 in `main.py` uses `error.html`, not this file

This file appears to be a remnant from Replit's template system that wasn't properly migrated. The actual error handling is done through Flask's error handler which renders `templates/error.html`.

## Development History

This project represents my journey into web development:
- Started on Replit as a learning project
- Explored various web technologies and Flask features
- Migrated to GitHub after outgrowing Replit's limits
- Served as a foundation for understanding full-stack development

## Security Note

This was a learning project. The secret key and some configurations are not production-ready. If forking this project, please update security settings appropriately.

## License

Personal project - feel free to explore and learn from the code!