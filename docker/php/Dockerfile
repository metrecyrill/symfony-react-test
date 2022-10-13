FROM php:8.1-fpm

RUN apt-get update && \
    apt-get install -y libpq-dev git && \
    docker-php-ext-install pdo pdo_pgsql pgsql && \
    docker-php-ext-enable pgsql && \
    docker-php-ext-enable pdo_pgsql

## Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer