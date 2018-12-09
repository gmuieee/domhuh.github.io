var workshops = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/workshops.json",
            success: function(result) {

                // Remove projects that aren't active
                for (var i=0;i<result.length;i++) {
                    if (!result[i].active) {
                        result.splice(i,1);
                    }
                }

                for (var i=0;i<result.length;i++) {
                    if (i%2==0) {
                        $("#wsCol1").append(getHTMLString(result[i]));
                    } else {
                        $("#wsCol2").append(getHTMLString(result[i]));
                    }
                }
            }
        }
    );
})

function getHTMLString(project) {
    var returnString = `<div class="project-grid">
                            <h3 class="subtopic">${workshops.title}</h3>
                            <div class="content">
                                <img class="project-image" src="${workshops.img}">
                                <div class="text-content">
                                    <p class="project-info">
                                        ${project.desc}
                                        <h4 class="developers-heading"><strong>Leader</strong></h4>
                                        <div class="developers">
                                        `

    var developers = workshops.developers;
    for (var i=0;i<developers.length;i++) {
        returnString+=`<div class="dev">
                            <img src="${developers[i].img}" width="100px" class="dev-image">
                            <h3 class="dev-name">${workshops[i].name}</h3>
                        </div>`;
    }
    
    returnString+=`</div></p></div></div></div>`

    return returnString;
}
