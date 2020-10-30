

// Create a new list item when clicking on the "Add" button
function newElement() {
    var div = document.createElement("div");
    div.className = "row";
    var div_col = document.createElement("div");
    div_col.className = "col-lg-12";

    var header1 = document.createElement("h1");
    header1.className = "mt-4";

    var postTitle = document.getElementById("name").value;
    if(postTitle === ''){
        alert("The post title isn't filled in!");
        return;
    }else{
        header1.innerText = postTitle;
    }
    div_col.appendChild(header1);
    div_col.appendChild(document.createElement("hr"));

    var p = document.createElement("p");
    var postContent = document.getElementById("postContent").value;
    if(postContent === ''){
        alert("The post contents aren't filled in!")
        return;
    }else{
        p.innerText = postContent;
    }
    div_col.appendChild(p);
    div_col.appendChild(document.createElement("hr"));

    div.appendChild(div_col);

    var posts = document.getElementById("posts");
    posts.appendChild(div);

    document.getElementById("name").value = "";
    document.getElementById("postContent").value = "";
    alert("Thank you for posting! :)")
}