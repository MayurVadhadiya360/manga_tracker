document.querySelectorAll(".btn_g").forEach((element)=>{
    element.addEventListener('click', ()=>{
        action = "/"+element.innerHTML;
        document.getElementById("myform").action = action;//`http://localhost:5556/${element.value}`;
        document.getElementById("myform").submit();
        console.log(element.innerHTML);
        
    });
});

let add_btn = document.getElementById("add_weeb");
add_btn.addEventListener('click', ()=>{
    let title = document.getElementById('title').value;
    let link_url = document.getElementById('link_url').value;
    let select_genre = document.getElementById('select_genre').value;
    let watched_inp = document.getElementById('watched_inp').value;
    let types = document.getElementsByName('inlineRadioOptions');
    let type;
    types.forEach(ele=>{
        if(ele.checked){
            type = ele.value;
        }

    });

    data = {
        name:title,
        source_url:link_url,
        genre:select_genre,
        progress:watched_inp,
        type:type
    };

    fetch("/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    });
    document.getElementById('title').value = "";
    document.getElementById('link_url').value = "";
    document.getElementById('select_genre').value = "";
    document.getElementById('watched_inp').value = "";
    ele = document.getElementsByName('inlineRadioOptions');
    ele[0].checked = false;
    ele[1].checked = false;

    // console.log("title :", title);
    // console.log("link :", link_url);
    // console.log("Genre :", select_genre);

    // console.log("Watched :", watched_inp);
    // console.log("type :", type);
    // console.log();






});

function update_fun(_id){
    // _id = "_id";

    if(document.getElementById(`${_id}_up_field`).hidden){
        console.log(_id);
        document.getElementById(`${_id}_up_field`).hidden = false ;
        
    }else{
        let title = document.getElementById(`${_id}_title`).innerText;
        let up_prg = document.getElementById(`${_id}_watched_inp`).value;
        if(up_prg == ""){

        }else{

            data = {
                title_ : title,
                progress_ : up_prg
            };
            fetch("/",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            });
            document.getElementById(`${_id}_episode`).innerText = up_prg;
        }
        console.log(up_prg);
        document.getElementById(`${_id}_up_field`).hidden = true;
    }
}
