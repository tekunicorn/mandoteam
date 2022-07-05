<script type="text/javascript">
var postTitle = new Array();
var postUrl = new Array();
var postPublished = new Array();
var postDate = new Array();
var postLabels = new Array();
var postRecent = new Array();
var sortBy = "titleasc";
var numberfeed = 0;
function bloggersitemap(a) {
    function b() {
        if ("entry" in a.feed) {
            var d = a.feed.entry.length;
            numberfeed = d;
            ii = 0;
            for (var h = 0; h < d; h++) {
                var n = a.feed.entry[h];
                var e = n.title.$t;
                var m = n.published.$t.substring(0, 10);
                var j;
                for (var g = 0; g < n.link.length; g++) {
                    if (n.link[g].rel == "alternate") {
                        j = n.link[g].href;
                        break
                    }
                }
                var o = "";
                for (var g = 0; g < n.link.length; g++) {
                    if (n.link[g].rel == "enclosure") {
                        o = n.link[g].href;
                        break
                    }
                }
                var c = "";
                if ("category" in n) {
                    for (var g = 0; g < n.category.length; g++) {
                        c = n.category[g].term;
                        var f = c.lastIndexOf(";");
                        if (f != -1) {
                            c = c.substring(0, f)
                        }
                        postLabels[ii] = c;
                        postTitle[ii] = e;
                        postDate[ii] = m;
                        postUrl[ii] = j;
                        postPublished[ii] = o;
                        if (h < 10) {
                            postRecent[ii] = true
                        } else {
                            postRecent[ii] = false
                        }
                        ii = ii + 1
                    }
                }
            }
        }
    }
    b();
    sortBy = "titledesc";
    sortPosts(sortBy);
    sortlabel();
    displayToc();
}
function sortPosts(d) {
    function c(e, g) {
        var f = postTitle[e];
        postTitle[e] = postTitle[g];
        postTitle[g] = f;
        var f = postDate[e];
        postDate[e] = postDate[g];
        postDate[g] = f;
        var f = postUrl[e];
        postUrl[e] = postUrl[g];
        postUrl[g] = f;
        var f = postLabels[e];
        postLabels[e] = postLabels[g];
        postLabels[g] = f;
        var f = postPublished[e];
        postPublished[e] = postPublished[g];
        postPublished[g] = f;
        var f = postRecent[e];
        postRecent[e] = postRecent[g];
        postRecent[g] = f
    }
    for (var b = 0; b < postTitle.length - 1; b++) {
        for (var a = b + 1; a < postTitle.length; a++) {
            if (d == "titleasc") {
                if (postTitle[b] > postTitle[a]) {
                    c(b, a)
                }
            }
            if (d == "titledesc") {
                if (postTitle[b] < postTitle[a]) {
                    c(b, a)
                }
            }
            if (d == "dateoldest") {
                if (postDate[b] > postDate[a]) {
                    c(b, a)
                }
            }
            if (d == "datenewest") {
                if (postDate[b] < postDate[a]) {
                    c(b, a)
                }
            }
            if (d == "orderlabel") {
                if (postLabels[b] > postLabels[a]) {
                    c(b, a)
                }
            }
        }
    }
}
function sortlabel() {
    sortBy = "orderlabel";
    sortPosts(sortBy);
    var a = 0;
    var b = 0;
    while (b < postTitle.length) {
        temp1 = postLabels[b];
        firsti = a;
        do {
            a = a + 1
        } while (postLabels[a] == temp1);
        b = a;
        sortPosts2(firsti, a);
        if (b > postTitle.length) {
            break
        }
    }
}
function sortPosts2(d, c) {
    function e(f, h) {
        var g = postTitle[f];
        postTitle[f] = postTitle[h];
        postTitle[h] = g;
        var g = postDate[f];
        postDate[f] = postDate[h];
        postDate[h] = g;
        var g = postUrl[f];
        postUrl[f] = postUrl[h];
        postUrl[h] = g;
        var g = postLabels[f];
        postLabels[f] = postLabels[h];
        postLabels[h] = g;
        var g = postPublished[f];
        postPublished[f] = postPublished[h];
        postPublished[h] = g;
        var g = postRecent[f];
        postRecent[f] = postRecent[h];
        postRecent[h] = g
    }
    for (var b = d; b < c - 1; b++) {
        for (var a = b + 1; a < c; a++) {
            if (postTitle[b] > postTitle[a]) {
                e(b, a)
            }
        }
    }
}


function displayToc() {
    var a = 0;
    var b = 0;
    while (b < postTitle.length) {
        temp1 = postLabels[b];
        document.write("");
        document.write('<div class="post-archive"><h4>' + temp1 + '</h4><div class="ct-columns">');
        firsti = a;
        do {
            document.write("<p>");
            document.write('<a " href="' + postUrl[a] + '">' + postTitle[a] + "");
            if (postRecent[a] == true) {
                document.write(' - <strong><span>Yeni Konu Hemen Oku!</span></strong>')
            }
            document.write("</a></p>");
            a = a + 1
        } while (postLabels[a] == temp1);
        b = a;
        document.write("</div></div>");
        sortPosts2(firsti, a);
        if (b > postTitle.length) {
            break
        }
    }
}
</script>
