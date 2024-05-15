A concise guide on how to set up a Python virtual environment (venv) with CLI commands, rendered in Markdown, and a CSV cheat sheet:

## Setting up a Python Virtual Environment (venv)

1. **Open a terminal or command prompt.**

2. **Navigate to the directory where you want to create your virtual environment.**

   ```bash
   cd /path/to/your/project/directory
   ```

3. **Create a new virtual environment using the `python -m venv` command.**

   ```bash
   python -m venv my_venv
   ```

   This will create a new directory called `my_venv` in your current directory, which will contain the Python interpreter and all the packages you install.

4. **Activate the virtual environment.**

   - On Windows:

     ```bash
     my_venv\Scripts\activate
     ```

   - On macOS or Linux:

     ```bash
     source my_venv/bin/activate
     ```

   You should see `(my_venv)` at the beginning of your command prompt, indicating that the virtual environment is active.

5. **Install packages in the virtual environment.**

   ```bash
   pip install <package_name>
   ```

   For example, to install the `numpy` package:

   ```bash
   pip install numpy
   ```

6. **Deactivate the virtual environment when you're done.**

   ```bash
   deactivate
   ```

   This will return you to your system's default Python environment.

## Virtual Environment Cheat Sheet (CSV)

| Command | Description |
| --- | --- |
| `python -m venv my_venv` | Create a new virtual environment named `my_venv` |
| `source my_venv/bin/activate` | Activate the virtual environment on macOS or Linux |
| `my_venv\Scripts\activate` | Activate the virtual environment on Windows |
| `deactivate` | Deactivate the virtual environment |
| `pip install <package_name>` | Install a package in the virtual environment |
| `pip freeze > requirements.txt` | Save the installed packages to a `requirements.txt` file |
| `pip install -r requirements.txt` | Install packages from a `requirements.txt` file |

Remember, always activate your virtual environment before installing or using packages to ensure that your project's dependencies are isolated from the system's default Python environment.