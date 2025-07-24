import os
import fnmatch

# Specify the directory to search for files
target_directory = '/home/runner/meet-ebowwa'

# Specify the file extensions to filter
file_extensions = ['*.txt', '*.py', '*.json', '*.yaml', '*.md', '*.nix', '*.html', '*.mp4', '*.jpeg', '*.jpg']

# Get the absolute path of the site-packages directory
site_packages_dir = os.path.abspath(os.path.join(os.__file__, '..', '..', 'site-packages'))

# Iterate over the files in the target directory
for root, directories, files in os.walk(target_directory):
    # Exclude the site-packages directory
    if root == site_packages_dir:
        continue

    for file in files:
        for extension in file_extensions:
            if fnmatch.fnmatch(file, extension):
                path = os.path.join(root, file)
                print(path)
