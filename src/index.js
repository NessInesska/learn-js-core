function Menu(options) {
    var elem = options.elem;

    elem.onmousedown = function() {
        return false;
    }

    elem.onclick = function(event) {
        let closestTitle = event.target.closest('.title');
        if (closestTitle && elem.contains(closestTitle)) {
            elem.classList.toggle('open');
        }
    };

}