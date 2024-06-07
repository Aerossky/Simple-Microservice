# Use the official nginx image as the base image
FROM nginx:alpine

# Copy the static files to the nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]