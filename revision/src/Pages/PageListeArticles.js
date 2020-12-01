import React from 'react';
import ContenusArticles from './ContenusArticles'
import {Link} from 'react-router-dom'
function PageListeArticles(){

    return(

       <>
         <h1>Liste des articles </h1>

         {
             ContenusArticles.map((article,index) =>
             <Link to={`/article/${article.nom}`}>
                <h3>{article.titre}</h3>
             </Link>
             
             )
         }

       </>

    );
}


export default PageListeArticles;