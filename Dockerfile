# Usar NGINX como servidor web estático
FROM nginx:alpine

# Eliminar la configuración por defecto de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build web generado por Flutter
COPY build/web /usr/share/nginx/html

# OpenShift usa el puerto 8080
EXPOSE 8080

# Reemplazar el puerto 80 por 8080 en nginx
RUN sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf

# Ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]
