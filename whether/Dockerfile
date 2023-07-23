# Use the official Ubuntu image as the base image
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /app

# Install necessary dependencies for your web application (e.g., if using Python Flask)
RUN apt-get update \
    && apt-get install -y python3 python3-pip

# Copy your web application files into the container
COPY . /app

# Install any additional dependencies required by your web application
# For example, if you are using Python, you can install the required packages using pip:
RUN pip3 install -r requirements.txt

# Expose the port that your web application is listening on (change this to the actual port number)
EXPOSE 5000

# Start your web application
# Replace "app.py" with the main file of your web application (e.g., "app.py" for Python Flask)
CMD ["python3", "app.py"]
