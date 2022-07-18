export default function Usuario(){
    return(
        <SidebarUser userImg ='img/catanacomics.svg' userName ='catanacomics' name='Catana'/>
    );
}

function SidebarUser(props){
    return(
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
              <strong>{props.userName}</strong>
              {props.name}
            </div>
        </div>
    );
}