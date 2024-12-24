var AllData = [];

function getPosts() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.response));
      AllData = JSON.parse(xhr.response);
      display();
    }
  });
}

function display() {
    var data = "";
    for (var i = 0; i < 6; i++) {
      data += `<div class="col-md-12 my-3">
                  <div class="card shadow-sm" style="border-radius: 10px; border: 1px solid #ddd;">
                      <!-- Header -->
                      <div class="card-header d-flex align-items-center bg-white">
                          <img src="https://via.placeholder.com/40" alt="Profile Picture" class="rounded-circle" style="width: 40px; height: 40px; object-fit: cover;">
                          <div class="ms-2">
                              <h6 class="mb-0" style="font-weight: bold;">User ${AllData[i].userId}</h6>
                              <small class="text-muted">Just now · 🌍 Public</small>
                          </div>
                          <div class="ms-auto">
                              <button class="btn btn-light btn-sm">
                                  <i class="fas fa-ellipsis-h"></i>
                              </button>
                          </div>
                      </div>
                      <!-- Body -->
                      <div class="card-body">
                          <p class="mb-0" style="font-size: 16px;">${AllData[i].body}</p>
                      </div>
                      <!-- Footer -->
                      <div class="card-footer bg-white">
                          <div class="d-flex justify-content-between text-center">
                              <div class="w-100">
                                  <button class="btn btn-light w-100 d-flex align-items-center justify-content-center" style="gap: 5px;">
                                      <i class="far fa-thumbs-up"></i>
                                      <span>Like</span>
                                  </button>
                              </div>
                              <div class="w-100">
                                  <button class="btn btn-light w-100 d-flex align-items-center justify-content-center" style="gap: 5px;">
                                      <i class="far fa-comment"></i>
                                      <span>Comment</span>
                                  </button>
                              </div>
                              <div class="w-100">
                                  <button class="btn btn-light w-100 d-flex align-items-center justify-content-center" style="gap: 5px;">
                                      <i class="fas fa-share"></i>
                                      <span>Share</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
    }
    document.getElementById("myData").innerHTML = data;
  }
  
getPosts();


