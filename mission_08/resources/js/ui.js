class PianoViewController {
    constructor() {
        this.accompaniment = '';
    }

    showPiano(piano) {
        piano.classList.toggle('visible');
    }

    updateOnMouseKey(pianoKey, count) {
        pianoKey.querySelector('.num').innerText = count;
    }

    updateAccompaniment(keyName) {
        const $accompaniment = document.querySelector('.accompaniment');
        
        if(this.accompaniment.length > 20) {
            this.accompaniment = this.accompaniment.slice(1);
        }
        this.accompaniment += keyName;
        $accompaniment.innerText = this.accompaniment;
    }
}


class PianoDataManager {
    constructor() {
        this.keys = {};
    }

    countOnMouseKey(keyName) {
        if(this.keys.hasOwnProperty(keyName)) {
            this.keys[keyName] += 1;
        } else {
            this.keys[keyName] = 1;
        }

        return this.keys[keyName];
    }
}


class PianoEventHandler {
    constructor(data, view) {
        this.data = data;
        this.view = view;
    }

    setPianoBtnEvent() {
        const $pianoBtn = document.querySelector('.pianoBtn');
        const $piano = document.querySelector('.piano');

        $pianoBtn.addEventListener('mouseenter', () => {
            setTimeout(() => {
                this.view.showPiano($piano);
            }, 1000);
        });
    }

    setTimeoutOnPiano(e) {
        const target = e.currentTarget;

        if(!mouseThrottling) {
            mouseThrottling = setTimeout(() => {
                mouseThrottling = null;
                const onMouseKeyCount = this.data.countOnMouseKey(target.querySelector('.pitch').innerText);
                console.log(onMouseKeyCount)
                this.view.updateOnMouseKey(target, onMouseKeyCount);
            }, 1000);
        }
    }

    setPianoKeyEvent() {
        const $pianoKey = document.querySelectorAll('.piano li');
        
        $pianoKey.forEach(el => {
            let mouseThrottling = null;
            el.addEventListener('mousemove', (e) => {
                const target = e.currentTarget;
                const keyName = target.querySelector('.pitch').innerText;

                if(!mouseThrottling) {
                    mouseThrottling = setTimeout(() => {
                        mouseThrottling = null;
                        const onMouseKeyCount = this.data.countOnMouseKey(keyName);
                        this.view.updateAccompaniment(keyName);
                        this.view.updateOnMouseKey(target, onMouseKeyCount);
                    }, 500);
                }
            });
        })
    }

    initEventListner() {
        this.setPianoBtnEvent();
        this.setPianoKeyEvent();
    }
    
}

const piano = new PianoEventHandler(new PianoDataManager(), new PianoViewController());
piano.initEventListner();