function bindingStory() {
    var source = document.getElementById("story-template").innerHTML;
    var template = Handlebars.compile(source);
    var story = [{
        name: 'Education',
        iconClass: 'fas fa-graduation-cap',
        background: 'images/bg-1.jpg',
        triggerClass: 'eduTrigger'
    }, {
        name: 'Work experience',
        iconClass: 'fas fa-briefcase',
        background: 'images/bg-2.jpg',
        triggerClass: 'workTrigger'
    }, {
        name: 'Certificates & awards',
        iconClass: 'fas fa-award',
        background: 'images/bg-3.jpg',
        triggerClass: 'awardTrigger'
    }];
    var content = template({
        story: story
    });
    $('#handlebars-story').html(content);
}