"""Render website templates with jinja"""
import errno
from pathlib import Path
import shutil


def copy_files(src: str, dst: str) -> None:
    """Copy files or directories to rendered directory.

    :param src: path to file to copy
    :param dst: path to destination
    """
    try:
        shutil.copytree(src, dst)
    except OSError as exc:
        if exc.errno == errno.ENOTDIR:
            shutil.copy(src, dst)
        else:
            raise


if __name__ == "__main__":
    public = Path("./public")

    directorys = [public]
    for directory in directorys:
        if directory.exists():
            # reset rendered content each time
            shutil.rmtree(str(directory))
        directory.mkdir()

    files = ["index.html", "images", "styles"]
    for src_file in files:
        destination = f"public/{src_file}"
        copy_files(src_file, destination)
