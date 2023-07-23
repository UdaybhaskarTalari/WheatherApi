# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the website files to the container
COPY . /usr/share/nginx/html

# Expose the port that Nginx will listen on (default is 80)
EXPOSE 80

# The default CMD of the Nginx image should start Nginx automatically, so no need to specify it explicitly.
