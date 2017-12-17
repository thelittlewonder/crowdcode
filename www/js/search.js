document.getElementById('leadsearch').addEventListener('keyup', function () {
    let filter = (document.getElementById('leadsearch').value);
    filter=filter.toLowerCase();
    let rows = document.getElementsByTagName('tr');
    let i, a;
    for (i = 0; i < rows.length; i++) {
        a = rows[i].getElementsByClassName("name")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
$('#trigger').hammer().on('tap', function () {
    $('.header h1').css('display', 'none');
    $('#leadsearch').css('display', 'block');
    setInterval(function () {
        $('#leadsearch').css('opacity', 1);
    });
});
