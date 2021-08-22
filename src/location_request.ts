import axios from 'axios';
let data = JSON.stringify({"latitud":1,"longitud":2});

let config = {
  method: 'post',
  url: 'http://192.168.18.84:3000',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

export const request=()=>axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
