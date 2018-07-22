function initializeModals() {
    var modals = [{
        name: '#educationModal',
        title: 'Education'
    }, {
        name: '#workModal',
        title: 'Work experience'
    }, {
        name: '#awardModal',
        title: 'Certificates and Awards'
    }];
    modals.forEach((modal) => {
        $(modal.name).iziModal({
            width: '100%',
            title: modal.title,
            openFullscreen: true,
            transitionIn: 'fadeInDown',
            headerColor: '#6d7d8d',
            zindex: 9999
        });
    });
}

function setTrigger(trigger, modal) {
    $(trigger).click((event) => {
        event.preventDefault();
        $(modal).iziModal('open');
    });
}

$(function () {
    initializeModals();
    var map = {};
    map['.eduTrigger'] = '#educationModal';
    map['.workTrigger'] = '#workModal';
    map['.awardTrigger'] = '#awardModal';
    Object.keys(map).forEach(function (key) {
        value = map[key];
        setTrigger(key, value);
    });
})