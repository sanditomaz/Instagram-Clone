import React from "react";
export default function Posts(){
    const pictures = [
        {userImg:'img/nathanwpylestrangeplanet.svg', userName:'nathanwpylestrangeplanet', postImg:'video/8dd2e40a75ccaf4299c8a7632fabc3c1.gif', likedUserImg:'img/respondeai.svg', user:'respondeai', numberOfppl:'101.523'},
        {userImg:'img/meowed.svg', userName:'meowed', postImg:'img/rollerskatingyess.png', likedUserImg:'img/adorable_animals.svg', user:'adorable_animals', numberOfppl:'99.159'},
        {userImg:'img/nathanwpylestrangeplanet.svg', userName:'nathanwpylestrangeplanet', postImg:'img/gun_girl.png', likedUserImg:'img/adorable_animals.svg', user:'adorable_animals', numberOfppl:'99.159'},
        {userImg:'img/9gag.svg', userName:'9gag', postImg:'img/rocknroll.png', likedUserImg:'img/adorable_animals.svg', user:'adorable_animals', numberOfppl:'99.159'},
        {userImg:'img/meowed.svg', userName:'meowed', postImg:'video/jinx-attack.gif', likedUserImg:'img/adorable_animals.svg', user:'adorable_animals', numberOfppl:'99.159'},
        {userImg:'img/meowed.svg', userName:'meowed', postImg:'video/FickleSpicyAndeancondor-max-1mb.gif', likedUserImg:'img/adorable_animals.svg', user:'adorable_animals', numberOfppl:'99.159'},
    ]

    return(
        <div class="posts">
           {pictures.map((item)=> <Post userImg ={item.userImg} userName = {item.userName} postImg = {item.postImg} likedUserImg = {item.likedUserImg} user = {item.user} numberOfppl ={item.numberOfppl} />)}
        </div>
    );
}

function Post(props){
    const [likedHeart, setLikedHeart] = React.useState("heart-outline");

    function likePost(){
        if(likedHeart === "heart-outline"){
            setLikedHeart("heart");
        }else{
            setLikedHeart("heart-outline");
        }
    } 

return(
    <div class="post">

        <div class="topo">
            <div class="usuario">
                <img src={props.userImg} />
                {props.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img onDoubleClick={()=>{if(likedHeart === "heart-outline"){setLikedHeart("heart")}}} src={props.postImg}/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon onClick={likePost} name={likedHeart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
        
            <div class="curtidas">
                <img src={props.likedUserImg} />
                <div class="texto">
                        Liked by <strong>{props.user}</strong> and <strong>other {props.numberOfppl} people</strong>
                </div>
            </div>
        </div>
    </div>);
}



