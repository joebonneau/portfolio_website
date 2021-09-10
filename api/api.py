import os
from time import time
from datetime import datetime
import json

from github import Github
from dotenv import load_dotenv

import flask
from flask import Flask

load_dotenv()

GITHUB_PAT = os.environ.get("GITHUB_PAT")

app = Flask(__name__)


@app.route("/api/repo")
def get_github_repos():
    gh = Github(GITHUB_PAT)

    repos = []
    for repo in gh.get_user().get_repos():
        repos.append(repo.full_name)

    return {"repos": repos}


# pygithub for displaying github data?
