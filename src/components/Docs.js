
import React from 'react'

 const  Docs =() =>{

        return (
            <div className='container' >
               <h1> Documentations </h1>
               <div class="card" Style="width:100%;">
                    <img src="/info.jfif" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">A la Une ...</h5>
                        <p class="card-text">Un journal est une publication périodique recensant un certain nombre d'événements présentés sous la forme d'articles relatifs à une période donnée, généralement une journée, d'où son nom. Par métonymie, ce terme peut désigner des périodiques imprimés à des fréquences de parution différentes, ainsi que des formats audiovisuels du type journal télévisé, ou téléjournal (en Suisse romande et au Canada).</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Une premiere nouvelle  <a href="*" class="card-link">Plus..</a></li>
                        <li class="list-group-item">Une seconde nouvelle <a href="*" class="card-link">Plus..</a></li>
                        <li class="list-group-item">Une troisieme nouvelle  <a href="*" class="card-link">Plus..</a></li>
                    </ul>
                    <div class="card-body">
                        <a href="*" class="card-link">link A</a>
                        <a href="*" class="card-link">link B</a>
                        <a href="*" class="card-link">link C</a>
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">France</h5>
                    <div class="card-body">
                        <h5 class="card-title">A savoir</h5>
                        <p class="card-text">En France, le premier journal imprimé est La Gazette, créé par Théophraste Renaudot, publiée à Paris entre mai 1631 et le 30 septembre 1915 et qui paraît toujours aujourd'hui sous le nom de Petites Affiches. Avec l'industrialisation de la presse écrite, de grands noms de journaux se sont créés, et le terme a servi à désigner à la fois le support physique de l'information (le journal en papier journal) et la société éditrice : le journal employant des journalistes et des reporters. Les plus anciens quotidiens français encore publiés sont, par ordre d'âge, Le Figaro (1826), Le Progrès (1859), La Dépêche du Midi (1870), La Croix (1880), Ouest-Éclair (1899) puis Ouest France (1944), Les Échos (1904) et L’Humanité (1904).

                    La façon même de présenter l'information de manière synthétique et thématique a été reprise par d'autres médias : la radio, puis la télévision, qui ont également repris le terme journal pour désigner l'émission dans laquelle un présentateur donne les informations du jour. Le premier journal télévisé français a été diffusé en 1949 par la RTF.</p>
                        <a href="https://fr.wikipedia.org/wiki/Journal#:~:text=29%20d%C3%A9cembre%202006%20.-,France,le%20nom%20de%20Petites%20Affiches." class="btn btn-primary">Lire plus ..</a>
                     </div>
                </div>
            </div>
        )
    }

export default Docs


