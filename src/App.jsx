import { useEffect, useRef, useState } from "react";
import "./App.css";

const BIRTHDAY_MONTH = 9;
const BIRTHDAY_DAY = 10;

const playlist = [
  {
    title: "Best",
    artist: "Benson Boone / Ben&Ben",
    src: "/music/best.mp3",
  },
  {
    title: "Despacito",
    artist: "Luis Fonsi",
    src: "/music/decipacito.mp3",
  },
  {
    title: "Harmonize",
    artist: "Harmonize",
    src: "/music/harmonize.mp3",
  },
];

const gifts = [
  {
    emoji: "🎁",
    title: "The Gift of Happiness",
    message:
      "May your days be filled with laughter, peace, beautiful friendships, and moments worth remembering.",
  },
  {
    emoji: "💰",
    title: "The Gift of Abundance",
    message:
      "May new opportunities find you, your hard work pay off, and your dreams grow into something extraordinary.",
  },
  {
    emoji: "❤️",
    title: "The Gift of Love",
    message:
      "May you always be surrounded by genuine people who appreciate you, encourage you, and celebrate your existence.",
  },
  {
    emoji: "🚀",
    title: "The Gift of Greatness",
    message:
      "May you have the courage to build amazing things, explore new ideas, and become the person you dream of being.",
  },
];

const quotes = [
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
];

const questions = [
  {
    question: "If you answer this question incorrectly, do you get it right?",
    sequence: "",
    options: ["Yes", "No", "Sometimes", "I refuse to answer 😂"],
    answer: "Sometimes",
    explanation:
      "It's a trick question! Whether you get it right depends on how the question is interpreted. Don't overthink it! 😂",
  },

  {
    question: "What belongs to you but other people use it more than you do?",
    sequence: "",
    options: ["Your phone", "Your name", "Your money", "Your clothes"],
    answer: "Your name",
    explanation:
      "Your name belongs to you, but other people say it more often than you do. 😉",
  },

  {
    question: "If you have 5 chocolates and take away 3, how many do YOU have?",
    sequence: "",
    options: ["2", "3", "5", "8"],
    answer: "3",
    explanation:
      "You took away 3 chocolates, so you have the 3 you took! Don't let the question fool you. 🍫",
  },

  {
    question: "What gets wetter the more it dries?",
    sequence: "",
    options: ["A sponge", "A towel", "The sun", "A river"],
    answer: "A towel",
    explanation:
      "A towel gets wetter as it dries other things. Simple, but sneaky! 😂",
  },

  {
    question:
      "A girl says she has two brothers, but neither brother has a sister. How is that possible?",
    sequence: "",
    options: [
      "She is lying",
      "They are adopted",
      "It's impossible",
      "It is a trick question",
    ],
    answer: "It is a trick question",
    explanation:
      "As written, this is impossible if they are all siblings: the girl would be their sister. Gotcha! 😏",
  },

  {
    question: "What can you break without touching it?",
    sequence: "",
    options: ["A glass", "A promise", "A phone", "A chair"],
    answer: "A promise",
    explanation:
      "You can break a promise without physically touching anything. 💔😂",
  },

  {
    question:
      "If a plane crashes on the border between Kenya and Uganda, where do they bury the survivors?",
    sequence: "",
    options: ["Kenya", "Uganda", "Both countries", "They don't"],
    answer: "They don't",
    explanation:
      "You don't bury survivors! You were already planning the funeral. 😂",
  },

  {
    question: "How many months have 28 days?",
    sequence: "",
    options: ["1", "2", "6", "12"],
    answer: "12",
    explanation:
      "Every month has at least 28 days. February just gets all the attention! 😏",
  },

  {
    question:
      "You walk into a dark room with a candle, a lamp, and a fireplace. You have one match. What do you light first?",
    sequence: "",
    options: ["The candle", "The lamp", "The fireplace", "The match"],
    answer: "The match",
    explanation:
      "You must light the match before you can light anything else. 🔥",
  },

  {
    question: "What has a face and two hands but no arms or legs?",
    sequence: "",
    options: ["A robot", "A clock", "A doll", "A statue"],
    answer: "A clock",
    explanation: "A clock has a face and hands, but no arms or legs. ⏰",
  },

  {
    question: "If I say, 'Everything I say is a lie,' am I telling the truth?",
    sequence: "",
    options: ["Yes", "No", "Both", "It's a paradox"],
    answer: "It's a paradox",
    explanation:
      "If the statement is true, then it must be false. If it is false, it may not be a lie every time. Welcome to the liar paradox! 🧠",
  },

  {
    question: "What has many keys but cannot open a single door?",
    sequence: "",
    options: ["A security guard", "A keyboard", "A key shop", "A landlord"],
    answer: "A keyboard",
    explanation: "A keyboard has keys for typing, not for opening doors. ⌨️",
  },

  {
    question:
      "If someone says, 'Don't think about a pink elephant,' what is the first thing you imagine?",
    sequence: "",
    options: ["A blue elephant", "A pink elephant", "A lion", "Nothing at all"],
    answer: "A pink elephant",
    explanation:
      "Trying not to think about something often makes you think about it! 😂🐘",
  },

  {
    question: "What question can you never honestly answer 'yes' to?",
    sequence: "",
    options: [
      "Are you hungry?",
      "Are you asleep?",
      "Do you like music?",
      "Are you happy?",
    ],
    answer: "Are you asleep?",
    explanation:
      "If you're genuinely asleep, you can't answer the question. 😴",
  },

  {
    question:
      "A person is standing in the rain without an umbrella, but not a single hair on their head gets wet. Why?",
    sequence: "",
    options: [
      "They are wearing a hat",
      "They are under a tree",
      "They are bald",
      "The rain is fake",
    ],
    answer: "They are bald",
    explanation:
      "No hair means no hair gets wet! Sometimes the simplest answer wins. 😂",
  },
  {
    question: "If you answer this question incorrectly, do you get it right?",
    sequence: "",
    options: ["Yes", "No", "Sometimes", "I refuse to answer 😂"],
    answer: "Sometimes",
    explanation:
      "It's a trick question! Whether you get it right depends on how the question is interpreted. Don't overthink it! 😂",
  },

  {
    question: "What belongs to you but other people use it more than you do?",
    sequence: "",
    options: ["Your phone", "Your name", "Your money", "Your clothes"],
    answer: "Your name",
    explanation:
      "Your name belongs to you, but other people say it more often than you do. 😉",
  },

  {
    question: "If you have 5 chocolates and take away 3, how many do YOU have?",
    sequence: "",
    options: ["2", "3", "5", "8"],
    answer: "3",
    explanation:
      "You took away 3 chocolates, so you have the 3 you took! Don't let the question fool you. 🍫",
  },

  {
    question: "What gets wetter the more it dries?",
    sequence: "",
    options: ["A sponge", "A towel", "The sun", "A river"],
    answer: "A towel",
    explanation:
      "A towel gets wetter as it dries other things. Simple, but sneaky! 😂",
  },

  {
    question:
      "A girl says she has two brothers, but neither brother has a sister. How is that possible?",
    sequence: "",
    options: [
      "She is lying",
      "They are adopted",
      "It's impossible",
      "It is a trick question",
    ],
    answer: "It is a trick question",
    explanation:
      "As written, this is impossible if they are all siblings: the girl would be their sister. Gotcha! 😏",
  },

  {
    question: "What can you break without touching it?",
    sequence: "",
    options: ["A glass", "A promise", "A phone", "A chair"],
    answer: "A promise",
    explanation:
      "You can break a promise without physically touching anything. 💔😂",
  },

  {
    question:
      "If a plane crashes on the border between Kenya and Uganda, where do they bury the survivors?",
    sequence: "",
    options: ["Kenya", "Uganda", "Both countries", "They don't"],
    answer: "They don't",
    explanation:
      "You don't bury survivors! You were already planning the funeral. 😂",
  },

  {
    question: "How many months have 28 days?",
    sequence: "",
    options: ["1", "2", "6", "12"],
    answer: "12",
    explanation:
      "Every month has at least 28 days. February just gets all the attention! 😏",
  },

  {
    question:
      "You walk into a dark room with a candle, a lamp, and a fireplace. You have one match. What do you light first?",
    sequence: "",
    options: ["The candle", "The lamp", "The fireplace", "The match"],
    answer: "The match",
    explanation:
      "You must light the match before you can light anything else. 🔥",
  },

  {
    question: "What has a face and two hands but no arms or legs?",
    sequence: "",
    options: ["A robot", "A clock", "A doll", "A statue"],
    answer: "A clock",
    explanation: "A clock has a face and hands, but no arms or legs. ⏰",
  },

  {
    question: "If I say, 'Everything I say is a lie,' am I telling the truth?",
    sequence: "",
    options: ["Yes", "No", "Both", "It's a paradox"],
    answer: "It's a paradox",
    explanation:
      "If the statement is true, then it must be false. If it is false, it may not be a lie every time. Welcome to the liar paradox! 🧠",
  },

  {
    question: "What has many keys but cannot open a single door?",
    sequence: "",
    options: ["A security guard", "A keyboard", "A key shop", "A landlord"],
    answer: "A keyboard",
    explanation: "A keyboard has keys for typing, not for opening doors. ⌨️",
  },

  {
    question:
      "If someone says, 'Don't think about a pink elephant,' what is the first thing you imagine?",
    sequence: "",
    options: ["A blue elephant", "A pink elephant", "A lion", "Nothing at all"],
    answer: "A pink elephant",
    explanation:
      "Trying not to think about something often makes you think about it! 😂🐘",
  },

  {
    question: "What question can you never honestly answer 'yes' to?",
    sequence: "",
    options: [
      "Are you hungry?",
      "Are you asleep?",
      "Do you like music?",
      "Are you happy?",
    ],
    answer: "Are you asleep?",
    explanation:
      "If you're genuinely asleep, you can't answer the question. 😴",
  },

  {
    question:
      "A person is standing in the rain without an umbrella, but not a single hair on their head gets wet. Why?",
    sequence: "",
    options: [
      "They are wearing a hat",
      "They are under a tree",
      "They are bald",
      "The rain is fake",
    ],
    answer: "They are bald",
    explanation:
      "No hair means no hair gets wet! Sometimes the simplest answer wins. 😂",
  },
];

function getNextBirthday() {
  const now = new Date();
  const birthday = new Date(now.getFullYear(), BIRTHDAY_MONTH, BIRTHDAY_DAY);

  if (now >= birthday) {
    birthday.setFullYear(birthday.getFullYear() + 1);
  }

  return birthday;
}

function getCountdown(targetDate, now) {
  const difference = Math.max(0, targetDate.getTime() - now.getTime());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function App() {
  const [now, setNow] = useState(new Date());
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [musicError, setMusicError] = useState("");

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffleEnabled, setShuffleEnabled] = useState(false);
  const [repeatMode, setRepeatMode] = useState("all");
  const [showBirthdayPage, setShowBirthdayPage] = useState(false);
  const [celebrationActive, setCelebrationActive] = useState(false);

  const [openedGifts, setOpenedGifts] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Run the birthday celebration for 7 seconds.
  useEffect(() => {
    if (!celebrationActive) return;

    const timer = setTimeout(() => {
      setCelebrationActive(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, [celebrationActive]);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    setMusicError("");

    try {
      await audio.play();
      setMusicEnabled(true);
    } catch (error) {
      console.error("Music playback failed:", error);
      setMusicEnabled(false);
      setMusicError(
        `Could not play ${playlist[currentSongIndex].title}. Check the file in public/music/.`,
      );
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playMusic();
    } else {
      audio.pause();
      setMusicEnabled(false);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((current) => {
      if (shuffleEnabled && playlist.length > 1) {
        let next;

        do {
          next = Math.floor(Math.random() * playlist.length);
        } while (next === current);

        return next;
      }

      if (current < playlist.length - 1) {
        return current + 1;
      }

      if (repeatMode === "all") {
        return 0;
      }

      setMusicEnabled(false);
      return current;
    });

    setMusicEnabled(true);
  };

  const previousSong = () => {
    const audio = audioRef.current;

    // Restart the current song if it has played for more than 3 seconds.
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      if (audio.paused) playMusic();
      return;
    }

    setCurrentSongIndex((current) => {
      if (shuffleEnabled && playlist.length > 1) {
        let previous;

        do {
          previous = Math.floor(Math.random() * playlist.length);
        } while (previous === current);

        return previous;
      }

      return current > 0 ? current - 1 : playlist.length - 1;
    });

    setMusicEnabled(true);
  };

  const handleSongEnded = () => {
    if (repeatMode === "one") {
      const audio = audioRef.current;

      if (audio) {
        audio.currentTime = 0;
        audio.play().catch((error) => {
          console.error("Unable to repeat song:", error);
          setMusicEnabled(false);
        });
      }

      return;
    }

    if (shuffleEnabled) {
      nextSong();
      return;
    }

    if (currentSongIndex < playlist.length - 1) {
      nextSong();
      return;
    }

    if (repeatMode === "all") {
      setCurrentSongIndex(0);
      setMusicEnabled(true);
    } else {
      setMusicEnabled(false);
    }
  };

  // Load and play the selected track when the playlist changes.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.load();

    if (musicEnabled) {
      audio.play().catch((error) => {
        console.error("Unable to play selected song:", error);
        setMusicEnabled(false);
        setMusicError("Unable to play this song. Check the audio filename.");
      });
    }
  }, [currentSongIndex]);

  const isBirthday =
    now.getMonth() === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY;

  const nextBirthday = getNextBirthday();
  const countdown = getCountdown(nextBirthday, now);

  const openGift = (index) => {
    if (!openedGifts.includes(index)) {
      setOpenedGifts((previous) => [...previous, index]);
    }
  };

  const answerQuestion = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer("");
    } else {
      setGameFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setGameFinished(false);
  };

  return (
    <main className="birthday-app">
      <audio
        ref={audioRef}
        src={playlist[currentSongIndex].src}
        preload="metadata"
        onPlay={() => setMusicEnabled(true)}
        onPause={() => setMusicEnabled(false)}
        onEnded={handleSongEnded}
        onError={() => {
          setMusicEnabled(false);
          setMusicError(
            `Unable to load ${playlist[currentSongIndex].src}. Check that the file exists.`,
          );
        }}
      />

      <div className="top-banner">
        <p>
          {isBirthday
            ? "Today is your special day! Celebrate yourself. 🎉"
            : "A little birthday magic, waiting for October 10th. 🎂"}
        </p>

        <button
          type="button"
          className={`music-toggle ${musicEnabled ? "music-playing" : ""}`}
          onClick={toggleMusic}
          aria-label={musicEnabled ? "Pause music" : "Play music"}
          title={musicEnabled ? "Pause music" : "Play music"}
        >
          {musicEnabled ? "🔊" : "🎵"}
        </button>
      </div>
      {/* Birthday Music Player */}

      <section className="music-player">
        <button
          type="button"
          onClick={previousSong}
          title="Previous song"
          aria-label="Previous song"
        >
          ⏮
        </button>

        <button
          type="button"
          className="main-play-button"
          onClick={toggleMusic}
          title={musicEnabled ? "Pause music" : "Play music"}
          aria-label={musicEnabled ? "Pause music" : "Play music"}
        >
          {musicEnabled ? "⏸" : "▶"}
        </button>

        <button
          type="button"
          onClick={nextSong}
          title="Next song"
          aria-label="Next song"
        >
          ⏭
        </button>

        {musicError && (
          <p className="music-error" role="alert">
            {musicError}
          </p>
        )}
      </section>

      {musicError && (
        <p className="music-error" role="alert">
          {musicError}
        </p>
      )}

      {!showBirthdayPage ? (
        <>
          <section className="hero-card">
            <p className="eyebrow">A SPECIAL DAY · JUST FOR YOU</p>

            <h1 className="hero-title">
              {isBirthday ? (
                <>
                  Happy Birthday,
                  <br />
                  Getrude!
                </>
              ) : (
                <>
                  Your Birthday
                  <br />
                  <span>Awaits!</span>
                </>
              )}
            </h1>

            <div className="cake-emoji" aria-hidden="true">
              🎂
            </div>

            <p className="hero-subtitle">
              {isBirthday
                ? "Today is all about celebrating you, your journey, and the beautiful things yet to come."
                : "A special scrapbook for celebrating another beautiful chapter of your life."}
            </p>

            {/* Clickable birthday date */}
            <button
              type="button"
              className="date-box date-box-button"
              onClick={() => {
                setShowBirthdayPage(true);
                setCelebrationActive(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Open your birthday celebration"
            >
              <h2 className="date-text">October 10 🎁</h2>

              <p className="date-subtext">
                {isBirthday
                  ? "The day we celebrate YOU! 🎉"
                  : "Your special day, every year. 💗"}
              </p>

              <span className="open-birthday-link">
                Open your birthday surprise ✨
              </span>
            </button>

            {!isBirthday && (
              <div className="countdown-section">
                <p className="countdown-heading">COUNTING DOWN TO YOUR DAY</p>

                <div className="countdown">
                  {[
                    ["Days", countdown.days],
                    ["Hours", countdown.hours],
                    ["Minutes", countdown.minutes],
                    ["Seconds", countdown.seconds],
                  ].map(([label, value]) => (
                    <div className="countdown-item" key={label}>
                      <span className="countdown-number">
                        {String(value).padStart(2, "0")}
                      </span>
                      <span className="countdown-label">{label}</span>
                    </div>
                  ))}
                </div>

                <p className="next-birthday">
                  Next celebration:{" "}
                  {nextBirthday.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            )}

            {isBirthday && (
              <div className="birthday-wish">
                <h2>Another year. Another beautiful chapter. 💖</h2>
                <p>
                  May this year bring you happiness, good health, new
                  opportunities, meaningful friendships, and the courage to
                  chase your dreams. Be proud of how far you have come.
                </p>
              </div>
            )}
          </section>

          <section className="bottom-card">
            <div className="rabbit-icon" aria-hidden="true">
              🐰
            </div>

            <h2>A little note to yourself</h2>

            <p>
              You are allowed to grow at your own pace, celebrate your progress,
              and dream bigger every year. Your story is still being written.
            </p>

            <span className="bottom-decoration">Made with love ♡</span>
          </section>

          <div className="side-text">
            <span>🎂</span> October 10 · Your Special Day
          </div>

          <div className="floating-bow" aria-hidden="true">
            🎀
          </div>

          <footer className="birthday-footer">
            Made especially for Methusela · Every October 10th 💗
          </footer>
        </>
      ) : (
        /* Birthday celebration page */
        <section className="birthday-experience">
          {/* Floating balloons and fireworks */}
          {/* Birthday celebration: rising balloons and fireworks */}
          {celebrationActive && (
            <div className="celebration-overlay" aria-hidden="true">
              {/* Birthday message at the top */}
              <div className="birthday-firework-title">
                <span className="birthday-title-line">HAPPY</span>
                <span className="birthday-title-line birthday-title-second">
                  BIRTHDAY!
                </span>
                <span className="birthday-title-hearts">💖 ✨ 🎉 ✨ 💖</span>
              </div>

              {/* Extra balloons rising from the bottom */}
              <div className="balloon-container">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className="balloon"
                    style={{
                      left: `${(index * 37 + 3) % 96}%`,
                      animationDelay: `${(index % 8) * 0.18}s`,
                      animationDuration: `${4 + (index % 7) * 0.35}s`,
                      fontSize: `${35 + (index % 5) * 9}px`,
                    }}
                  >
                    {["🎈", "🎈", "🎈", "🎈", "🎈"][index % 5]}
                  </div>
                ))}
              </div>

              {/* Fireworks bursting behind the birthday message */}
              <div className="firework-burst burst-one">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-two">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-three">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-four">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-five">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-six">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-seven">
                <span>✦</span>
              </div>

              <div className="firework-burst burst-eight">
                <span>✦</span>
              </div>

              {/* Small floating celebration sparkles */}
              <div className="celebration-sparkle sparkle-one">✨</div>
              <div className="celebration-sparkle sparkle-two">⭐</div>
              <div className="celebration-sparkle sparkle-three">🎊</div>
              <div className="celebration-sparkle sparkle-four">✨</div>
            </div>
          )}

          <button
            type="button"
            className="back-button"
            onClick={() => {
              setShowBirthdayPage(false);
              setCelebrationActive(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ← Back to countdown
          </button>

          <header className="experience-header">
            <span className="experience-kicker">
              A LITTLE WORLD OF YOUR OWN
            </span>
            <h1>Happy Birthday, Methusela! 💗</h1>
            <p>
              A collection of wishes, surprises, motivation, and fun — created
              especially for you.
            </p>
            <div className="experience-decoration">🎂 🎀 💖 🎁</div>
          </header>

          {/* Birthday wishes */}
          <section className="experience-section">
            <h2>💌 A Birthday Letter to You</h2>

            <div className="letter-card">
              <p>Dear Methusela,</p>

              <p>
                Today is a reminder that your life is a gift and your story is
                still unfolding. Celebrate how far you have come, including the
                quiet battles you fought and the lessons that helped you grow.
              </p>

              <p>
                May this new chapter bring you peace of mind, good health,
                genuine love, financial growth, meaningful friendships, and
                opportunities that bring your dreams closer.
              </p>

              <p>
                Keep building. Keep learning. Keep believing in yourself. You do
                not have to have everything figured out today. Progress,
                courage, and consistency will take you far.
              </p>

              <p className="letter-signature">
                With love and best wishes, 💗
                <br />
                Your birthday scrapbook
              </p>
            </div>
          </section>

          {/* Virtual gifts */}
          <section className="experience-section">
            <h2>🎁 Open Your Virtual Gifts</h2>

            <p className="section-intro">
              Choose a present below. Each gift contains a special message for
              your new chapter.
            </p>

            <div className="gift-grid">
              {gifts.map((gift, index) => {
                const isOpened = openedGifts.includes(index);

                return (
                  <button
                    type="button"
                    className={`gift-card ${isOpened ? "gift-opened" : ""}`}
                    key={gift.title}
                    onClick={() => openGift(index)}
                  >
                    <span className="gift-emoji">
                      {isOpened ? gift.emoji : "🎁"}
                    </span>

                    <h3>{isOpened ? gift.title : `Gift ${index + 1}`}</h3>

                    {isOpened ? (
                      <p>{gift.message}</p>
                    ) : (
                      <span className="gift-prompt">Tap to unwrap ✨</span>
                    )}
                  </button>
                );
              })}
            </div>

            <p className="gift-progress">
              Gifts opened: {openedGifts.length} of {gifts.length}
            </p>
          </section>

          {/* Prizes */}
          <section className="experience-section">
            <h2>🏆 Your Birthday Prize Shelf</h2>

            <p className="section-intro">
              Every achievement deserves recognition. Here are some rewards to
              claim as you grow through the year.
            </p>

            <div className="prize-grid">
              <article className="prize-card">
                <span>🥇</span>
                <h3>The Courage Award</h3>
                <p>Awarded for trying again, even when things get difficult.</p>
              </article>

              <article className="prize-card">
                <span>💎</span>
                <h3>The Growth Award</h3>
                <p>Awarded for every new skill, lesson, and experience.</p>
              </article>

              <article className="prize-card">
                <span>👑</span>
                <h3>The Dream Builder</h3>
                <p>Awarded for taking real steps towards your ambitions.</p>
              </article>
            </div>

            <p className="prize-note">
              Your greatest prize is becoming a person you are proud of. 💖
            </p>
          </section>

          {/* Inspirational quotes */}
          <section className="experience-section">
            <h2>✨ Words to Carry With You</h2>

            <div className="quote-card">
              <span className="quote-mark">“</span>

              <blockquote>{quotes[quoteIndex].quote}</blockquote>

              <p>— {quotes[quoteIndex].author}</p>

              <button
                type="button"
                className="pink-button"
                onClick={() =>
                  setQuoteIndex((previous) => (previous + 1) % quotes.length)
                }
              >
                Another quote ✨
              </button>
            </div>
          </section>

          {/* Motivation */}
          <section className="experience-section">
            <h2>🚀 Your New-Year Motivation</h2>

            <div className="motivation-grid">
              <article className="motivation-card">
                <span>🌱</span>
                <h3>Start Small</h3>
                <p>
                  You do not need to change your entire life in one day. One
                  useful habit can change your direction.
                </p>
              </article>

              <article className="motivation-card">
                <span>🧠</span>
                <h3>Keep Learning</h3>
                <p>
                  Read, practise, ask questions, and stay curious. Your
                  knowledge is an investment in your future.
                </p>
              </article>

              <article className="motivation-card">
                <span>🔥</span>
                <h3>Stay Consistent</h3>
                <p>
                  Motivation may come and go. Build routines that help you
                  continue even when progress feels slow.
                </p>
              </article>

              <article className="motivation-card">
                <span>💗</span>
                <h3>Protect Your Peace</h3>
                <p>
                  Celebrate your progress without comparing your journey to
                  someone else's timeline.
                </p>
              </article>
            </div>

            <div className="daily-mantra">
              "I am learning. I am growing. I am capable of building a life I am
              proud of."
            </div>
          </section>

          {/* Brain game */}
          <section className="experience-section">
            <h2>🧠 Birthday Brain Challenge</h2>

            <p className="section-intro">
              Give your brain a little workout! Answer all four questions and
              see your score.
            </p>

            <div className="brain-game">
              {!gameFinished ? (
                <>
                  <div className="game-progress">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>

                  <div className="game-progress-track">
                    <div
                      className="game-progress-fill"
                      style={{
                        width: `${
                          ((currentQuestion + 1) / questions.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <h3>{questions[currentQuestion].question}</h3>

                  {questions[currentQuestion].sequence && (
                    <p className="question-sequence">
                      {questions[currentQuestion].sequence}
                    </p>
                  )}

                  <div className="answer-grid">
                    {questions[currentQuestion].options.map((option) => {
                      const correct =
                        option === questions[currentQuestion].answer;

                      const selected = option === selectedAnswer;

                      let answerClass = "";

                      if (selectedAnswer && correct) {
                        answerClass = "answer-correct";
                      } else if (selected && !correct) {
                        answerClass = "answer-wrong";
                      }

                      return (
                        <button
                          type="button"
                          key={option}
                          className={`answer-button ${answerClass}`}
                          onClick={() => answerQuestion(option)}
                          disabled={Boolean(selectedAnswer)}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {selectedAnswer && (
                    <div className="answer-feedback">
                      <p>
                        {selectedAnswer === questions[currentQuestion].answer
                          ? "Correct! 🎉"
                          : "Not quite! Keep learning. 💗"}
                      </p>

                      <span>{questions[currentQuestion].explanation}</span>

                      <button
                        type="button"
                        className="pink-button"
                        onClick={nextQuestion}
                      >
                        {currentQuestion === questions.length - 1
                          ? "See my score 🏆"
                          : "Next question →"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="game-results">
                  <div className="result-emoji">
                    {score === questions.length
                      ? "🏆"
                      : score >= 2
                        ? "🌟"
                        : "🌱"}
                  </div>

                  <h3>Challenge Complete!</h3>

                  <p className="final-score">
                    {score} / {questions.length}
                  </p>

                  <p>
                    {score === questions.length
                      ? "Perfect score! Your brain is on fire! 🔥"
                      : score >= 2
                        ? "Great effort! Every challenge is a chance to learn."
                        : "Well done for giving it a try. Practise makes progress!"}
                  </p>

                  <button
                    type="button"
                    className="pink-button"
                    onClick={restartGame}
                  >
                    Play Again 🔄
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Closing message */}
          <section className="final-birthday-message">
            <div>🎂 💖 🎉</div>

            <h2>Here's to Your Next Chapter!</h2>

            <p>
              May you have the courage to begin, the patience to grow, and the
              wisdom to appreciate how far you have travelled.
            </p>

            <p className="final-signature">Happy Birthday, Methusela! 🎀</p>

            <button
              type="button"
              className="back-button"
              onClick={() => {
                setShowBirthdayPage(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Return to the birthday countdown
            </button>
          </section>

          <footer className="birthday-footer">
            Made especially for Methusela · Every October 10th 💗
          </footer>
        </section>
      )}
    </main>
  );
}

export default App;
