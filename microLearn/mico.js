function exploreCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

function showVideos(course) {
    let videos = {
        ai: [
            '<iframe src="https://www.youtube.com/embed/2ePf9rue1Ao" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/8hly31xKli0" allowfullscreen></iframe>'
        ],
        webdev: [
            '<iframe src="https://www.youtube.com/embed/HGTJBPNC-Gw" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/qz0aGYrrlhU" allowfullscreen></iframe>'
        ],
        marketing: [
            '<iframe src="https://www.youtube.com/embed/WrtebUkUssc" allowfullscreen></iframe>',
            '<iframe src="https://www.youtube.com/embed/NUFJmVz5v7s" allowfullscreen></iframe>'
        ],
        appdevelopment: [
            '<iframe src="https://www.youtube.com/watch?v=fis26HvvDII" allowfullscreen</iframe>'
        ],
        webdev: [
        '<iframe src="https://www.youtube.com/watch?v=fis26HvvDII" allowfullscreen</iframe>'
        ],
       uiux: [
        '<iframe src=" https://www.youtube.com/watch?v=wKVefMPbUQA" allowfullscreen</iframe>'
       ],
       datascience: [
       '<iframe src="https://www.youtube.com/watch?v=-ETQ97mXXF0" allowfullscreen</iframe>'
       ],
       cybersecurity: [
       '<iframe src="https://www.youtube.com/watch?v=19c8versTbY" allowfullscreen</iframe>'
       ],
       digitalmarketing: [
       '<iframe src="https://www.youtube.com/watch?v=razvC2Ql6os" allowfullscreen</iframe>'
       ],
       gameDev: [
       '<iframe src="https://www.youtube.com/watch?v=G2qlKf0xHG4" allowfullscreen</iframe>'
       ],
       finance: [
      '<iframe src=" https://www.youtube.com/watch?v=F3QpgXBtDeo" allowfullscreen</iframe>'
       ],
       videoediting: [
       '<iframe src="https://www.mygreatlearning.com/academy/learn-for-free/courses/video-editing-basics" allowfullscreen</iframe>'
       ],
       devops: [
      '<iframe src="https://www.youtube.com/watch?v=POelRPQ4sS4" allowfullscreen</iframe>'
       ],
       business: [
       '<iframe src=" https://www.youtube.com/watch?v=QoqohmccTSc" allowfullscreen</iframe>'
        ],
        productivity: [
        '<iframe src=" https://www.youtube.com/watch?v=1nBwfZZvjKo" allowfullscreen</iframe>'
         ],
    };
    
    document.getElementById('videos').innerHTML = videos[course].join('');
    document.getElementById('video-section').style.display = 'block';
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}
window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.scrollY > 270) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
};
