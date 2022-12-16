import os
from dotenv import load_dotenv
load_dotenv()

orga = os.environ["OPENAI_API_ORGA"]
user = os.environ["OPENAI_API_USER"]
print(user, orga, sep="\n")
