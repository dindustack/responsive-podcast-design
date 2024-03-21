const playBtn = document.getElementById("playBtn");

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function convertSecondsToMinSec(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds - (mins % 60);

  const finalTime =
    str_pad_left(mins, "0", 2) + ":" + str_pad_left(secs, "0", 2);

  return finalTime;
}

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#DDD",
  progressColor: "#7EBA94",
  barWidth: 4,
  responsive: true,
  height: 50,
  barRadius: 4,
  url: "./public/assets/Better-Day.mp3",
});

wavesurfer.load("/public/assets/Better-Day.mp3");

playBtn.onclick = function () {
  wavesurfer.playPause();
};

wavesurfer.on("audioprocess", function () {
  if (wavesurfer.isPlaying()) {
    const totalTime = wavesurfer.getDuration(),
      currentTime = wavesurfer.getCurrentTime();

    document.getElementById("time-total").innerText =
      convertSecondsToMinSec(totalTime);

    document.getElementById("time-current").innerText =
      convertSecondsToMinSec(currentTime);
  }
});

wavesurfer.on("finish", function () {
  wavesurfer.stop();
});
