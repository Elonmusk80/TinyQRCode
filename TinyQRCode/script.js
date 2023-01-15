let $ = document
let BtnConvert = $.querySelector('.btn_convert')
let inputAddress = $.querySelector('.input_address')
let imgQurCode = $.querySelector('.img_QurCode')

BtnConvert.addEventListener('click',function(e) {
    e.preventDefault()
    let inputValue = inputAddress.value;
    // validate input
    if(inputValue) {
          imgQurCode.classList.remove('hidden');
          // Start code Success
          let timerInterval
          Swal.fire({
          title: 'Creating QRCode',
          html: 'I will Creating in <b></b> milliseconds.',
          timer: 500,
          timerProgressBar: true,
          didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
              }, 100)
          },
          willClose: () => {
              clearInterval(timerInterval)
          }
          }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
          }
          })
          imgQurCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputValue;
    } else {
        Swal.fire({
            position: 'top-start',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1500
          })
    }
})

inputAddress.addEventListener('keyup',function() {
    if(!inputAddress.value) {
        imgQurCode.classList.add('hidden');
    }
})