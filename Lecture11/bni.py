from flask import Flask, request, render_template_string

app = Flask(__name__)

# HTML form as a string
form_html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
</head>
<body>
    <h2>BMI Calculator</h2>
    <form action="/calculate" method="post">
        <label for="height">Height (m):</label><br>
        <input type="number" step="0.01" id="height" name="height" required><br><br>
        
        <label for="weight">Weight (kg):</label><br>
        <input type="number" step="0.1" id="weight" name="weight" required><br><br>
        
        <input type="submit" value="Calculate BMI">
    </form>
</body>
</html>
"""

@app.route('/')
def home():
    return render_template_string(form_html)

@app.route('/calculate', methods=['POST'])
def calculate():
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    
    # Calculate BMI
    bmi = weight / (height ** 2)
    
    # Determine BMI category
    if bmi < 18.5:
        category = "Underweight"
    elif 18.5 <= bmi < 24.9:
        category = "Normal weight"
    elif 25 <= bmi < 29.9:
        category = "Overweight"
    else:
        category = "Obesity"
    
    return f"Your BMI is: {bmi:.2f} - Category: {category}"

if __name__ == '__main__':
    app.run(debug=True)
