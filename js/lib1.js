class Slider {

    constructor(boxId, width, height, collection) {
        this._box = $(`#${boxId}`);
        this._width = width;
        this._height = height;
        this._collection = collection;
        this._box.css('width', this._width);
        this._box.css('height', this._height);
        this._box.show(1000);
        this._id = 0;
        console.log('slider -> ok');
    }

    loadImage(id, path) {
        let item = document.createElement('img');
        $(item).addClass('logo').attr({'id': id, 'src': path})
            .appendTo(this._box,).fadeIn(1000);
    }

    loadImages(index, collection) {
        setTimeout(() => {
            if (index > 9) {
                $('#arrow_left').fadeIn(1000);
                $('#arrow_right').fadeIn(1000);
                return;
            } else {
                this._id = index;
                this.loadImage(index, collection[index++]);
                $('progress').val(index);
                this.loadImages(index, collection);
            }
        }, 1000);
    }

    activateArrowsHover() {
        $('.arrow').hover(
            function () {
                $(this).css('transform', 'rotate(360deg)');
            },
            function () {
                $(this).css('transform', 'rotate(0deg)');
            }
        );
    }

    activateLeftArrowClick() {
        $('#arrow_left').on('click', () => {
            if (this._id > 0) {
                $(`#${this._id--}`).fadeOut(1000);
                $('progress').val(this._id);
            }else
                alert("You are at the first image");
        });
    }

    activateRightArrowClick() {
        $('#arrow_right').on('click', () => {
            if (this._id < 9) {
                $(`#${++this._id}`).fadeIn(1000);
                $('progress').val(this._id + 1);
            }else
                alert("You are at the last image");
        });
    }

    activateHandlers(){
        this.activateArrowsHover();
        this.activateLeftArrowClick();
        this.activateRightArrowClick();
    }
}