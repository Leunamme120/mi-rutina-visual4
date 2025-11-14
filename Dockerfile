FROM nginx:alpine

# Crear directorios de trabajo permitidos por OpenShift
RUN mkdir -p /tmp/nginx/client_temp \
    && chmod -R 777 /tmp/nginx

# Eliminar contenido html por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar build web
COPY build/web /usr/share/nginx/html

# Reemplazar la configuración principal de NGINX para evitar /var/cache/nginx
RUN sed -i 's@/var/cache/nginx@/tmp/nginx@g' /etc/nginx/nginx.conf

# También reemplazar cualquier referencia en conf.d
RUN sed -i 's@/var/cache/nginx@/tmp/nginx@g' /etc/nginx/conf.d/default.conf

# Cambiar el puerto 80 → 8080 para OpenShift
RUN sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
