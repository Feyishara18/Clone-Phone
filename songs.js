
    let mySongs = [
  {
    "title": "Feel",
    "artist": "Davido",
    "cover": "Davido img.jpg",
    "audio": "./Davido-Feel-New-Song-(TrendyBeatz.com).mp3"
  },

  {
    "title": "Lonely at the top",
    "artist": "Asake",
    "cover": "Asake img.jpg",
    "audio": "Asake-Lonely-At-The-Top-(TrendyBeatz.com).mp3"
  },

  {
    "title": "Dey-Play",
    "artist": "Burna Boy",
    "cover": "Burna boy.jpg",
    "audio": "Burna-Boy-Dey-Play-(TrendyBeatz.com).mp3"
  },
  {
    "title": "Woman",
    "artist": "Simi",
    "cover": "simi img.jpg",
    "audio": "Simi-Woman-To-Woman-(TrendyBeatz.com).mp3"
  }, 
  {
    "title": "Cana",
    "artist": "Seyi-vibez",
    "cover": "Seyi-vibez.jpg",
    "audio": "Seyi-Vibez-Cana-(TrendyBeatz.com).mp3"
  }, 
  {
    "title": "Ice on my Baby",
    "artist": "Yung-Blue",
    "cover": "Yung-Bleu.jpg",
    "audio": "Yung_Bleu_-_Ice_On_My_Baby.mp3"
  },
   {
    "title": "Felony",
    "artist": "C-kay",
    "cover": "C-kay.jpg",
    "audio": "CKay-Felony-(TrendyBeatz.com).mp3"
  },
   {
    "title": "On-the-Low",
    "artist": "Burna Boy",
    "cover": "Burna boy.jpg",
    "audio": "Burna-Boy-On-The-Low-[TrendyBeatz.com].mp3"
  }, 
  {
    "title": "No-Wahala",
    "artist": "1da-Banton",
    "cover": "1da-banton.jpg",
    "audio": "1da-Banton-No-Wahala-(TrendyBeatz.com).mp3"
  }, {
    "title": "Cocaine",
    "artist": "Dai-Verse",
    "cover": "Dai-verse.jpg",
    "audio": "Dai-Verse-Cocaine-(TrendyBeatz.com).mp3"
  },
   {
    "title": "Awolowo",
    "artist": "Fido",
    "cover": "Fidi img.jpg",
    "audio": "Fido-Awolowo-(TrendyBeatz.com).mp3"
  },
   {
    "title": "Woman",
    "artist": "Doja-Cat",
    "cover": "doja image.jpg",
    "audio": "Doja_Cat_-_Woman_CeeNaija.com_.mp3"
  }, 
  {
    "title": "Uhh-Yeah",
    "artist": "Asake",
    "cover": "Asake img.jpg",
    "audio": "Asake-Uhh-Yeahh-(TrendyBeatz.com).mp3"
  },
  {
    "title": "Outside",
    "artist": "Buju",
    "cover": "Buju img.jpg",
    "audio": "Buju-Outside-(TrendyBeatz.com).mp3 - Copy.crdownload"
  }
]



mySongs.forEach((song, i) => {
   songsList.innerHTML += `<div onclick="playSong('${song.audio}')" class="bond">
    <h3>${song.title}</h3>
    <h6>${song.artist}</h6>
    </div>`
});


function search() {
        const query = document.getElementById('search').value.toLowerCase();
        const filteredSongs = mySongs.filter(song => song.title.toLocaleLowerCase().includes(query));
        console.log(filteredSongs);
        songsList.innerHTML = ''
        filteredSongs.forEach((song, i) => {
          console.log(i);
          songsList.innerHTML += `<div onclick="playSong('${song.audio}')" class="bond">
    <h3>${song.title}</h3>
    <h6>${song.artist}</h6>
    </div>`
});
    }

  



    function toggleSongs() {
  const panel = document.getElementById("songsPanel");
  panel.classList.toggle("active");
}



let isShuffled = false; // Track shuffle state
let shuffledSongs = [...mySongs]; // Default: normal order
let currentIndex = 0; // Track the current song
  
song.src = mySongs[currentIndex].audio;
  songTitle.innerHTML = mySongs[currentIndex].title;
  artist.innerHTML = mySongs[currentIndex].artist;
  cover.src = mySongs[currentIndex].cover;

// Function to shuffle the array
function shuffleArray(songs) {
  const copy = [...songs];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]; // Swap elements
  }
  return copy;
}

// Function to toggle shuffle mode
function toggleShuffle() {
  isShuffled = !isShuffled; // Toggle state
console.log(isShuffled);

  if (isShuffled) {
    shuffledSongs = shuffleArray(mySongs); // Shuffle only when enabling shuffle
    currentIndex = 0; // Reset to first shuffled song
  } else {
    currentIndex = 0; // Reset to first normal song
  }

  playSong(shuffledSongs[currentIndex].audio);
}

// Function to get the correct song list (shuffled or normal)
function getCurrentPlaylist() {
  return isShuffled ? shuffledSongs : mySongs;
}

// Function to play a song from the current playlist
function playSong(audioSrc) {
  let songToPlay = mySongs.find(song => song.audio === audioSrc);
  console.log(songToPlay);
  
  if (!songToPlay) return; // In case no song is found
  
  song.src = songToPlay.audio;
  songTitle.innerHTML = songToPlay.title;
  artist.innerHTML = songToPlay.artist;
  cover.src = songToPlay.cover;
  song.play();
}

// Function to play the next song
function nextSong() {
  let currentPlaylist = getCurrentPlaylist();
  console.log(currentPlaylist);
  
  currentIndex = (currentIndex + 1) % currentPlaylist.length;
  playSong(currentPlaylist[currentIndex].audio);
}

// Function to play the previous song
function previousSong() {
  let currentPlaylist = getCurrentPlaylist();
  currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playSong(currentPlaylist[currentIndex].audio);
}

// Attach shuffle toggle function to button
document.getElementById("shuffleButton").addEventListener("click", toggleShuffle);
