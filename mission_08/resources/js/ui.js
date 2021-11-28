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

    updateAccompaniment(piaonKeyName) {
        const $accompaniment = document.querySelector('.accompaniment');

        if(this.accompaniment.length >= 20) {
            this.accompaniment = this.accompaniment.slice(1);
        }
        this.accompaniment += piaonKeyName;
        $accompaniment.innerText = this.accompaniment;
    }
}


class PianoDataManager {
    constructor() {
        this.pianoKeys = {};
    }

    countOnMouseKey(piaonKeyName) {
        if(this.pianoKeys.hasOwnProperty(piaonKeyName)) {
            this.pianoKeys[piaonKeyName] += 1;
        } else {
            this.pianoKeys[piaonKeyName] = 1;
        }

        return this.pianoKeys[piaonKeyName];
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
        const enterTime = 1000;
        let timer;

        $pianoBtn.addEventListener('mouseenter', () => {
            timer = setTimeout(() => {
                this.view.showPiano($piano);
            }, enterTime);
        });
        $pianoBtn.addEventListener('mouseleave', () => {
            clearTimeout(timer);
        });
    }

    setPianoKeyEvent() {
        const $pianoKey = document.querySelectorAll('.piano li');
        const moveTime = 500;
        
        $pianoKey.forEach(el => {
            let mouseThrottling = null;
            el.addEventListener('mousemove', (e) => {
                const target = e.currentTarget;
                const piaonKeyName = target.querySelector('.pitch').innerText;

                if(mouseThrottling) return false;
                const onMouseKeyCount = this.data.countOnMouseKey(piaonKeyName);
                this.view.updateAccompaniment(piaonKeyName);
                this.view.updateOnMouseKey(target, onMouseKeyCount);
                mouseThrottling = setTimeout(() => {
                    mouseThrottling = null;
                }, moveTime);
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