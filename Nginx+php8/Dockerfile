# PHP + FPM 베이스
FROM php:8.1-fpm

# 필수 확장 설치
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Nginx 설치
RUN apt-get update && apt-get install -y nginx vim \
    && rm -rf /var/lib/apt/lists/*

# 타임존 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 기본 문서 루트
ENV DEST /usr/share/nginx/html

EXPOSE 80

CMD service nginx start && php-fpm