export default function Stories(){
    const story = [
        {img:'img/9gag.svg', usuario:'9gag'},
        {img:'img/meowed.svg', usuario:'meowed'},
        {img:'img/barked.svg', usuario:'barked'},
        {img:'img/nathanwpylestrangeplanet.svg', usuario:'nathanwpylestrangeplanet'},
        {img:'img/wawawicomics.svg', usuario:'wawawicomics'},
        {img:'img/respondeai.svg', usuario:'respondeai'},
        {img:'img/filomoderna.svg', usuario:'filomoderna'},
        {img:'img/memeriagourmet.svg', usuario:'memeriagourmet'},

    ]

    return(
        <div class="stories">
            {story.map((item)=> <Storie img = {item.img} usuario = {item.usuario} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie (props){
    return(
    <div class="story">
        <div class="imagem">
            <img src={props.img} />
        </div>
        <div class="usuario">
            {props.usuario}
        </div>
    </div>);
}