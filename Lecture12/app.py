from flask import FLask
from flask_pymango import PyMongo
from flask_jwt_extended import JWTManager
from flask_cors import CORS
import bcrypt

app = Flask(__name__)

app.config['MONGO URI']='mongodb+srv://komalguptagupta234:<QRHtgvhr2XPQUQ2N>@cluster0.dl2b6.mongodb.net/'

mongo=PyMongo(app)

app.config['JWT_SECRET_KEY']='#'

jwt=JWTManager(app)
CORS(app)
