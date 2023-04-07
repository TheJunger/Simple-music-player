# Reproductor de musica simple
Simplemente es un reproductor de musica limitado a 5 canciones

Tiene las funcionalidades de 
* Al terminar una cancion pasa a la siguiente, 
* Pausar y reproducir, 
* Siguiente y anterior cancion
* Cuenta con responsive design

En un inicio utilizaba la API de **fetch** en un servidor local, al subirlo a la plataforma de github este dejaba de funcionar al no contar con ese servidor

Por lo que se decidio migrar el archivo **'musicas.txt'** que contenia las rutas de canciones, imagenes, titulos y duracion, A una variable dentro del mismo codigo

Al ser uno de mis primeros proyectos no tenia conocimiento en NodeJS y por eso no fue implementado en esta correccion de bugs