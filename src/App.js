import React, { useState, useEffect } from "react";
import { Button, Input, Carousel, Grid } from "antd";
import Modal from "react-modal";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { useBreakpoint } = Grid;

const App = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [audio, setAudio] = useState({
    audioMethod1: "",
    audioMethod2: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [comparing, setComparing] = useState(false);

  const screens = useBreakpoint();

  useEffect(() => {
    fetch("./database.json")
      .then((response) => response.json())
      .then((data) => setVoices(data.voices))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleTextClick = (voiceId, textId) => {
    const selectedTextData = voices
      .find((voice) => voice.id === voiceId)
      .texts.find((text) => text.id === textId);

    setAudio({
      audioMethod1: selectedTextData.audioMethod1,
      audioMethod2: selectedTextData.audioMethod2,
    });

    setSelectedVoice(voiceId);
    setSelectedText(textId);
    setComparing(false);
    setModalIsOpen(true); // Mở modal khi chọn văn bản
  };

  const handleCompareClick = () => {
    setComparing(true);
  };

  const handleCompare = (audioSrc) => {
    // Xử lý logic so sánh ở đây, ví dụ: so sánh duration của âm thanh
    const audioElement = new Audio(audioSrc);
    audioElement.addEventListener("loadedmetadata", () => {
      const duration = audioElement.duration;
      console.log(`Duration of ${audioSrc}: ${duration} seconds`);
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0%", // hoặc bạn có thể thử với giá trị khác
  };
  return (
    <div className="App">
      <h1>
        VCIVS: Integrating Voice Cloning Technology to Improve Vietnamese
        Storytelling
      </h1>
      <h4>Hoai-Thuong Dang</h4>

      <h1 style={{ marginTop: 100 }}>Voice Demo</h1>
      <div id="voice-list">
        {voices.map((voice) => (
          <div key={voice.id} className="voice-item">
            <h2>{voice.name}</h2>
            <h4>Reference Voice</h4> 
            <audio controls src={voice.defaultAudio}></audio>
            <div id="text-list">
              {voice.texts.map((text) => (
                <div
                  key={text.id}
                  onClick={() => handleTextClick(voice.id, text.id)}
                  className="text-item"
                >
                  {text.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Text Modal"
      >
        {selectedVoice && selectedText && (
          <>
            <h2>
              {
                voices
                  .find((voice) => voice.id === selectedVoice)
                  ?.texts.find((text) => text.id === selectedText)?.text
              }
            </h2>
            <div id="text-content">
              <h3>
                {
                  voices
                    .find((voice) => voice.id === selectedVoice)
                    ?.texts.find((text) => text.id === selectedText)?.content
                }
              </h3>
            </div>
            <div id="audio-controls">
              <h3>Multispeaker Fastspeech2</h3>
              <audio controls src={audio.audioMethod1}></audio>

              <h3>VITS</h3>
              <audio controls src={audio.audioMethod2}></audio>
            </div>
          </>
        )}
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ width: 100, height: 40, background: "#ffffff" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
      <div style={{ marginTop: 100 }}>
        <h1>Stories Telling Web Application</h1>
        <Slider {...settings}>
          <div>
            <img src="./images/img-web.png" alt="Image 1" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="./images/img-web2.png" alt="Image 2" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="./images/img-web3.png" alt="Image 3" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="./images/img-web4.png" alt="Image 3" style={{ width: '100%' }} />
          </div>

          {/* Thêm các đường dẫn ảnh khác vào đây */}
        </Slider>
      </div>
    </div>
  );
};

export default App;
