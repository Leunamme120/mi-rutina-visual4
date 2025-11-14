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

# --- FIX PARA OPENSHIFT ---
# Crear directorios y dar permisos al usuario arbitrario de OpenShift
RUN mkdir -p /var/cache/nginx \
    && mkdir -p /var/run \
    && mkdir -p /var/log/nginx \
    && chown -R 1001:0 /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx \
    && chmod -R g+rwX /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx

# Forzar usuario no root compatible con OpenShift
USER 1001

# Ejecutar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]
