import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';


// document.querySelector('a').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.body.style.opacity = 0.5;
    
//     setTimeout(function() {
//       window.location = event.target.href;
//       document.body.style.transitionDuration = 0.6 + 's';
//     }, 200);
//   });
  
  document.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function(event) {
      event.preventDefault();
     
      setTimeout(function() {
        window.location = event.target.href;
        document.body.style.opacity = 0.6;
      }, 200);
    });
  });
  


// const images = document.querySelectorAll('[loading="lazy"]');

// for (let o = 0; o < images.length; o++) {
//     console.log(images[o].currentSrc)
// }


// https://miro.medium.com/fit/c/40/40/1*dmbNkD5D-u45r44go_cf0g.png

//  https://miro.medium.com/fit/c/30/30/1*QBY4yLB-8qciSZmu9tYqpA.jpeg
//  https://miro.medium.com/fit/c/140/140/1*w0mxv4fhKRU6oX8UWnEhNA.png
 
//  https://miro.medium.com/fit/c/30/30/1*orv7lXw4Z40bwKQcH8PRbQ.jpeg
//  https://miro.medium.com/fit/c/140/140/1*m78_vgpwvperwhgII7m6sw.png
 
//  https://miro.medium.com/fit/c/30/30/1*4HRhyWLOwtZEN7MQ8zLuHA.jpeg
//  https://miro.medium.com/fit/c/140/140/1*DW5sZRPjJ9gMyZ6lv6B3Nw.png
 
//  https://miro.medium.com/fit/c/30/30/1*XlMXM1xJ5ziwnzOfWuQ7yw.png
//  https://miro.medium.com/fit/c/140/140/1*xl0is2eZuOkCpN1XSp3bpQ.png
 
//  https://miro.medium.com/fit/c/30/30/1*c4f6sl8x4FMHwuogAMKTlw.jpeg
//  https://miro.medium.com/fit/c/140/140/1*MqvnsyDAs5Krqi0ISNW4Qw.png
 
//  https://miro.medium.com/fit/c/30/30/1*6R1ol9esvjbWnojm4Pvc8g.jpeg
//  https://miro.medium.com/fit/c/140/140/1*Vgw7015Wn1yk0Cykrh4Y_w.png

//  https://miro.medium.com/fit/c/45/45/1*cFFJzHp-fD3zlIAOrhWlsQ.png
//  https://miro.medium.com/fit/c/45/45/1*koRv2gX-m8_iGuairVseTQ.jpeg
//  https://miro.medium.com/fit/c/45/45/1*YhN4rcu3w-KeTjHgzYbEYw.jpeg
//  https://miro.medium.com/fit/c/45/45/1*PbYgkujSNWZWwrFzNXNLHQ.jpeg
//  https://miro.medium.com/fit/c/45/45/1*TNr8KAHiJv7Lc3_d877Gyw.jpeg
//  https://miro.medium.com/fit/c/45/45/1*v0f_R_HRzNOKCqI-sBoqcA.jpeg
//  https://miro.medium.com/fit/c/45/45/1*ScBvCx9q6bfmWfeA-BiTKg.png
//  https://miro.medium.com/fit/c/45/45/1*tfkFthuGM40WzNNdAHuY5w@2x.jpeg
//  https://miro.medium.com/fit/c/45/45/1*S_OXi_dMG_UO0s-miVCT_Q.jpeg
//  https://miro.medium.com/fit/c/40/40/0*u9Ha3uTCjEmW_3gn.gif
//  https://miro.medium.com/fit/c/40/40/1*veEX4-CiLz5jqUjwWfQo_Q.jpeg
//  https://miro.medium.com/fit/c/40/40/2*bSxBzySUaoCIbUat-AEy6A.jpeg
//  https://miro.medium.com/fit/c/40/40/1*h7N9lGEJNfg1RtRbm--OCw.jpeg
//  https://miro.medium.com/fit/c/40/40/1*iS1UwYrqJUAkVtLVR_mZXQ.jpeg