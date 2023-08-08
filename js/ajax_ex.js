$(document).ready(function () {
  $.ajax({
    datatype: "json",
    type: "get",
    url: "ajax_ex.json",
    success: function (data) {
      var galleryHtml = "";
      data.forEach(function (item) {
        galleryHtml += `
            <div class="gallery_item">
                <img src="gallery/${item.image}" alt="갤1" />
                <div class="item_desc">
                    <h1>${item.title}</h1>
                    <p>${item.desc}</p>
                </div>
            </div>            
            `;
      });
      $("#gallery").html(galleryHtml);
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });
  //   -------------------------------------------
});
