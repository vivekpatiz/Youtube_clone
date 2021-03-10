var indexrequest = new XMLHttpRequest();
var inapi = "AIzaSyAq1sFZzS5FFtyx2AsHjBkcroDnldOn-ro";
var val = parseInt(Math.random()*10);
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=asmr&key=AIzaSyCBjuzsvKQJ_ldss4nkoVAjpqCzMVmYl_o
var se = ["trending","everytime special","trending news","trending heroes","trending matter","everyday special","day to day life","no matter","life go on","video songs"]
var inurl = "https://youtube.googleapis.com/youtube/v3/search?type=videos&part=snippet&maxResults=25&q="+se[val]+"&key="+inapi;
indexrequest.open('GET',inurl,true);
indexrequest.send();
indexrequest.onload = function ()
{
    var data1 = JSON.parse(this.response);
    for(var j = 0;j<18;j++)
        {
            var img_id1 = "img-"+j; 
            var ch_id1 = "ch-"+j;
            var vd_id1 = "vd-"+j;
            var cn_id1 = "cn-"+j;
            // var vi_id1 = "vi-"+j;
            // var ti_id1 = "ti-"+j;

            var img2 = img_ch(img_id1,data1.items[j].snippet.thumbnails.default.url,data1.items[j].snippet.thumbnails.default.width,data1.items[j].snippet.thumbnails.default.height);
            var ch1 = img_ch(ch_id1,data1.items[j].snippet.thumbnails.default.url);
            var vd = name(vd_id1,data1.items[j].snippet.title);
            var cn = name(cn_id1,data1.items[j].snippet.channelTitle);
            // var vi = name(vi_id,data1.items[i].snippet.publishedAt);
            // var ti = name(ti_id,data1.items[i].snippet.publishTime);
            function img_ch(eleId,eleSrc,eleWid,elehgt)
            {
                var temp = document.getElementById(eleId);
                temp.setAttribute('src',eleSrc);
                temp.setAttribute('width',eleWid);
                temp.setAttribute('height',elehgt);
                var ch = document.getElementById(eleId);
                ch.setAttribute('src',eleSrc);
                return temp;
            }
            function name(eleId,eleVal){
                var tempy = document.getElementById(eleId);
                tempy.innerHTML = eleVal;
                return tempy;
            }
}
}

function sear(){
    var x = document.getElementById('filt');
    x.setAttribute('class','cat');
    var filval = document.getElementById('fil').value;
    // console.log(filval);
    var request = new XMLHttpRequest();
    var inputValue = document.getElementById('search').value;
    var api = "AIzaSyAq1sFZzS5FFtyx2AsHjBkcroDnldOn-ro";
    // https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]
    var url = "https://youtube.googleapis.com/youtube/v3/search?type="+filval+"&part=snippet&maxResults=25&q="+inputValue+"&key="+api;
    request.open('GET',url,true);
    request.send();
    request.onload = function ()
    {
        var data = JSON.parse(this.response);
        for(var i = 0;i<18;i++)
        {
            var img_id = "img-"+i; 
            var ch_id = "ch-"+i;
            var vd_id = "vd-"+i;
            var cn_id = "cn-"+i;
            var vi_id = "vi-"+i;
            var ti_id = "ti-"+i;
            var videoid = data.items[i].id.videoId;
            var img_url = "https://www.youtube.com/watch?v="+videoid;
            console.log(img_url);
            var vid_url = url(i,img_url);
            var img2 = img_ch(img_id,data.items[i].snippet.thumbnails.default.url,data.items[i].snippet.thumbnails.default.width,data.items[i].snippet.thumbnails.default.height);
            var ch1 = img_ch(ch_id,data.items[i].snippet.thumbnails.default.url);
            var vd = name(vd_id,data.items[i].snippet.title);
            var cn = name(cn_id,data.items[i].snippet.channelTitle);
            // var vi = name(vi_id,data.items[i].snippet.publishedAt);
            // var ti = name(ti_id,data.items[i].snippet.publishTime);
            function img_ch(eleId,eleSrc,eleWid,elehgt,elesrcc)
            {
                var temp = document.getElementById(eleId);
                temp.setAttribute('src',eleSrc);
                temp.setAttribute('width',eleWid);
                temp.setAttribute('height',elehgt);
                var ch = document.getElementById(eleId);
                ch.setAttribute('src',eleSrc);
                return temp;
            }
            function name(eleId,eleVal){
                var tempy = document.getElementById(eleId);
                tempy.innerHTML = eleVal;
                return tempy;
            }
            function url(eleId,eleSrc){
                var temp2 = document.getElementById(eleId);
                temp2.setAttribute('href',eleSrc);
                return temp2;
            }
        }
    }
}  

