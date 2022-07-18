export default function Sugestoes (){
    const suggestedFollowers = [
        {userImg:'img/bad.vibes.memes.svg', userName:'bad.vibes.memes', followYou:'Follows You', follow:'Follow'},
        {userImg:'img/chibirdart.svg', userName:'chibirdart', followYou:'Follows You', follow:'Follow'},
        {userImg:'img/razoesparaacreditar.svg', userName:'razoesparaacreditar', followYou:'New User', follow:'Follow'},
        {userImg:'img/adorable_animals.svg', userName:'adorable_animals', followYou:'Follows You', follow:'Follow'},
        {userImg:'img/smallcutecats.svg', userName:'smallcutecats', followYou:'Follows You', follow:'Follow'},
    ];

    return(
        <div class="sugestoes">
            <Titulo />
            {suggestedFollowers.map((item)=> <Suggestion userImg = {item.userImg} userName = {item.userName} followYou = {item.followYou} follow = {item.follow}/>)}
        </div>
    );
}

function Suggestion (props){
    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.userImg} />
                <div class="texto">
                  <div class="nome">{props.userName}</div>
                  <div class="razao">{props.followYou}</div>
                </div>
              </div>

              <div class="seguir">{props.follow}</div>
        </div>
    );
}

function Titulo (){
    return(
        <div class="titulo"> 
            Suggested for you
            <div>See All</div>
        </div>
    );
}