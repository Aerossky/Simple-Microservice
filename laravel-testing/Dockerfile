# Use the official PHP image with PHP 8.2
FROM php:8.2

ENV COMPOSER_ALLOW_SUPERUSER 1

# Update package lists and install required dependencies
RUN apt-get update && \
    apt-get install -y \
        libpq-dev \
        libzip-dev \
        unzip

# Enable PHP extensions
RUN docker-php-ext-install pdo pdo_mysql zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy only necessary files into the container (e.g., composer.json, composer.lock, .env)
COPY .env ./
COPY composer.json composer.lock ./
COPY database/ database/
COPY routes/ routes/
COPY storage/ storage/
COPY bootstrap/ bootstrap/
COPY public/ public/
COPY resources/ resources/
COPY artisan ./artisan

# Install PHP dependencies using Composer (without development packages)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set permissions for Laravel storage and cache directories
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 8000 to the outside world
EXPOSE 8000

# Start Laravel application using PHP's built-in server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
