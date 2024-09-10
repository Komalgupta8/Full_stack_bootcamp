from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth_routes import auth_bp

import bcrypt

app=Flask(_name_)
app.config['MONGO_URL']='mongodb+srv://komalguptagupta234:<db_password>@cluster0.dl2b6.mongodb.net/'
mongo=PyMongo(app)
app.register_blueprint(auth_bp)

app.config['JWT_SECRET_KEY']='#'
jwt=JWTManager(app)
CORS(app)
