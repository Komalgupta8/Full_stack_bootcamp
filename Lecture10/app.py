from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == 'admin' and password == 'password':  
        
        return redirect(url_for('dashboard'))  
    else:
        
        flash('Invalid username or password', 'error')
        return redirect(url_for('login_page'))  

@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    return "Welcome to the dashboard!"

if __name__ == '__main__':
    app.run(debug=True)
