var places = [
  { name: "egypt tangbia", comments: 22 },
  { name: "olling phisotip", comments: 13 },
  { name: "cortia dyna", comments: 8 },
  { name: "sysne of dubai", comments: 7 },
];

// function showModal(e) {
//   $("modal-img").append(
//     $(`<img
//         class="img-fluid w-100"
//         src="./${$(e.target).closest("img").attr("src")}"
//         alt="Photo of place to travel"
//         />`)
//   );
//   $("#exampleModal").modal("show");
// }

function createItem(number) {
  return `<div class="col-md-3">
    <div class="item d-flex flex-column justify-content-center">
      <div class="item-img">
        <img
          class="img-fluid w-100"
          src="./img/${number + 1}.jpeg"
          alt="Photo of place to travel"
        />
      </div>
      <div
        class="item-body p-3 d-flex flex-column justify-content-center gap-1"
      >
        <div class="item-title text-center">${places[number % 4].name}</div>
        <div class="item-desc text-center mx-1">
          Denatibus et magnis dis parturient montes, nascetur ridiculus
          mus
        </div>
        <div
          class="item-footer my-2 d-flex justify-content-between align-items-center"
        >
          <div
            class="item-footer-date d-flex justify-content-between align-items-center gap-1"
          >
            <i class="item-footer-date-logo fa-regular fa-calendar"></i>
            <div class="item-footer-date-text">Aug 5, 2013</div>
          </div>
          <div
            class="item-footer-comments ms-auto d-flex justify-content-between align-items-center gap-1"
          >
            <i
              class="item-footer-comments-logo fa-regular fa-comments"
            ></i>
            <div class="item-footer-commtens-text">${
              places[number % 4].comments
            } Comments</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function itemAppender(number) {
  for (let i = 0; i < number; i++) {
    $(".items-row").append(
      $(createItem(i)).on("click", function (event) {
        $(".modal-img").html("");
        $(".modal-img").append(
          $(`<img
                class="img-fluid w-100"
                src="${$(event.target).closest("img").attr("src")}"
                alt="Photo of place to travel"
                />`)
        );

        //could not figure how to set title with (closest item to the target)'s text
        $(".modal-text-wrapper").append(
          $(`<div
                class="modal-text-title">

               ${$(event.target).closest(".item-title").text()}

            </div>`)
        );
        // console.log($(event.target).closest($(".item-title").text()));

        $("#exampleModal").modal("show");
      })
    );
  }
}

$(document).ready(function () {
  itemAppender(12);
});
