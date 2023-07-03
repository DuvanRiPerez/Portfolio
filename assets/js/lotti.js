// let animationArea = document.querySelector('.anime')

// let animationObject = bodymovin.loadAnimation({
//     container:animationArea,
//     render: 'svg',
//     loop: true,
//     autoplay: true,
//     autoloadSegments: false,
//     path:"https://assets6.lottiefiles.com/packages/lf20_cuKhxGQKFB.json"
// });

let animationArea = document.querySelector('.anime');
// var body = document.body;

    let animationObject = bodymovin.loadAnimation({
            container: animationArea,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            autoloadSegments: false,
            path:"https://assets4.lottiefiles.com/private_files/lf30_kU41s4.json"
    });

    // function playLoop(){
    //   animationObject.playSegments([0,120],true);
    //   animationArea.classList.remove('active');
    //   body.classList.remove("activeBody");
    // }

    // animationObject.setSpeed(1);
    // animationObject.addEventListener('DOMLoaded',playLoop);
    
	//   animationArea.ondblclick = function(){
    //   this.classList.add('active');
    //   body.classList.add("activeBody");
    //   animationObject.playSegments([121,376],true);
    //   animationObject.addEventListener('loopComplete',playLoop);
	//   }