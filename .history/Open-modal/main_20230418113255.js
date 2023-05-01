/*
<div class="modal">
      <div class="modal-container">
        <div class="modal-close">
            <i class="fa fa-times modal-close"></i>
        </div>
        <div class="modal-content">
            
        </div>
      </div>
</div>
*/
const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
