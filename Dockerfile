FROM nginx:alpine

# Crear directorio temporal para NGINX (OpenShift permite escribir en /tmp)
RUN mkdir -p /tmp/nginx \
    && chmod -R 777 /tmp/nginx

# Eliminar contenido por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar build web
COPY build/web /usr/share/nginx/html

# Configurar NGINX para usar /tmp/nginx como temp folder
RUN sed -i '1i client_body_temp_path /tmp/nginx;' /etc/nginx/nginx.conf

# Cambiar puerto 80 → 8080
RUN sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
