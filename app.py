# save this as app.py
from flask import Flask, render_template, request
from flask_mail import Mail, Message
import os

# (B) SETTINGS
app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = "mandoeyebrows@gmail.com"
app.config['MAIL_PASSWORD'] = "hlwcvqxikubmanfs"
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=['GET', 'POST'])
def contact():
    return render_template("contact.html")

@app.route("/services")
def services():
    return render_template("services.html")

# THANK YOU PAGE
@app.route("/thank", methods=['GET', 'POST'])
def thank():
  if request.method == 'POST':
        content = request.form['message']
        name = request.form['name']
        email_from = request.form['email']

        msg = Message(name,sender='mandoeyebrows@gmail.com', recipients=["trinhthongman96@gmail.com"])
        msg.body = "Hi my name is : {} \nI need to reply for: {} \nPlease contact with my to : {}".format(name, content, email_from)
        mail.send(msg)
        return render_template("thank.html")

if __name__ == '__main__':
    app.run(debug=True)