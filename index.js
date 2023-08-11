const searchUser = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);
        if (!respuesta.ok) {
            Swal.fire({
                title: 'Error',
                text: 'Usuario no encontrado en GitHub, por favor revise sus datos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            throw new Error('Error en la solictud ' + respuesta.status);
        }
        const usuario = await respuesta.json();
        console.log(usuario)
        if (!!usuario.login) {
            nombreUsuario.innerText = usuario.name || usuario.login;
            nickNameUsuario1.innerText = "@" + usuario.login;
            nickNameUsuario1.href = usuario.html_url;
            nickNameUsuario2.innerText = "@" + usuario.login;
            imagenUsuario.src = usuario.avatar_url;
            fechaCreacion.innerText = new Date(usuario.created_at).toLocaleDateString('es-ES');
            reposUsuario.innerText = usuario.public_repos;
            followersUsuario.innerText = usuario.followers;
            followingUsuario.innerText = usuario.following;
            locationUsuario.innerText = usuario.location || 'No asignado';
            twitterUsuario.innerText = usuario.twitter_username || 'No asignado';
            enlaceUsuario.innerText = usuario.html_url;
        }

    } catch (error) {
        console.error(error.message);
    }

    // fetch(`https://api.github.com/users/${username}`)
    //     .then(respuesta => {
    //         if(!respuesta.ok) {
    //             throw new Error('Error en la solicitud ' + respuesta.status);
    //         }
    //         return respuesta.json();
    //     })
    //     .then(usuario => {
    //         console.log(usuario);
    //         if (!!usuario.name){
    //             nombreUsuario.innerText = usuario.name || usuario.login;
    //             nickNameUsuario1.innerText = "@"+usuario.login;
    //             nickNameUsuario1.href = usuario.html_url;
    //             nickNameUsuario2.innerText = "@"+usuario.login;
    //             imagenUsuario.src = usuario.avatar_url;
    //             fechaCreacion.innerText = new Date(usuario.created_at).toLocaleDateString('es-ES');
    //             reposUsuario.innerText = usuario.public_repos;
    //             followersUsuario.innerText = usuario.followers;
    //             followingUsuario.innerText = usuario.following;
    //             locationUsuario.innerText = usuario.location || 'No asignado';
    //             twitterUsuario.innerText = usuario.twitter_username;
    //             enlaceUsuario.innerText = usuario.html_url;
    //             return;
    //         }
    //         Swal.fire({
    //             title: 'Error',
    //             text: 'Usuario no encontrado en GitHub, por favor revise sus datos',
    //             icon: 'error',
    //             confirmButtonText: 'Aceptar'
    //         });
    //     })
    //     .catch(error => {
    //         console.error(error.message);
    //     })
}

const botonBuscar = document.querySelector('#boton-buscar');
const buscarUsuario = document.querySelector('#buscar-usuario');
const nombreUsuario = document.querySelector('#nombre-usuario');
const imagenUsuario = document.querySelector('#imagen-usuario');
const nickNameUsuario1 = document.querySelector('#nickname-usuario');
const nickNameUsuario2 = document.querySelector('#nickname2-usuario');
const fechaCreacion = document.querySelector('#fecha-creacion');
const reposUsuario = document.querySelector('#repos-usuario')
const followersUsuario = document.querySelector('#followers-usuario');
const followingUsuario = document.querySelector('#following-usuario');
const locationUsuario = document.querySelector('#location-usuario');
const twitterUsuario = document.querySelector('#twitter-usuario');
const enlaceUsuario = document.querySelector('#enlace-usuario');

botonBuscar.addEventListener('click', () => {
    if (buscarUsuario.value.trim().length > 0) {
        searchUser(buscarUsuario.value);
    }
});

buscarUsuario.addEventListener('keydown', (event) => {
    if (event.target.value.trim().length > 0 && event.key === "Enter") {
        botonBuscar.click();
    }
})