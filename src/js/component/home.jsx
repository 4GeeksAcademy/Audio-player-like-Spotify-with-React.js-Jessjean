import { useState, useRef } from "react";
import React from "react";

// //create your first component
// export const Player3 = () => {
// 			const [state, setState] = useState({
// 				currentIndex: 0,
				// songs: [
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 147,
				// 						"title": "Snow on the Beach",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 149,
				// 						"title": "Bejeweled",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 150,
				// 						"title": "Labyrinth",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 151,
				// 						"title": "Mastermind",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 152,
				// 						"title": "Lavender Haze",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 153,
				// 						"title": "Sweet Nothing",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 155,
				// 						"title": "Midnight Rain",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 156,
				// 						"title": "Karma",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 157,
				// 						"title": "Anti-Hero",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 158,
				// 						"title": "Question…?",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 					{
				// 						"author": "Taylor Swift",
				// 						"song_id": 159,
				// 						"title": "You're on Your Own, Kid",
				// 						"url": "files/mario/songs/hurry-starman.mp3"
				// 					},
				// 				]
// 			});
// 			const player = useRef(null);
// 			const playBtn = useRef(null);
// 			const pauseBtn = useRef(null);
		
// 	// 		const player = useRef(null);
// 	// const playBtn = useRef(null);
// 	// const pauseBtn = useRef(null);

// 	// useEffect(() => {
// 	// 	pauseBtn.style.display = "none";
// 	// }, []);

// 	// const play = index => {
// 	// 	const url = state.songs[index].url;
// 	// 	if (url) player.src = url;
// 	// 	player.play();
// 	// 	playBtn.style.display = "none";
// 	// 	pauseBtn.style.display = "inline-block";
// 	// 	setState({ currentIndex: index });
// 	// };
// 	const play = index => {
// 		const url = state.songs[index].url;
// 		if (url) player.current.src = url;
// 		player.current.play();
// 		playBtn.current.style.display = "none";
// 		pauseBtn.current.style.display = "inline-block";
// 		setState({ currentIndex: index });
// 	};
	
// 	const pause = () => {
// 		player.current.pause();
// 		pauseBtn.current.style.display = "none";
// 		playBtn.current.style.display = "inline-block";
// 	};
	
// 	// const pause = () => {
// 	// 	player.pause();
// 	// 	pauseBtn.style.display = "none";
// 	// 	playBtn.style.display = "inline-block";
// 	// };
	

// 	const songs = state.songs.map((song, i) => {
// 		return (
// 			<div
// 				key={i}
// 				className={`track ${state.currentIndex == i ? "active" : ""}`}
// 				onClick={() => {
// 					play(i);
// 				}}>
// 				<div className="track__number">{i + 1}</div>
// 				<div className="track__title featured">
// 					<span className="title">{song.title}</span>
// 				</div>
// 			</div>
// 		);
// 	});

// 	return (
// 		<div className="player">
// 			<section className="content">
// 				<div className="tracks">{songs}</div>
// 			</section>
// 			<section className="current-track">
// 				<div className="current-track__actions">
// 					<a
// 						href="#"
// 						className="skipbackward"
// 						onClick={() => play(state.currentIndex - 1)}>
// 						<i className="fas fa-caret-square-left" />
// 					</a>
// 					<a
// 						href="#"
// 						ref={playBtn}
// 						onClick={() => play(state.currentIndex)}>
// 						<i className="fas fa-play" />
// 					</a>
// 					<a href="#" ref={pauseBtn} onClick={() => pause()}>
// 						<i className="fas fa-pause-circle" />
// 					</a>
// 					<a
// 						href="#"
// 						className="skipforward"
// 						onClick={() => play(state.currentIndex + 1)}>
// 						<i className="fas fa-caret-square-right" />
// 					</a>
// 				</div>
// 			</section>
// 			<audio ref={player} controls />
// 		</div>
// 	);
// };

// export default Player3;

export const Player3 = () => {
    const [state, setState] = useState({
		
        currentIndex: 0,
        songs: [
			{
				"author": "Taylor Swift",
				"song_id": 147,
				"title": "Snow on the Beach",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 149,
				"title": "Bejeweled",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 150,
				"title": "Labyrinth",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 151,
				"title": "Mastermind",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 152,
				"title": "Lavender Haze",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 153,
				"title": "Sweet Nothing",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 155,
				"title": "Midnight Rain",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 156,
				"title": "Karma",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 157,
				"title": "Anti-Hero",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 158,
				"title": "Question…?",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
			{
				"author": "Taylor Swift",
				"song_id": 159,
				"title": "You're on Your Own, Kid",
				"url": "files/mario/songs/hurry-starman.mp3"
			},
		]
    });
	
    const player = useRef(null);
    const playBtn = useRef(null);
    const pauseBtn = useRef(null);

    const play = index => {
        const url = state.songs[index].url;
        if (url) player.current.src = url;
        player.current.play();
        playBtn.current.style.display = "none";
        pauseBtn.current.style.display = "inline-block";
        setState({ currentIndex: index });
    };

    const pause = () => {
        player.current.pause();
        pauseBtn.current.style.display = "none";
        playBtn.current.style.display = "inline-block";
    };

    const songs = state.songs.map((song, i) => {
        return (
            <div
                key={i}
                className={`track ${state.currentIndex === i ? "active" : ""}`}
                onClick={() => {
                    play(i);
                }}>
                <div className="track__number">{i + 1}</div>
                <div className="track__title featured">
                    <span className="title">{song.title}</span>
                </div>
            </div>
        );
    });

    return (
        <div className="player">
            <section className="content">
			<div className="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="#">Spotify</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
					</div>
					<div className="container-fluid">
                    <div className="collapse navbar-collaps d-flex justify-content-right" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Premium</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
							<li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Download</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
			<div className="Photo">
		<img src="https://compote.slate.com/images/230d46c8-4339-49c3-8fdb-9034d835d50c.jpeg?crop=1560%2C1040%2Cx0%2Cy0 float" className="img-thumbnail float" alt="..."></img>
	</div>

                <div className="tracks">{songs}</div>
            </section>
            <section className="current-track">
                <div className="current-track__actions">
                    <a href="#" className="skipbackward" onClick={() => play(state.currentIndex - 1)}>
                        <i className="fas fa-caret-square-left" />
                    </a>
                    <a href="#" ref={playBtn} onClick={() => play(state.currentIndex)}>
                        <i className="fas fa-play" />
                    </a>
                    <a href="#" ref={pauseBtn} onClick={() => pause()}>
                        <i className="fas fa-pause-circle" />
                    </a>
                    <a href="#" className="skipforward" onClick={() => play(state.currentIndex + 1)}>
                        <i className="fas fa-caret-square-right" />
                    </a>
                </div>
            </section>
            <audio ref={player} controls />
        </div>
    );
};
export default Player3;