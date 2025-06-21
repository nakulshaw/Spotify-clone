console.log("Listen spotify");
// accessing the elements needed for functionality
let navButtons=document.querySelectorAll(".navButtons");
let songItems=document.querySelectorAll(".songItems");
let songItems2=document.querySelectorAll(".songItems2");
let masterPlay=document.querySelector(".masterPlay");
let stepForward=document.querySelector(".stepForward");
let stepBackward=document.querySelector(".stepBackward");
let rangeBar=document.querySelector(".rangeBar");
let rangeContainer=document.querySelector(".rangeContainer");
let author=document.querySelector(".songNameAuthor");
let sduration=document.querySelector(".duration");
let submit=document.querySelector(".submit");
let searchWrapper=document.querySelector(".searchWrapper");



// initializing songCollection
let songs=[
    {songName:"aajkiraat", singer:"Madhubanti Bagchi,Amitabh Bhattacharya,Sachin Jigar, Divya Kumar", duration:"03:48",path:"Aaj Ki Raat-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"aasakooda", singer:"Sai Abhyankkar,Sai Smriti", duration:"03:45",path:"Aasa Kooda-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"aayinai", singer:"Pawan Singh,Simran choudhary,Amitabh Bhattacharya", duration:"02:58",path:"Aayi Nai-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"daku", singer:"Chani nattan,Indrapal Moga", duration:"02:11",path:"Daku - SirfJatt.Com.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"diltujaantu", singer:"Gurnazar,Chet Singh", duration:"03:57",path:"Dil Tu Jaan Tu_320(PagaiWorld.com).mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"excuses", singer:"AP Dhillon,Gurinder Gill,Intense", duration:"02:56",path:"Excuses - SirfJatt.Com.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"findingher", singer:"Kushagra,Bharath,Saaheal", duration:"03:27",path:"Finding Her - InstaSong.In.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"gulabisadi", singer:"Sanju Rathod,G-SPXRK", duration:"03:45",path:"Gulabi Sadi_320(PagaiWorld.com).mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"jhol", singer:"Maanu,Annural Khalid", duration:"04:32",path:"Jhol - PagalWorld.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"kingshit", singer:"Shubh", duration:"03:38",path:"King Shit - SirfJatt.Com.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"laalpari", singer:"Yo Yo Honey Singh,simar Kaur,Alfaaz", duration:"04:16",path:"Laal Pari From Housefull 5-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"nadaaniyan", singer:"Akshath", duration:"02:55",path:"Nadaaniyan - PagalHits.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"paththavaikkum", singer:"Deepthi Suresh,Anirudh Ravichander,Vignesh Shivan", duration:"03:36",path:"Paththavaikkum.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"qatal", singer:"Guru Randhawa,Sanjoy,Gill Machhrai", duration:"02:51",path:"Qatal-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"shaky", singer:"Sanju Rathod,G-SPXRK", duration:"02:55",path:"Shaky-320kbps.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"soulmate", singer:"Badshah,Arijit Singh", duration:"03:33",path:"Soulmate-(HindiSongLyrics.com.in).mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"vehaniya", singer:"Danny,Avvy Sra,sagar", duration:"04:06",path:"Ve Haniya Ve Dil Janiya Udaariyaan - PagalWorld.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},
    {songName:"yetunekyakiya", singer:"Pritam,Javed Bashir", duration:"04:42",path:"Ye Tune Kya Kiya.mp3",coverPath:"Screenshot 2025-06-06 174217.png"},

    
];
sduration.innerText='00:00';
// adding songs to the buttons
let audio=new Audio();
let playCount=0;
let playIndex=0;
let historyStack=[];

let audioPlay=(i)=>{
    for(let j=0; j<songs.length;j++){
        if(songs[j]['songName']==songItems[i].classList[1]){
            console.log(i);
            if(playCount==0){
                audio.src=songs[i]['path'];
                audio.play(); 
                rangeContainer.style.visibility="visible";
                sduration.innerText=songs[i]['duration'];
                author.innerText=songs[i]['singer'];
                masterPlay.setAttribute('src','pauseimg.png')
                playCount=1;
                historyStack[playIndex]=songs[j];
                playIndex++;
                console.log(playCount);
                break;
            }
            
            else if(playCount==1){
                audio.pause();
                rangeContainer.style.visibility="visible";
                masterPlay.setAttribute('src','playimage.png')
                playCount=0;
                console.log(playCount);
                break;
            }
            
           
        }
        if(songs[j]['songName']!=songItems[i].classList[1] ){
                songs[j]['songName']=songItems[i].classList[1];
                console.log(songs[j]['songName']);
                audio.pause();
                rangeContainer.style.visibility="visible";
                masterPlay.setAttribute('src','playimage.png')
                console.log(songs[i]['path']);
                audio.src=songs[i]['path'];
                audio.play();
                rangeContainer.style.visibility="visible";
                sduration.innerText=songs[i]['duration'];
                author.innerText=songs[i]['singer'];
                masterPlay.setAttribute('src','pauseimg.png');
                historyStack[playIndex]=songs[i];
                playIndex++;
                playCount=1;
                songs[j]['songName']='';
                console.log(playCount);
                break;

        }
    };

};

for(let i=0;i<songItems.length;i++){
    songItems[i].addEventListener('click',()=>{
        audioPlay(i);
        
        
    });    
}
let audioPlay2=(i)=>{
    audio.src='';
    for(let j=0;j<songs.length;j++){
        if(songItems2[i].classList[1]==songs[j]['songName']){
            if(audio && !audio.paused){
                audio.pause();
                rangeContainer.style.visibility="visible";
                masterPlay.setAttribute('src','playimage.png')
                audio.currentTime=0; //resets audio

            }
            else if(audio && audio.paused){
                audio.src=songs[j]['path'];
                audio.play();
                rangeContainer.style.visibility="visible";
                sduration.innerText=songs[j]['duration'];
                author.innerText=songs[j]['singer'];
                historyStack[playIndex]=songs[j];
                playIndex++;
                masterPlay.setAttribute('src','pauseimg.png')
       
            }
        }
      
        
    }

};

for(let i=0;i<songItems2.length;i++){
    songItems2[i].addEventListener('click',()=>{
        audioPlay2(i);
        
        
    });    
}

// adding functionality to masterplay button

masterPlay.addEventListener('click',()=>{
    if(masterPlay.getAttribute("src")=="playimage.png"){
        if(audio.src==''){
            audio.src=songs[0]['path'];
            audio.play();
            rangeContainer.style.visibility="visible";
            rangeContainer.style.visibility="visible";
            sduration.innerText=songs[0]['duration'];
            author.innerText=songs[0]['singer'];
            masterPlay.setAttribute('src','playimage.png')

        }
        else{
            audio.play();
            rangeContainer.style.visibility="visible";
            masterPlay.setAttribute('src','pauseimg.png')
        }
        
    }
    else{
        audio.pause();
        rangeContainer.style.visibility="visible";
        masterPlay.setAttribute('src','playimage.png')
    }
});

stepBackward.addEventListener('click',()=>{
    audio.src=historyStack[playIndex-2]['path'];
    audio.play();
    rangeContainer.style.visibility="visible";
    sduration.innerText=historyStack[playIndex-2]['duration'];
    author.innerText=historyStack[playIndex-2]['singer'];
    playIndex=playIndex-1;
    console.log(historyStack);
    console.log(playIndex);
    
})

stepForward.addEventListener('click',()=>{
    audio.src=songs[playIndex]['path'];
    audio.play();
    rangeContainer.style.visibility="visible";
    sduration.innerText=songs[playIndex]['duration'];
    author.innerText=songs[playIndex]['singer'];
    historyStack[playIndex]=songs[playIndex];
    playIndex=playIndex+1;
    console.log(historyStack);
    console.log(playIndex);
    
})


function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


audio.controls=true;
// set rangebar max when meta data is loaded
audio.addEventListener('loadedmetadata',()=>{
    rangeBar.max=audio.duration;
})

// update rangebar as audio plays
audio.addEventListener('timeupdate',()=>{
    rangeBar.value=audio.currentTime;
    let time=audio.currentTime;
    sduration.innerText=formatTime(time);

})

// allow seeking
rangeBar.addEventListener('input',()=>{
    audio.currentTime=rangeBar.value;
})
// 

// Update timestamp as range bar changes
rangeBar.addEventListener('input', () => {
  const time = parseFloat(rangeBar.value);
  sduration.innerText = formatTime(time);
});

// adding functionality to search bar

submit.addEventListener('click',()=>{
    let input=document.querySelector('#searchText').value;
    searchText=input.replace(/\s+/g, "").toLowerCase();
    console.log(input);
    console.log(searchText);
    for(let i=0;i<songs.length;i++){
        let searchData=songs[i]['songName'].replace(/\s+/g, "").toLowerCase();
        console.log(searchData);
        console.log(searchText);
        if(searchData==searchText){
            console.log('matched');
            let match=document.createElement('button');
            match.innerText=songs[i]['songName'];
            match.classList.add('resultBtn');
            match.style.height="2rem";
            match.style.width="12rem";
            match.style.position="absolute";
            match.style.top="3rem";
            match.style.right="9.5rem";
            match.style.borderRadius="0.3rem";
            match.style.border="none";
            match.style.color="white";
            match.style.backgroundColor="lime";
            searchWrapper.appendChild(match);

            // adding functionality
            match.addEventListener("click",()=>{
                audio.src=songs[i]["path"];
                audio.play();

                rangeContainer.style.visibility="visible";
            });
            break;
            
            
        
        }
        
        
    }
    


})
let input=document.querySelector('#searchText');
input.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        let input=document.querySelector('#searchText').value;
        searchText=input.replace(/\s+/g, "").toLowerCase();
        console.log(input);
        console.log(searchText);
        for(let i=0;i<songs.length;i++){
            let searchData=songs[i]['songName'].replace(/\s+/g, "").toLowerCase();
            console.log(searchData);
            console.log(searchText);
            if(searchData==searchText){
                console.log('matched');
                let match=document.createElement('button');
                match.innerText=songs[i]['songName'];
                match.classList.add(songs[i]['songName']);
                match.style.height="2rem";
                match.style.width="12rem";
                match.style.position="absolute";
                match.style.top="3rem";
                match.style.right="9.5rem";
                match.style.borderRadius="0.3rem";
                match.style.border="none";
                match.style.color="white";
                match.style.backgroundColor="lime";
                searchWrapper.appendChild(match);

                // adding functionality
                match.addEventListener("click",()=>{
                    audio.src=songs[i]["path"];
                    audio.play();
                    masterPlay.setAttribute('src','pauseimg.png');
                    rangeContainer.style.visibility="visible";
                
                    if(songs[i]['songName']==match.classList[0]){
                        sduration.innerText=songs[i]['duration'];
                        author.innerText=songs[i]['singer'];
                        
                    }

                });
                break;


            
            }
        }
    }    

});

