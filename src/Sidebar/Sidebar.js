import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar(){
    return(
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Links (){
    return(
        <div class="links">
        About • Help • Press • API • Careers • Privacy • Terms • Locations • Most followed accounts • Hashtags • Language
      </div>
    );
}

function Copyright (){
    return(
        <div class="copyright"> © 2021 INSTAGRAM FROM FACEBOOK </div>
    );
}