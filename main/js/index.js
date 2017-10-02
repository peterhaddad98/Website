// html5media enables <video> and <audio> tags in all major browsers
// External File: https://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: https://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://media.fbcbaptistchurch.org/media/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Hal 3eshtou kabla an",
                "length": "5:31",
                "file": "1"
            }, {
                "track": 2,
                "name": "Anta li man",
                "length": "3:51",
                "file": "2"
            }, {
                "track": 3,
                "name": "Fawka",
                "length": "5:14",
                "file": "3"
            }, {
                "track": 4,
                "name": "Askouno",
                "length": "3:38",
                "file": "4"
            }, {
                "track": 5,
                "name": "3anni kada",
                "length": "4:50",
                "file": "5"
            }, {
                "track": 6,
                "name": "2ila be2r samira",
                "length": "5:52",
                "file": "6"
            }, {
                "track": 7,
                "name": "Sa2alouzou bi 7idnika",
                "length": "3:41",
                "file": "7"
            }, {
                "track": 8,
                "name": "Alki",
                "length": "3:26",
                "file": "8"
            }, {
                "track": 9,
                "name": "Moustaslimon",
                "length": "3:13",
                "file": "9"
            }, {
                "track": 10,
                "name": "Rahmatan",
                "length": "4:24",
                "file": "10"
            }, {
                "track": 11,
                "name": "Lima a5af 7oznan",
                "length": "3:43",
                "file": "11"
            }, {
                "track": 12,
                "name": "Far7atou kalbi",
                "length": "2:44",
                "file": "12"
            }, {
                "track": 13,
                "name": "Hal tarakta lilmasi7",
                "length": "2:39",
                "file": "13"
            }, {
                "track": 14,
                "name": "Min baha2",
                "length": "5:12",
                "file": "14"
            }, {
                "track": 15,
                "name": "Kamilou jamal",
                "length": "2:52",
                "file": "15"
            }, {
                "track": 16,
                "name": "Ila douja",
                "length": "3:14",
                "file": "16"
            }, {
                "track": 17,
                "name": "In zara3ti",
                "length": "5:16",
                "file": "17"
            }, {
                "track": 18,
                "name": "Askouno",
                "length": "2:53",
                "file": "18"
            }, {
                "track": 19,
                "name": "Inta moush li",
                "length": "3:35",
                "file": "19"
            }, {
                "track": 20,
                "name": "Yateebo li",
                "length": "5:26",
                "file": "20"
            }, {
                "track": 21,
                "name": "Ha innani",
                "length": "3:37",
                "file": "21"
            }, {
                "track": 22,
                "name": "Ou7ibouka iz",
                "length": "3:26",
                "file": "22"
            }, {
                "track": 23,
                "name": "Rabbi anta li ta3aba",
                "length": "3:13",
                "file": "23"
            }, {
                "track": 24,
                "name": "Comment",
                "length": "0:34",
                "file": "24"
            }, {
                "track": 25,
                "name": "Abana lathe",
                "length": "2:13",
                "file": "25"
            }, {
                "track": 26,
                "name": "5alika l2akwani",
                "length": "5:52",
                "file": "26"
            }, {
                "track": 27,
                "name": "Araka Ilahi Arak",
                "length": "3:35",
                "file": "27"
            }, {
                "track": 28,
                "name": "Ayuha Lkudus",
                "length": "4:42",
                "file": "28"
            }, {
                "track": 29,
                "name": "Ha salatu Tawbati",
                "length": "4:39",
                "file": "29"
            }, {
                "track": 30,
                "name": "Ya Rabbu Ma A7la",
                "length": "4:00",
                "file": "30"
            }, {
                "track": 31,
                "name": "Rabi Sabayta",
                "length": "4:05",
                "file": "31"
            }, {
                "track": 32,
                "name": "Fi Sitrihi",
                "length": "6:17",
                "file": "32"
            }, {
                "track": 33,
                "name": "Ma7abatu Lahi",
                "length": "1:35",
                "file": "33"
            }, {
                "track": 34,
                "name": "Rabi J3alanni",
                "length": "2:39",
                "file": "34"
            }, {
                "track": 35,
                "name": "Arfa3uka",
                "length": "4:12",
                "file": "35"
            }, {
                "track": 36,
                "name": "Sa2alto Nafsi",
                "length": "3:29",
                "file": "36"
            }, {
                "track": 37,
                "name": "Lasto A3lamo",
                "length": "3:49",
                "file": "37"
            }, {
                "track": 38,
                "name": "Musta7eki Kuli Lmajdi",
                "length": "3:29",
                "file": "38"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});