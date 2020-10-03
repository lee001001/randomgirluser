const pnael = document.querySelector('#panel')
const addBtn = document.querySelector('#add-btn')
const url = 'https://randomuser.me/api/?gender=female&results=3'
let htmlContent = ''

addBtn.addEventListener('click', e => {
  axios.get(url).then(res => {
    for (let i = 0; i < 3; i++) {
      // 產生資料
      console.log(res)
      const data = res.data.results
      // 產生模板

      htmlContent +=
        `
        <div class="card mt-3 user-data" style = "width: 18rem;" >
          <img src="${data[i].picture.medium}" class="card-img-top">
            <div class="card-body" >
              <h5 class="card-title">${data[i].name.title} ${data[i].name.first}</h5>
              <p class="card-text">${data[i].email}</p>
            </div >
      </div>
    `
      pnael.innerHTML = htmlContent
    }
  })
})
