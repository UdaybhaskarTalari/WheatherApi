# Use the official Python image as the base image
FROM python:3

# Set the working directory inside the container
WORKDIR /app

# Copy your web application file into the container
COPY app.py /app

# Expose the port that your web application is listening on (change this to the actual port number)
EXPOSE 5000

# Start your web application
CMD ["python", "app.py"]
